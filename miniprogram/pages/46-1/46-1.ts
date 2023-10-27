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
        background: ["demo-text-1", "demo-text-2", "demo-text-3"],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500,
        myClassStyle: ""
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
    clickfn(e: any) {
        const query = wx.createSelectorQuery();
        const element = query.select('#viewId')
        console.log(e, element)


        let animationA = wx.createAnimation({
            duration: 1500,
            timingFunction: 'linear',
            delay: 0,
            transformOrigin: '70% 96% '
        })

        // 缩小动画
        animationA.scale(0.1).scaleY(0.7).opacity(1).step({ duration: 600 })
        // animationA.translateY(500).step({ duration: 500 })
        // 消失动画
        animationA.scale(0).translateY(900).opacity(0).step({ delay: 400 ,duration:300})

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
