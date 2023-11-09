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
        myClassStyle: "background: #fff;", // 文字背景
        myClassStyleSuccess: "", // 兑奖成功背景
        myClassStyleTop: "", // 上边框
        myClassStyleBottom: "", // 下边框
        myClassStyleLeft: "", // 左边框
        myClassStyleRight: "", // 右边框
        toRightInter: 0, // 下边框计算动画
        toTopInter: 0, // 右边框计算动画
        toLeftInter: 0,  // 上边框计算动画
        toBottomInter: 0,// 左边框计算动画
        topbgInter: 0,// 文字最后蓝色背景
        rightSetTime: 0, // 右边框延时
        topSetTime: 0, // 上边框延时
        leftSetTime: 0, // 左边框延时
        prizeSetTime: 0, // 背景动画
    },

    /**
     * 组件的方法列表
     */

    methods: {
        onLoad(option: any) {
            // console.log(option.query);
            // wx.reLaunch({
            //     url: 'test?id=1'
            // }),
        },
        claimprizeFn() {
            console.log('logggg')
            // bindlongtap
            // 设置背景为淡蓝色
            this.setData({ myClassStyle: "background:rgb(167 223 255);" })
            // 第一步bottom
            let bottom = -130;
            this.data.toRightInter = setInterval(() => {
                if (bottom < 0) {
                    this.setData({ myClassStyleBottom: `left:${bottom}px` })
                    bottom += 1
                } else {
                    clearInterval(this.data.toRightInter)
                }
            }, 7)
            // 第二步right
            let right = -44;
            this.data.rightSetTime = setTimeout(() => {
                this.data.toTopInter = setInterval(() => {
                    if (right < 0) {
                        this.setData({ myClassStyleRight: `bottom:${right}px;right:0px` })
                        right += 1
                    } else {
                        clearInterval(this.data.toTopInter)
                    }
                }, 7)
            }, 1200)
            // 第三步top
            let top = -130;
            this.data.topSetTime = setTimeout(() => {
                this.data.toLeftInter = setInterval(() => {
                    if (top < 0) {
                        this.setData({ myClassStyleTop: `top:0px;right:${top}px` })
                        top += 1
                    } else {
                        clearInterval(this.data.toLeftInter)
                    }
                }, 7)
            }, 2200)
            // 第四步left
            let left = -44;
            this.data.leftSetTime = setTimeout(() => {
                this.data.toBottomInter = setInterval(() => {
                    if (left < 0) {
                        this.setData({ myClassStyleLeft: `top:${left}px;left:0px` })
                        left += 1
                    } else {
                        clearInterval(this.data.toBottomInter)
                    }
                }, 7)
            }, 3200)
            // 第五步兑奖成功
            let topbg = -44;
            this.data.prizeSetTime = setTimeout(() => {
                this.data.topbgInter = setInterval(() => {
                    if (topbg < 0) {
                        this.setData({ myClassStyleSuccess: `top:${topbg}px;left:0px` })
                        topbg += 1
                    } else {
                        clearInterval(this.data.topbgInter)
                    }
                }, 7)
            }, 4400)
        },
        touchEnd() {
            let count = 0
            const stopClearInter = setInterval(() => {
                if (count > 5) {
                    count += 1
                    clearInterval(stopClearInter)
                    console.log('清理动画')
                } else {
                    console.log('清理执行动画')
                    // 清理所有边框动画和背景动画
                    clearInterval(this.data.toRightInter)
                    clearInterval(this.data.toTopInter)
                    clearInterval(this.data.toLeftInter)
                    clearInterval(this.data.toBottomInter)
                    clearInterval(this.data.topbgInter)
                    clearTimeout(this.data.rightSetTime)
                    clearTimeout(this.data.topSetTime)
                    clearTimeout(this.data.leftSetTime)
                    clearTimeout(this.data.prizeSetTime)
                    // 复位边框及背景
                    this.setData({ myClassStyleBottom: `bottom:0px;left:-130px` })
                    this.setData({ myClassStyleRight: `bottom:-44px;right:0px` })
                    this.setData({ myClassStyleTop: `top:0px;right:-130px` })
                    this.setData({ myClassStyleLeft: `top:-44px;left:0px` })
                    this.setData({ myClassStyleSuccess: `top:-44px;left:0px` })
                    this.setData({ myClassStyle: "background:#fff;" })
                }
            }, 1000)
        }
        // claimprizeFn() {
        //     let animationBottom = wx.createAnimation({
        //         duration: 1000,
        //         timingFunction: 'ease',
        //         delay: 0,
        //     })
        //     let animationRight = wx.createAnimation({
        //         duration: 1000,
        //         timingFunction: 'ease',
        //         delay: 1200,
        //     })
        //     let animationTop = wx.createAnimation({
        //         duration: 1000,
        //         timingFunction: 'ease',
        //         delay: 2200,
        //     })
        //     let animationLeft = wx.createAnimation({
        //         duration: 1000,
        //         timingFunction: 'ease',
        //         delay: 3200,
        //     })
        //     let animationuccess = wx.createAnimation({
        //         duration: 1000,
        //         timingFunction: 'ease',
        //         delay: 4200,
        //     })
        //     this.setData({ myClassStyle: "background:rgb(114, 187, 247);" })
        //     // 第一步bottom
        //     animationBottom.top(43).translateX(130).step();
        //     // 第二步right
        //     animationRight.right(0).translateY(-43).step();
        //     // 第三步top
        //     animationTop.top(0).translateX(-129).step();
        //     // 第四步left
        //     animationLeft.top(0).translateX(-1).step();
        //     // 第五步兑奖成功
        //     animationuccess.top(0).step()
        //     // 将动画导出到页面
        //     // this.setData({
        //     //     animationDataBottom: animationBottom.export(),
        //     //     animationDataRight: animationRight.export(),
        //     //     animationDataTop: animationTop.export(),
        //     //     animationDataLeft: animationLeft.export(),
        //     //     animationDataSuccess: animationuccess.export()
        //     // })

        //     setTimeout(() => {
        //         console.log('清除动画')
        //         this.setData({
        //             animationDataBottom: animationBottom.export(),
        //             animationDataRight: animationRight.export(),
        //             animationDataTop: animationTop.export(),
        //             animationDataLeft: animationLeft.export(),
        //             animationDataSuccess: animationuccess.export()
        //         })
        //     }, 2000)
        // }
    }
})