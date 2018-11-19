//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // imgSwiperData
    imgUrls: [
'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a1ec08fa513d26970bdfe5e15dfbb2fb4316d87a.jpg',
    'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a1ec08fa513d26970bdfe5e15dfbb2fb4316d87a.jpg',
    'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a1ec08fa513d26970bdfe5e15dfbb2fb4316d87a.jpg'
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: true,
    inputVal: "",

// 公告轮播
    noticeList: [
      { url: "url", title: "公告：多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
      { url: "url", title: "公告：悦如公寓三周年生日趴邀你免费吃喝欢唱" },
      { url: "url", title: "公告：你想和一群有志青年一起过生日嘛？" }],

// contentSwiperData
    contentData: [0,1],
    hideDots: false,  //是否显示面板指示点
    contentPlay: false,      //是否自动切换
    ttlTab: 0,
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 点击切换标签
  switchTab:function(e){
    this.setData({
      ttlTab: e.currentTarget.dataset.tabFlag - 0,
    })
  },
  // 改变tab
  changeTab:function(e){
    this.setData({
      ttlTab: e.detail.current,
    })
  },
  onLoad: function () {
  },
})
