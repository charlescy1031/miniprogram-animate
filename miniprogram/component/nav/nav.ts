Component({
    // 获取右侧胶囊的盒子数据
    /**
     * 组件的初始数据
     */

    data: {
        meum: wx.getMenuButtonBoundingClientRect(),
    },
    properties: {
        navTitle: {
            type: String,
            value: 'xiaosi'
        },
        showNav: {
            type: Boolean,
            value: true
        },
    },
    attached() {
    },
    methods: {
        switchTab(e: any) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({ url })
            this.setData({
                selected: data.index
            })
        }
    }
})