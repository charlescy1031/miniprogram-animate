// index.ts

Page({
  data: {
    isAOpen: true,
    isBOpen: false,
    isCOpen: false,
    cardList: [{
      cardSrc: "/image/35/送礼专区-机制_01.png", cardTitle: "语音卡片", cardDesc: "（温馨提示：如不定制礼品卡，将默认官方礼品卡随之赠送）"
    },
    {
      cardSrc: "/image/35/送礼专区-机制_02.png", cardTitle: "礼盒包装", cardDesc: ""
    },
    {
      cardSrc: "/image/35/送礼专区-机制_03.png", cardTitle: "专属赠品", cardDesc: ""
    }],
    showNav: true
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  // 事件处理函数
  clickfn(e: any) {
    var index = e.currentTarget.dataset.index;
    let animationA = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
      delay: 0,
      transformOrigin: '72% 80%'
    })
    let animationB = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
      delay: 0,
      transformOrigin: '72% 80%'
    })
    let animationC = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
      delay: 0,
    })
    if (index === 0 && this.data.isCOpen) {
      animationA.opacity(1).step({ duration: 500 })
      animationB.top(250).step({ duration: 500 })
      animationC.top(400).step({ duration: 500 })
      this.setData({ isAOpen: true, isBOpen: false, isCOpen: false })
    }

    if (index === 1 && this.data.isAOpen) {
      animationA.opacity(0).step({ duration: 500 })
      animationB.top(150).step({ duration: 500 })
      this.setData({ isAOpen: false, isBOpen: true, isCOpen: false })
    } else if (index === 1 && !this.data.isAOpen) {
      animationA.opacity(1).step({ duration: 500 })
      animationB.top(250).step({ duration: 500 })
      animationC.top(400).step({ duration: 500 })
      this.setData({ isAOpen: true, isBOpen: false, isCOpen: false })
    } else {

    }
    if (index === 2 && !this.data.isCOpen) {
      animationA.opacity(0).step({ duration: 500 })
      animationB.top(150).step({ duration: 500 })
      animationC.top(300).step({ duration: 500 })
      this.setData({ isAOpen: false, isBOpen: false, isCOpen: true })
    } else if (index === 2 && this.data.isCOpen) {
      animationC.top(400).step({ duration: 500 })
      this.setData({ isAOpen: false, isBOpen: true, isCOpen: false })
    }

    // 将动画导出到页面
    this.setData({
      animationData1: animationA.export(),
      animationData2: animationB.export(),
      animationData3: animationC.export()
    })

  },
  onReachBottom: function () {
    setTimeout(() => {
        this.clickfn(e)
    }, 1000)
},
})


