// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()

Page({
    onShareAppMessage() {
        return {
            title: "swiper",
            path: "page/component/pages/swiper/swiper",
        };
    },

    data: {
        meum: wx.getMenuButtonBoundingClientRect(),
        background: ["demo-text-1", "demo-text-2", "demo-text-3"],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500,
        myClassStyle: "",
        showNav: false
    },

    changeIndicatorDots() {
        this.setData({
            indicatorDots: !this.data.indicatorDots,
        });
    },

    changeAutoplay() {
        this.setData({
            autoplay: !this.data.autoplay,
        });
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    },
    clickfn() {
        // const query = wx.createSelectorQuery();
        // const element = query.select('#viewId');
        let animationA = wx.createAnimation({
            duration: 1500,
            timingFunction: 'linear',
            delay: 0,
            transformOrigin: '72% 80% '
        })
        // console.log(this.data.meum.height)
        let calcuHeight = 100;
        let setIntervalNum = 6;
        let blackBgToWhiteInterval = setInterval(() => {
            if (calcuHeight <= 10) {
                this.setData({
                    myClassStyleBg: 'height: 9.6vh;background:#fff;'
                })
                clearInterval(blackBgToWhiteInterval)
            } else if (calcuHeight < 20) {
                setIntervalNum = 12;
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

        }, setIntervalNum)
        // 缩小动画
        animationA.scaleX(0.128).scaleY(0.07196).opacity(1).step({ duration: 600 })
        // 展示navbar
        this.setData({ showNav: true })
        // 消失动画
        animationA.translateY(600).opacity(1).step({ delay: 300, duration: 200 })
        animationA.scale(0).opacity(0).step({ duration: 200 })
        setTimeout(() => {
            if (typeof this.getTabBar === 'function' && this.getTabBar()) {
                this.getTabBar().setData({
                    ['list[3].iconPath']: "/image/tabBar/24dot.svg",
                    selected: 0,
                })
            }
        }, 1500)
        // 将动画导出到页面
        this.setData({
            animationData: animationA.export()
        })
        setTimeout(() => {
            this.setData({
                myClassStyle: 'border-radius:60px;',
            })
        }, 600)


    },
    onReachBottom: function () {
        setTimeout(() => {
            this.clickfn()
        }, 1000)
    },
    intervalChange(e: any) {
        this.setData({
            interval: e.detail.value,
        });
    },

    durationChange(e: any) {
        this.setData({
            duration: e.detail.value,
        });
    },
});
