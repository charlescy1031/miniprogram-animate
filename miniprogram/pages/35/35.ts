// index.ts

Page({
  data: {
    storeTopB: 250,
    storeTopC: 400,
    cardList: [{
      top: "top:0;",
      cardSrc: "/image/35/送礼专区-机制_01.png", cardTitle: "语音卡片", cardDesc: "（温馨提示：如不定制礼品卡，将默认官方礼品卡随之赠送）"
    },
    {
      top: "top:250px;",
      cardSrc: "/image/35/送礼专区-机制_02.png", cardTitle: "礼盒包装", cardDesc: ""
    },
    {
      top: "top:400px;", cardSrc: "/image/35/送礼专区-机制_03.png", cardTitle: "专属赠品", cardDesc: ""
    }],
    showNav: true
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
  getBgClass(index: any) {
    return 'card-item-' + index
  },
  // 事件处理函数
  clickfn(e: any) {
    var index = e.currentTarget.dataset.index;
    let animationA = wx.createAnimation({
      duration: 200,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '72% 80%'
    })


    if (index === 0) {
      // 数据复位
      animationA.opacity(1).step({ duration: 200 })
      let tempA = 0;
      let posSetinterval = setInterval(() => {
        if (tempA >= 100) {
          clearInterval(posSetinterval)
          this.data.storeTopB = 250;
          this.data.storeTopC = 400;
          this.setData({
            ['cardList[1].top']: `top:${this.data.storeTopB}px;`,
            ['cardList[2].top']: `top:${this.data.storeTopC}px;`,
          })
        } else {
          this.setData({
            ['cardList[1].top']: `top:${this.data.storeTopB}px;`,
            ['cardList[2].top']: `top:${this.data.storeTopC}px;`,
          })
          this.data.storeTopB += 4
          this.data.storeTopC += 4
          tempA += 4
        }
      }, 1)


     

    } else if (index === 1) {
      animationA.opacity(0).step({ duration: 200 })
      let posSetinterval = setInterval(() => {
        if (this.data.storeTopB <= 150) {
          clearInterval(posSetinterval)
          this.data.storeTopB = 150;
          this.setData({
            ['cardList[1].top']: `top:${this.data.storeTopB}px;`,
          })
        } else {
          this.setData({
            ['cardList[1].top']: `top:${this.data.storeTopB}px;`,
          })
          this.data.storeTopB -= 4
        }
      }, 1)

    } else {
      animationA.opacity(0).step({ duration: 200 })

      let posSetinterval = setInterval(() => {
        if (this.data.storeTopC <= 300) {
          clearInterval(posSetinterval)
          this.data.storeTopC = 300;
          this.setData({
            ['cardList[2].top']: `top:${this.data.storeTopC}px;`,
          })
        } else {
          this.setData({
            ['cardList[2].top']: `top:${this.data.storeTopC}px;`,
          })
          this.data.storeTopC -= 4
        }
      }, 1)
    }
    // 将动画导出到页面
    this.setData({
      animationData: animationA.export()
    })
  }
})


