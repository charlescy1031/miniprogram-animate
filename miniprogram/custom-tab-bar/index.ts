Component({
    data: {
        selected: 4,
        color: "#a5b5b5",
        selectedColor: "#22cd5e",
        list: [{
            pagePath: "/pages/homepage/homepage",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "首页"
        }, {
            pagePath: "/pages/store/store",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "商城"
        }, {
            pagePath: "/pages/events/events",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "活动"
        }, {
            pagePath: "/pages/cart/cart",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "购物车"
        }, {
            pagePath: "/pages/profile/profile",
            iconPath: "/image/tabBar/24.svg",
            selectedIconPath: "/image/tabBar/24selected.svg",
            text: "我的"
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