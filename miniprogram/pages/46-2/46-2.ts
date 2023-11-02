Page({
    onShareAppMessage() {
        return {
            title: "swiper",
            path: "page/component/pages/swiper/swiper",
        };
    },
    data: {
        meum: wx.getMenuButtonBoundingClientRect(),
        showBanner: true,
        myClassStyle: "",
        showNav: false,
        showIcon: false,
        showExplore: "none",
        zIndex: 99999,
        explorePos: 70
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    },
    clickfn() {
        this.setData({
            showIcon: true,
            showExplore: 'block'
        })
        let animationA = wx.createAnimation({
            duration: 400,
            timingFunction: 'ease',
            delay: 0,
            transformOrigin: '10% 10% '
        })

        let animationB = wx.createAnimation({
            duration: 1500,
            timingFunction: 'ease',
            delay: 0,
            transformOrigin: '5% 2% 0'
        })
        let animationC = wx.createAnimation({
            duration: 400,
            timingFunction: 'ease',
            delay: 0,
            transformOrigin: '50% 30% '
        })

        let calcuHeight = 100;
        let blackBgToWhiteInterval = setInterval(() => {
            if (calcuHeight <= 10) {
                this.setData({
                    myClassStyleBg: 'height: 9.6vh;background:#fff;'
                })
                clearInterval(blackBgToWhiteInterval)
            } else if (calcuHeight < 20) {
                calcuHeight -= 4.56;
                this.setData({
                    myClassStyleBg: `height: ${calcuHeight}vh;background:#404040;`
                })
            } else {
                calcuHeight -= 2.28;
                this.setData({
                    myClassStyleBg: `height: ${calcuHeight}vh;background:#404040;`
                })
            }
        })

        // 缩小动画
        animationA.scale(0.8).translateX(20).translateY(-60).step({ duration: 400 })
        animationC.width("80vw").height("55vh").opacity(1).top("100px").step({ duration: 400 })

        if (this.data.explorePos !== 0) {
            animationB.translateY(-100).opacity(0).step({ duration: 100 })
        }
        this.setData({ explorePos: 70 })
        animationB.translateY(this.data.explorePos).opacity(1).step({ duration: 600 })
        // 展示navbar
        this.setData({ showNav: true, zIndex: 999 })

        // 将动画导出到页面
        this.setData({
            animationData1: animationA.export(),
            animationData2: animationB.export(),
            animationData3: animationC.export()
        })
        setTimeout(() => {
            this.setData({
                myClassStyle: 'border-radius:10px;',
            })
        }, 600)
    },
    closefn() {
        this.setData({
            showBanner: false
        })
    },
    onReachBottom: function () {
        setTimeout(() => {
            this.clickfn()
        }, 1000)
    },
});
