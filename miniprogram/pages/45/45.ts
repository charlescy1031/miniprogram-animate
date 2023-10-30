// index.ts
// 获取应用实例

Page({
	data: {
		lists: [{ src: "/image/45/Media.png", text: "酒伴50ml" }, { src: "/image/45/Media.png", text: "威士忌杯" }, { src: "/image/45/Media.png", text: "杯垫" }, { src: "/image/45/Media.png", text: "试饮券" }],
		imageList: [
			"/image/45/IMG_26304.png",
			"/image/45/IMG_26305.png",
			"/image/45/IMG_26306.jpg",
			"/image/45/IMG_26307.jpg",
			"/image/45/IMG_26309.jpg",
			"/image/45/IMG_26310.jpg",
			"/image/45/IMG_26311.jpg",
			"/image/45/IMG_26312.jpg",
			"/image/45/IMG_26304.png",
			"/image/45/IMG_26305.png",
			"/image/45/IMG_26306.jpg",
			"/image/45/IMG_26307.jpg",
			"/image/45/IMG_26309.jpg",
			"/image/45/IMG_26310.jpg",
			"/image/45/IMG_26311.jpg",
			"/image/45/IMG_26312.jpg",
			"/image/45/IMG_26304.png",
			"/image/45/IMG_26305.png",
			"/image/45/IMG_26306.jpg",
			"/image/45/IMG_26307.jpg",
			"/image/45/IMG_26309.jpg",
			"/image/45/IMG_26310.jpg",
			"/image/45/IMG_26311.jpg",
			"/image/45/IMG_26312.jpg",
			"/image/45/IMG_26304.png",
			"/image/45/IMG_26305.png",
			"/image/45/IMG_26306.jpg",
			"/image/45/IMG_26307.jpg",
			"/image/45/IMG_26309.jpg",
			"/image/45/IMG_26310.jpg",
			"/image/45/IMG_26311.jpg",
			"/image/45/IMG_26312.jpg",
		],
		myClassStyleA: '',
		myClassStyleB: '',
		myClassStyleC: '',
		regulateNumberA: 0, // 偏差滚动高度
		regulateNumberB: 0,
		regulateNumberC: 0,
		realScrollA: 0, // 实际滚动高度
		realScrollB: 0,
		realScrollC: 0,
	},
	// 事件处理函数
	bindViewTap() {
		wx.navigateTo({
			url: '../logs/logs',
		})
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
                selected: 1
            })
        }
    },
	prizedraw(e: any) {
        // 抽奖函数
		// const query = wx.createSelectorQuery();
		// const element = query.select('.imglist')
		let countfast = 0,countslow=0
		let countslowInterval = setInterval(() => {
			countslow += -65
			this.setData({
				myClassStyleA: `margin-top:${countslow}px;`,
				myClassStyleC: `margin-top:${countslow}px;`,
			})
			if (countslow < -2880) {
				clearInterval(countslowInterval)
				this.setData({
					regulateNumberA: Math.floor(Math.random() * -90),
					regulateNumberC: Math.floor(Math.random() * -90)
				})
				this.setData({
					realScrollA: this.gettrueNumber() + this.data.regulateNumberA,
					realScrollC: this.gettrueNumber() + this.data.regulateNumberC,
					myClassStyleA: `margin-top:${this.data.realScrollA}px;`,
					myClassStyleC: `margin-top:${this.data.realScrollC}px;`,
				})
				this.contrustorInterval('A', this.data.realScrollA, this.data.regulateNumberA)
				this.contrustorInterval('C', this.data.realScrollC, this.data.regulateNumberC)
			}
        }, 40)
        let countfastInterval = setInterval(() => {
			countfast += -25
			this.setData({
				myClassStyleB: `margin-top:${countfast}px;`,
			})
			if (countslow < -2880) {
				clearInterval(countfastInterval)
				this.setData({
					regulateNumberB: Math.floor(Math.random() * -90),
				})
				this.setData({
					realScrollB: this.gettrueNumber() + this.data.regulateNumberB,
					myClassStyleB: `margin-top:${this.data.realScrollB}px;`,
				})
				this.contrustorInterval('B', this.data.realScrollB, this.data.regulateNumberB)
			}
		}, 20)
	},
	contrustorInterval(type: any, realScroll: number, regulateNumber: number) {
        // 抽奖卡偏移量回归函数
		let differencrValue = Math.abs(regulateNumber)
		let count = 0
		let backPositionFn = setInterval(() => {
			if (count < differencrValue) {
				if (type === 'A') {
					this.setData({
						myClassStyleA: `margin-top:${realScroll + count}px;`,
					})
				} else if (type === 'B') {
					this.setData({
						myClassStyleB: `margin-top:${realScroll + count}px;`,
					})
				} else {
					this.setData({
						myClassStyleC: `margin-top:${realScroll + count}px;`,
					})
				}
				count++
			} else {
				clearInterval(backPositionFn)
			}
		}, 10)
	},
	gettrueNumber(): number {
        // 随机数量函数
		let a = Math.floor(Math.random() * 10) * -90;
		return a < -630 ? this.gettrueNumber() : a
	},

})
