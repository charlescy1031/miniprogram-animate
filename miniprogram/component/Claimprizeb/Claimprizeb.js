// component/Claimprize.ts
Component({

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        prizeText: "长按兑奖",
        myClassStyleLeft: '',
        color: 'color:blue',
        aSetInter: 0,
        count: -130
    },

    /**
     * 组件的方法列表
     */
    methods: {
        claimprizeFn() {

            this.data.aSetInter = setInterval(() => {
                if (this.data.count > -1) {
                    this.setData({
                        prizeText: '兑奖成功',
                        quiver: `position: relative;z-index: 99;transform:rotate(0deg)`
                    })
                    clearInterval(this.data.aSetInter)
                } else {
                    this.data.count += 1
                    this.setData({
                        myClassStyleLeft: `left:${this.data.count}px`
                    })
                    if (this.data.count > -90) {
                        let quiverCount = Math.random() > 0.5 ? 5 : -5
                        this.setData({
                            color: 'color: white',
                            quiver: `position: relative;z-index: 99;transform:rotate(${quiverCount}deg)`
                        })
                    }

                }
            })
        },
        touchEnd() {
            console.log('清楚动画')
            if (this.data.count < 0) {
                clearInterval(this.data.aSetInter)

                this.setData({
                    count: -130,
                    color: 'color:blue',
                    myClassStyleLeft: `left:${-150}px`,
                    quiver: `transform:rotate(0deg)`
                })
            }

        }
    }
})