// index.ts
// 获取应用实例

Page({
	data: {
		lists: [{ src: "/image/45/Media.png", text: "酒伴50ml" }, { src: "/image/45/Media.png", text: "威士忌杯" }, { src: "/image/45/Media.png", text: "杯垫" }, { src: "/image/45/Media.png", text: "试饮券" }],
		imageList: [
			"https://gd-hbimg.huaban.com/1484e1af72838c64e34329eb8896daa36efcb14414a8f5-noKHB7_fw480webp",
			"https://gd-hbimg.huaban.com/ffc57689f394976f171e9a8a00acd6411496f4952c837c-MRwmJg_fw480webp",
			"https://gd-hbimg.huaban.com/ed2daada74197bdebb8de43b4c74cb741fbe0d63c02bd-WZpvUw_fw480webp",
			"https://gd-hbimg.huaban.com/cf24641c80d9a430635d94f36ada301df1305ec998cd-ZOtbDy_fw480webp",
			"https://gd-hbimg.huaban.com/9ba2b6d19110ad82dd46cbec4400730c711aa44e107be2-MHraqj_fw480webp",
			"https://gd-hbimg.huaban.com/afddaef185549305c5e7b3580e87d75eb204ccf724660f-OxBOz3_fw480webp",
			"https://gd-hbimg.huaban.com/d9fa8e545a093b57c9fc32cbd288bdf21259475238930-3xPJWh_fw480webp",
			"https://gd-hbimg.huaban.com/08243d177d53b7c9af8f7d6f163874afc559b9b95c007-33kR4b_fw480webp",
			"https://gd-hbimg.huaban.com/eee39c7ebdf39eca0b966479f0828fd7d46a9c6810ce0a-NDcPeD_fw480webp",
			"https://gd-hbimg.huaban.com/b281c23986ddcbf24eb82423d076751564d209b81a8b5-WA3UMT_fw480webp",
			"https://gd-hbimg.huaban.com/da759f154028fb2a0491fe27594dae6bfcb1f5fec8991-Gp8jNz_fw480webp",
			"https://gd-hbimg.huaban.com/1484e1af72838c64e34329eb8896daa36efcb14414a8f5-noKHB7_fw480webp",
			"https://gd-hbimg.huaban.com/ffc57689f394976f171e9a8a00acd6411496f4952c837c-MRwmJg_fw480webp",
			"https://gd-hbimg.huaban.com/ed2daada74197bdebb8de43b4c74cb741fbe0d63c02bd-WZpvUw_fw480webp",
			"https://gd-hbimg.huaban.com/cf24641c80d9a430635d94f36ada301df1305ec998cd-ZOtbDy_fw480webp",
			"https://gd-hbimg.huaban.com/9ba2b6d19110ad82dd46cbec4400730c711aa44e107be2-MHraqj_fw480webp",
			"https://gd-hbimg.huaban.com/afddaef185549305c5e7b3580e87d75eb204ccf724660f-OxBOz3_fw480webp",
			"https://gd-hbimg.huaban.com/d9fa8e545a093b57c9fc32cbd288bdf21259475238930-3xPJWh_fw480webp",
			"https://gd-hbimg.huaban.com/08243d177d53b7c9af8f7d6f163874afc559b9b95c007-33kR4b_fw480webp",
			"https://gd-hbimg.huaban.com/eee39c7ebdf39eca0b966479f0828fd7d46a9c6810ce0a-NDcPeD_fw480webp",
			"https://gd-hbimg.huaban.com/b281c23986ddcbf24eb82423d076751564d209b81a8b5-WA3UMT_fw480webp",
			"https://gd-hbimg.huaban.com/da759f154028fb2a0491fe27594dae6bfcb1f5fec8991-Gp8jNz_fw480webp",
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
		showNav: true
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
	prizedraw() {
		// 抽奖函数
		// const query = wx.createSelectorQuery();
		// const element = query.select('.imglist')
		let countfast = 0, countslow = 0
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
