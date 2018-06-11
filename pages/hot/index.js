Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotData: null,
    tabData: null,
    swiperData: null,
    classMap: ['onePiece', 'twoPiece', 'threePiece', 'fourPiece'],
    active: 0,
    navigationBarText: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.setNavigationBarTitle({
      title: '精选'
    })
    wx.request({
      url: 'https://post.szjx520.com/jx-post/postService/post/hot?showPage=1',
      success (res) {
        that.setData({hotData: res.data})
        console.log(that.data.hotData)
      }
    })
    wx.request({
      url: 'https://post.szjx520.com/jx-post/typeService/type/own?userID=2888180411',
      success (res) {
        that.setData({tabData: res.data})
        console.log(that.data.tabData)
      }
    })
    wx.request({
      url: 'https://post.szjx520.com/jx-post/carouselService/findAll?type=0',
      success (res) {
        that.setData({swiperData: res.data})
        console.log(that.data.swiperData)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // 点击切换导航栏
  toggleTab (ev) {
    this.setData({ active: ev.currentTarget.dataset.index })
    this.setData({ navigationBarText: ev.currentTarget.dataset.titleName })
    wx.setNavigationBarTitle({
      title: this.data.navigationBarText
    })
  },
  // 预览图片
  previewImg (ev) {
    let imgArr = ev.currentTarget.dataset.imgList
    imgArr = imgArr.map((item, index) => {
      return 'https://www.szjx520.com/' + item
    })
    wx.previewImage({
      urls: imgArr
    })
  }
})
