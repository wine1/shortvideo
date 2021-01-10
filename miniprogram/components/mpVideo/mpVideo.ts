
let dataAny: any
Component({

  properties: {
    src: {
      type: String,
      value: ''
    },
    seek: {
      type: Boolean,
      value: false,
      observer: function observer(val) {
        setTimeout(() => {
          val ? this.data._videoContext.seek(0) : ''
        }, 1000)
      }
    },
    isCurrent: {
      type: Boolean,
      value: true,
    },
    isLoading:{
      type:Boolean,
      value:false,
    },
    isPlay: {
      type: Boolean,
      value: false,
      observer: function observer(val) {
        if (val) {
          this.data._videoContext.play()
        } else {
          // 安卓真机videoContext.pause()方法不起作用？加定时器
          setTimeout(() => {
            this.data._videoContext.pause()
          }, 100)
        }
      }
    }
  },

  data: {
    _videoContext: dataAny,//video的实例
    barWidth: 0,//进度条
  },

  lifetimes: {
    attached() {
      this.data._videoContext = wx.createVideoContext('video', this)
    }
  },
  observers: {},

  methods: {
    onTimeUpdate: function onTimeUpdate(e: any) {
      // console.log('onTimeUpdate', e)
      if (this.data.seek) {
        this.setData({
          seek: false
        })
      }
      let molecule = e.detail.currentTime
      let denominator = e.detail.duration
      let barWidth = molecule / denominator * 100
      this.setData({
        barWidth,
        isLoading:false
      })
    },
    // onSeekcomplete(e: any) {
    //   console.log('onSeekcomplete', e)
    // },
    // onPlay(e: any) {
    //   console.log('play', e)
    // },
    // onPause: function onPause(e: any) {
    //   console.log('pause', e)
    // },
    // onEnded: function onEnded(e: any) {
    //   console.log('ended', e)
    // },
    // onError: function onError(e: any) {
    //   console.log('error', e)
    // },

    onWaiting: function onWaiting(e: any) {
      console.log('wait', e)
      this.setData({
        isLoading:true
      })
    },
    // onProgress: function onProgress(e: any) {
    //   console.log('progress', e)
    // },
    // onLoadedMetaData: function onLoadedMetaData(e: any) {
    //   console.log('loadedMetaData', e)
    // },
  }
})

export { }