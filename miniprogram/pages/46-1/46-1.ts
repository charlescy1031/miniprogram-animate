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
        myClassStyle: '',
        myClassStyleBg: "",
        showNav: false
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
            duration: 2500,
            timingFunction: 'ease',
            delay: 0,
            transformOrigin: " 70% 82% 0"
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

        const height = wx.getSystemInfoSync().windowHeight //屏幕高度
        const width = wx.getSystemInfoSync().windowWidth　　//屏幕宽度
        const res = wx.getSystemInfoSync();
        console.log(res, width, height)
        const Arrays: any = [[480, 752]]
        if (Arrays.every(() => { })) { }
        if (height > 750 && height !== 800) {
            animationA.width(48).height(48).left('64%').bottom(90).step({ duration: 600 })
        } else if (height === 800) {
            animationA.width(48).height(48).left('64%').bottom(58).step({ duration: 600 })
        } else {
            animationA.width(48).height(48).left('64%').bottom(58).step({ duration: 600 })
        }

        // 展示navbar
        this.setData({ showNav: true, myClassStyle: "border-radius:10px;" })

        // 消失动画
        animationA.translateY(58).opacity(1).step({ delay: 1500, duration: 200 })
        animationA.scale(0).opacity(0).step({ duration: 200 })
        setTimeout(() => {
            if (typeof this.getTabBar === 'function' && this.getTabBar()) {
                this.getTabBar().setData({
                    ['list[3].iconPath']: "/image/tabBar/24dot.svg",
                    selected: 0,
                })
            }

        }, 1000)
        // 将动画导出到页面
        this.setData({
            animationData: animationA.export()
        })



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
