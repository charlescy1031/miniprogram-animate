// index.ts

Page({
  data: {
    cardList: [{
      cardBgColor: "background:#AC4141;",
      cardSrc: "/image/35/送礼专区-机制_01.png", cardTitle: "语音卡片", cardDesc: "（温馨提示：如不定制礼品卡，将默认官方礼品卡随之赠送）"
    },
    {
      cardBgColor: "background:#8F5454;",
      cardSrc: "/image/35/送礼专区-机制_02.png", cardTitle: "礼盒包装", cardDesc: "（温馨提示：如不定制礼品卡，将默认官方礼品卡随之赠送）"
    },
    { cardBgColor: "background:#832F29;", cardSrc: "/image/35/送礼专区-机制_03.png", cardTitle: "专属赠品", cardDesc: "（温馨提示：如不定制礼品卡，将默认官方礼品卡随之赠送）" }],
    showNav: true
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

  < wxs module = "classGenerate" >
    function getVideoClass(index) {
      console.log('调用啦吗')
      return "video-" + index
    }
module.exports.getVideoClass = getVideoClass;
</wxs>
