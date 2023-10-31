Component({
    data: {
        selected: 2,
        color: "#a5b5b5",
        selectedColor: "#22cd5e",
        list: [{
            pagePath: "/pages/46-1/46-1",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "46-1"
        }, {
            pagePath: "/pages/45/45",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "45"
        }, {
            pagePath: "/pages/35/35",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "35"
        }, {
            pagePath: "/pages/46-2/46-2",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "46-2"
        }, {
            pagePath: "/pages/46-3/46-3",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "46-3"
        }]
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