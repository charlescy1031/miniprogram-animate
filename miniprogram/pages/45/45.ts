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
	prizedraw(e: any) {
		// const query = wx.createSelectorQuery();
		// const element = query.select('.imglist')
		let count = 0
		let a = setInterval(() => {
			count += -65
			this.setData({
				myClassStyleA: `margin-top:${count}px;`,
				myClassStyleB: `margin-top:${count}px;`,
				myClassStyleC: `margin-top:${count}px;`,
			})
			if (count < -2880) {
				clearInterval(a)
				this.setData({
					regulateNumberA: Math.floor(Math.random() * -90),
					regulateNumberB: Math.floor(Math.random() * -90),
					regulateNumberC: Math.floor(Math.random() * -90)
				})
				this.setData({
					realScrollA: this.gettrueNumber() + this.data.regulateNumberA,
					realScrollB: this.gettrueNumber() + this.data.regulateNumberB,
					realScrollC: this.gettrueNumber() + this.data.regulateNumberC,
					myClassStyleA: `margin-top:${this.data.realScrollA}px;`,
					myClassStyleB: `margin-top:${this.data.realScrollA}px;`,
					myClassStyleC: `margin-top:${this.data.realScrollC}px;`,
				})
				this.contrustorInterval('A', this.data.realScrollA, this.data.regulateNumberA)
				this.contrustorInterval('B', this.data.realScrollB, this.data.regulateNumberB)
				this.contrustorInterval('C', this.data.realScrollC, this.data.regulateNumberC)
			}
		}, 40)


	},
	contrustorInterval(type: any, realScroll: number, regulateNumber: number) {
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
		let a = Math.floor(Math.random() * 10) * -90;
		return a < -630 ? this.gettrueNumber() : a
	},

})
