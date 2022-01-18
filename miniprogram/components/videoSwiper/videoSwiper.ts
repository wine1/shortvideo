
let touchDotX = 0;//X按下时坐标
let touchDotY = 0;//y按下时坐标
Component({
  properties: {
    duration: {
      type: Number,
      value: 500
    },
    easingFunction: {
      type: String,
      value: 'default'
    },
    loop: {
      type: Boolean,
      value: true
    },
    pauseCurrentVideo: {
      type: Boolean,
      value: false,
      observer: function observer(newval) {
        let current = this.data._last
        let { curQueue } = this.data
        let that: any = this
        if (newval) {
          curQueue.forEach(function (item: any) {
            item.isPlay = false
          });
        } else {
          this.data._videoContexts.forEach(function (index: any) {
            if (current === index) {
              that.data._videoContext.play()
            } else {
              // 安卓真机videoContext.pause()方法不起作用？加定时器
              setTimeout(() => {
                that.data._videoContext.pause()
              }, 100)
            }
            // current === index ? ctx.play() : ctx.pause()
          });
          curQueue.forEach(function (item: any, index: any) {
            item.isPlay = current === index ? true : false
          });
        }
        this.setData({
          curQueue
        })
      }
    },
    videoList: {
      type: Array,
      value: [],
      observer: function observer(newVal) {
        newVal?.length && this._videoListChanged(newVal);
      }
    },
  },
  data: {
    nextQueue: <any>[],/**未被放入swiper的数组 */
    prevQueue: <any>[],/**已经被放入过swiper的数组 */
    curQueue: <any>[],/**放入swiper中的数组 */
    circular: false,
    currentIndex:0,current:0,
    _last: 0, /**记录current的滑动前的值 */
    _change: -2,
    _invalidUp: 0,
    _invalidDown: 0,
    _videoContexts: <any>[],
    diff: 0, /** diff为0时没有滑动 */
    touchDirction: 0,/**1 上滑 2 下滑 */
    lastTime: 0, /** 最后一次单击事件发生的时间 */
    lastTimeoutFunc: <any>[],/** 单击事件触发的函数*/
    time_id: 600,
    like_imgs: [],
    /** vediolist长度 */
    total:0,
    /** 记录当前视频在整个videolist中对应的下标 */
    recordPos:0,
  },
  lifetimes: {
    attached() {
    }
  },
  methods: {
    touchStart: function (e) {
      touchDotX = e.touches[0].pageX; // 获取触摸时的原点
      touchDotY = e.touches[0].pageY;
    },
    // 触摸结束事件
    touchEnd: function (e) {
      let { curQueue } = this.data
      let touchMoveX = e.changedTouches[0].pageX;
      let touchMoveY = e.changedTouches[0].pageY;
      let tmX = touchMoveX - touchDotX;
      let tmY = touchMoveY - touchDotY;
      let absX = Math.abs(tmX);
      let absY = Math.abs(tmY);
      if (absY > absX * 2 && tmY < 10) {
        /** 滑到最后一个视频后阻止视频继续滑动 */
        let {recordPos,total,current}=this.data
        if(recordPos>=total-1){
          this.setData({
            currentIndex:current
          })
        }
        console.log("上滑动=====")
        curQueue.forEach((item: any, index: any) => {
          if (this.data._last === index) {
            item.isSeek = true
          } else {
            item.isSeek = false
          }
        })
        this.setData({
          touchDirction: 1,
          curQueue
        })
      } else if (absY > absX * 2 && tmY > 100) {
        console.log("下滑动=====")
        curQueue.forEach((item: any, index: any) => {
          if (this.data._last === index) {
            item.isSeek = true
          } else {
            item.isSeek = false
          }
        })
        this.setData({
          touchDirction: 2,
          curQueue
        })
        if (!this.data.prevQueue.length && this.data._last == 0) {
          this.setData({
            prevQueue: [],
            nextQueue: []
          })
          this.triggerEvent('funcPulldownRefresh')
        }

      }
    },

    _videoListChanged: function _videoListChanged(newVal) {
      var _this = this;
      let {prevQueue,curQueue,nextQueue} = this.data;
 
      nextQueue =nextQueue.concat(newVal)
      if (curQueue.length === 0) {
        curQueue.forEach((item: any) => {
          item.isPlay = false
          item.isCurrent = false
        });
        curQueue=nextQueue.splice(0, 3)
        this.data.nextQueue=nextQueue
        this.setData({
          curQueue
        }, function () {
          _this.playCurrent(0)
          _this.triggerEvent('change', { activeVideo: curQueue[0] });
        });
      }
      this.data.total=prevQueue.length+curQueue.length+nextQueue.length

    },

    animationfinish: function animationfinish(e) {
      let that: any = this
      let { _last, _change, curQueue, prevQueue, nextQueue, touchDirction } = this.data
      var current = e.detail.current;
      this.data.current=current
      var diff = current - _last;
      if (diff === 0) return;
      this.data._last = current;
      this.playCurrent(current);
      this.triggerEvent('change', { activeVideo: curQueue[current] });
      var direction = diff === 1 || diff === -2 ? 'up' : 'down';
      if (nextQueue.length === 2 && touchDirction == 1) {
        //请求更多数据
        this.triggerEvent('funcPagination')
      }
      if (direction === 'up') {
        this.data.recordPos+=1
        if (this.data._invalidDown === 0) {
          var change = (_change + 1) % 3;
          if (change < 0) {
            this.data._change=change
            return
          }
          var add = nextQueue.shift();
          var remove = curQueue[change];
          if (add) {
            prevQueue.push(remove);
            curQueue[change] = add;
            this.data._change = change;
          } else {
            this.data._invalidUp += 1;
          }
        } else {
          this.data._invalidDown -= 1;
        }
      }
      if (direction === 'down') {
        this.data.recordPos-=1
        if (this.data._invalidUp === 0) {

          var _change2 = _change;
          var _remove = curQueue[_change2];
          var _add = prevQueue.pop();
          if (_add) {
            curQueue[_change2] = _add;
            nextQueue.unshift(_remove);

            this.data._change = (_change +2) % 3;
          } else {
            this.data._invalidDown += 1;
          }
        } else {
          this.data._invalidUp -= 1;
        }

      }
      var circular = true;
      /** 鉴于3n+2个视频长度时无法播放最后一个视频 取消末尾的circular限制 改成用视频长度来判断 */
      // if (nextQueue.length === 0 && current !== 0) {
      //   circular = false;
      // }
      if (prevQueue.length === 0 && current !== 2) {
        circular = false;
      }
      // console.log(prevQueue, curQueue, nextQueue)

      this.setData({
        curQueue,
        prevQueue,
        nextQueue,
        circular,
      }, function () {
        that.playCurrent(current);
        that.triggerEvent('change', { activeVideo: that.data.curQueue[current] });
      });
    },
    playCurrent: function playCurrent(current) {
      let { curQueue } = this.data
      // console.log('输出正在播放的列表',curQueue)
      curQueue.forEach((item: any, index: any) => {
        item.isPlay = index === current ? true : false;
        item.isCurrent = current === index ? true : false
      });
      this.setData({
        curQueue
      })
    },


    gesture(e: any) {
      let currentTime = new Date().getTime()
      let { lastTime, lastTimeoutFunc, curQueue } = this.data
      let current = e.currentTarget.dataset.index
      let isPlay = e.currentTarget.dataset.isplay
      if (currentTime - lastTime < 300) {
        clearTimeout(lastTimeoutFunc)
        this.drawLikeheart()
      } else {
        lastTimeoutFunc = setTimeout(() => {
          curQueue.forEach((item: any, index: any) => {
            if (current === index) {
              item.isPlay = isPlay ? false : true
            }
          });
          this.setData({
            curQueue
          })
        }, 500)
      }
      this.setData({
        lastTime: currentTime,
        lastTimeoutFunc
      })
    },


    onPlay(e) {
      this.trigger(e, 'play')
    },

    onPause(e) {
      this.trigger(e, 'pause')
    },

    onEnded(e) {
      this.trigger(e, 'ended')
    },

    onError(e) {
      this.trigger(e, 'error')
    },

    onTimeUpdate(e) {
      this.trigger(e, 'timeupdate')
    },

    onWaiting(e) {
      this.trigger(e, 'wait')
    },

    onProgress(e) {
      this.trigger(e, 'progress')
    },

    onLoadedMetaData(e) {
      this.trigger(e, 'loadedmetadata')
    },
    trigger(e, type, ext = {}) {
      const detail = e.detail
      const activeId = e.target.dataset.id
      this.triggerEvent(type, Object.assign({ ...detail, activeId }, ext))
    },

    /** 双击点赞 爱心 */
    drawLikeheart() {
      var _this = this
      // console.log('进入点赞爱心动画', _this.data.time_id)
      if (_this.data.time_id) {//判断是否有定时器
        //每次销毁定时器，下方会重新设定定时器
        clearTimeout(_this.data.time_id)
        //生成一个新的动画元素
        var obj: any = {}
        //设定红心坐标
        obj.pageX = touchDotX - 40
        obj.pageY = touchDotY - 40
        //生成随机动画类，此处我有4种动画，所以随机从0-3之间取值
        var angle = Math.floor(Math.random() * 4)
        var animations = ['like-img-animate', 'like-img-animate-l', 'like-img-animate-r', 'like-img-animate-rr']
        obj.animate = animations[angle]
        var like_imgs = _this.data.like_imgs.concat(obj)//将新的动画元素加入到like_imgs数组中
        _this.setData({//给like_imgs数组赋值
          like_imgs
        })
        // console.log('like_imgs', like_imgs)
      }
      var time_id = setTimeout(function () {//设定定时器
        _this.setData({
          like_imgs: [],//清空动画元素
        })
      }, 600)
      _this.setData({//将定时器加入页面变量中
        time_id
      })
      // console.log('time_id',time_id,this.data.time_id)
    },
  },

})

export { }