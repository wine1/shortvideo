// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const videoList = [{ url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }, { url: 'http://vjs.zencdn.net/v/oceans.mp4' }, { url: 'https://media.w3.org/2010/05/sintel/trailer.mp4' }, { url: 'http://yun.it7090.com/video/XHLaunchAd/video03.mp4' }, { url: 'http://yun.it7090.com/video/XHLaunchAd/video02.mp4' }, { url: 'http://yun.it7090.com/video/XHLaunchAd/video01.mp4' }]
Page({
  data: {
    videoList,
  },

  onLoad() {

  },

})
