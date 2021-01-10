"use strict";
const app = getApp();
const videoList = [{ url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
    { url: 'http://vjs.zencdn.net/v/oceans.mp4' },
    { url: 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
    { url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4' },
    { url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4' },
    { url: 'https://stream7.iqilu.com/10339/article/202002/18/2fca1c77730e54c7b500573c2437003f.mp4' },
    { url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218025702PSiVKDB5ap.mp4' },
    { url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4' },
    { url: 'https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4' },
    { url: 'http://stream4.iqilu.com/ksd/video/2020/02/17/c5e02420426d58521a8783e754e9f4e6.mp4' }];
Page({
    data: {
        videoList,
    },
    onLoad() {
    },
    methods: {},
    funcPulldownRefresh() {
        console.log('下拉刷新逻辑');
    },
    funcPagination() {
        console.log('加载数据逻辑');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFDaEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxtREFBbUQsRUFBRTtJQUM5RSxFQUFFLEdBQUcsRUFBRSxvQ0FBb0MsRUFBRTtJQUM3QyxFQUFFLEdBQUcsRUFBRSxpREFBaUQsRUFBRTtJQUMxRCxFQUFFLEdBQUcsRUFBRSx5RkFBeUYsRUFBRTtJQUNsRyxFQUFFLEdBQUcsRUFBRSx5RkFBeUYsRUFBRTtJQUNsRyxFQUFFLEdBQUcsRUFBRSx3RkFBd0YsRUFBRTtJQUNqRyxFQUFFLEdBQUcsRUFBRSx5RkFBeUYsRUFBRTtJQUNsRyxFQUFFLEdBQUcsRUFBRSx5RkFBeUYsRUFBRTtJQUNsRyxFQUFFLEdBQUcsRUFBRSx3RkFBd0YsRUFBRTtJQUNqRyxFQUFFLEdBQUcsRUFBRSxvRkFBb0YsRUFBRSxDQUFDLENBQUE7QUFDL0YsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osU0FBUztLQUNWO0lBRUQsTUFBTTtJQUVOLENBQUM7SUFDRCxPQUFPLEVBQUUsRUFDUjtJQUNELG1CQUFtQjtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCxjQUFjO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2QixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuY29uc3QgdmlkZW9MaXN0ID0gW3sgdXJsOiAnaHR0cDovL2NsaXBzLnZvcndhZXJ0cy1nbWJoLmRlL2JpZ19idWNrX2J1bm55Lm1wNCcgfSxcbiB7IHVybDogJ2h0dHA6Ly92anMuemVuY2RuLm5ldC92L29jZWFucy5tcDQnIH0sIFxuIHsgdXJsOiAnaHR0cHM6Ly9tZWRpYS53My5vcmcvMjAxMC8wNS9zaW50ZWwvdHJhaWxlci5tcDQnIH0sIFxuIHsgdXJsOiAnaHR0cHM6Ly9zdHJlYW03LmlxaWx1LmNvbS8xMDMzOS91cGxvYWRfdHJhbnNjb2RlLzIwMjAwMi8xOC8yMDIwMDIxODExNDcyM0hEdTNoaHhxSVQubXA0JyB9LCBcbiB7IHVybDogJ2h0dHBzOi8vc3RyZWFtNy5pcWlsdS5jb20vMTAzMzkvdXBsb2FkX3RyYW5zY29kZS8yMDIwMDIvMTgvMjAyMDAyMTgwOTMyMDZ6OFYxSnVQbHBlLm1wNCcgfSwgXG4geyB1cmw6ICdodHRwczovL3N0cmVhbTcuaXFpbHUuY29tLzEwMzM5L2FydGljbGUvMjAyMDAyLzE4LzJmY2ExYzc3NzMwZTU0YzdiNTAwNTczYzI0MzcwMDNmLm1wNCcgfSwgXG4geyB1cmw6ICdodHRwczovL3N0cmVhbTcuaXFpbHUuY29tLzEwMzM5L3VwbG9hZF90cmFuc2NvZGUvMjAyMDAyLzE4LzIwMjAwMjE4MDI1NzAyUFNpVktEQjVhcC5tcDQnIH0sIFxuIHsgdXJsOiAnaHR0cHM6Ly9zdHJlYW03LmlxaWx1LmNvbS8xMDMzOS91cGxvYWRfdHJhbnNjb2RlLzIwMjAwMi8xOC8yMDIwMDIxODEwMzg0NzRsaXlObm5TenoubXA0JyB9LCBcbiB7IHVybDogJ2h0dHBzOi8vc3RyZWFtNy5pcWlsdS5jb20vMTAzMzkvYXJ0aWNsZS8yMDIwMDIvMTgvMDIzMTlhODFjODBhZmVkOTBkOWEyYjlkYzQ3Zjg1YjkubXA0JyB9LCBcbiB7IHVybDogJ2h0dHA6Ly9zdHJlYW00LmlxaWx1LmNvbS9rc2QvdmlkZW8vMjAyMC8wMi8xNy9jNWUwMjQyMDQyNmQ1ODUyMWE4NzgzZTc1NGU5ZjRlNi5tcDQnIH1dXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHZpZGVvTGlzdCxcbiAgfSxcblxuICBvbkxvYWQoKSB7XG5cbiAgfSxcbiAgbWV0aG9kczoge1xuICB9LFxuICBmdW5jUHVsbGRvd25SZWZyZXNoKCl7XG4gICAgY29uc29sZS5sb2coJ+S4i+aLieWIt+aWsOmAu+i+kScpXG4gIH0sXG4gIGZ1bmNQYWdpbmF0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ+WKoOi9veaVsOaNrumAu+i+kScpXG4gIH1cblxufSlcbiJdfQ==