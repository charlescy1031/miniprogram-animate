// index.ts

Page({
    data: {
        meum: wx.getMenuButtonBoundingClientRect(),
        myClassStyle: 'top:0px;',
        myClassStyle_text:"",
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
        let animationA = wx.createAnimation({
            duration: 3500,
            timingFunction: 'ease',
            delay: 0,
        })
        let animationDataB =  wx.createAnimation({
            duration: 500,
            timingFunction: 'ease',
            delay: 0,
        })
        // console.log(this.data.meum.height)
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
        }, 3)

        // 缩小动画
        const height = wx.getSystemInfoSync().windowHeight //屏幕高度
        const width = wx.getSystemInfoSync().windowWidth　　//屏幕宽度
        const res = wx.getSystemInfoSync();
        console.log(res, width, height)
        const Arrays: any = [[480, 752]]
        if (Arrays.every(() => { })) { }
        if (height > 750 && height !== 800) {
            animationA.width(48).height(48).left('63.5%').bottom('90px').step({ duration: 1200 })
        } else if (height === 800) {
            animationA.width(48).height(48).left('63.5%').top('auto').bottom(58).step({ duration: 1200 })
        } else {
            animationA.width(48).height(48).left('63.5%').top('auto').bottom(58).step({ duration: 1200 })
        }
        animationDataB.scale(0.2).step({ duration: 1200 })

        // 展示navbar
        this.setData({ showNav: true, myClassStyle: "border-radius:10px;" ,myClassStyle_text:"width:40px;height:10px;margin:0px;"})

        // 消失动画
        // animationA.translateY(58).opacity(1).step({ delay: 1000, duration: 200 })
        // animationA.scale(0).opacity(0).step({ duration: 800 })
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

});
