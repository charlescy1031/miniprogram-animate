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
        showNav: true,
        showIcon: false,
        showExplore: "none",
        zIndex: 99999,
        showScreen: true
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    },
    clickfn() {

        let animationA = wx.createAnimation({
            duration: 1200,
            timingFunction: 'ease',
            delay: 0,
            transformOrigin: '10% 10% '
        })
        let animationB = wx.createAnimation({
            duration: 1200,
            timingFunction: 'ease',
            delay: 0,
            transformOrigin: '10% 10% '
        })
        animationB.opacity(0.9).step({ duration: 10 })
        let calcuHeight = 100;
        let blackBgToWhiteInterval = setInterval(() => {
            if (calcuHeight <= 9.6) {
                this.setData({
                    myClassStyleBg: 'height: 9.6vh;background:#fff;'
                })
                clearInterval(blackBgToWhiteInterval)
            } else {
                calcuHeight -= 1.14;
                this.setData({
                    myClassStyleBg: `height: ${calcuHeight}vh;background:#000;`
                })
            }
        })

        // 隐藏动画
        animationA.opacity(0).step({ duration: 1200 })
        animationB.opacity(1).step({ duration: 1200 })
        // 展示navbar
        setTimeout(() => {
            this.setData({ showNav: true, zIndex: 9, showScreen: false })
        }, 100)

        // 将动画导出到页面
        this.setData({
            animationData1: animationA.export(),
            animationData2: animationB.export()
        })
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
