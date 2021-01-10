// index.ts
// 获取应用实例

const app = getApp<IAppOption>()
const videoList = [{ url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
 { url: 'http://vjs.zencdn.net/v/oceans.mp4' }, 
 { url: 'https://media.w3.org/2010/05/sintel/trailer.mp4' }, 
 { url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4' }, 
 { url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4' }, 
 { url: 'https://stream7.iqilu.com/10339/article/202002/18/2fca1c77730e54c7b500573c2437003f.mp4' }, 
 { url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218025702PSiVKDB5ap.mp4' }, 
 { url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4' }, 
 { url: 'https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4' }, 
 { url: 'http://stream4.iqilu.com/ksd/video/2020/02/17/c5e02420426d58521a8783e754e9f4e6.mp4' }]
Page({
  data: {
    videoList,
  },

  onLoad() {

  },
  methods: {
  },
  funcPulldownRefresh(){
    console.log('下拉刷新逻辑')
  },
  funcPagination(){
    console.log('加载数据逻辑')
  }

})
