// index.ts
Page({
    data: {
        index: 0,
        array: ['46-1', '45', '35', '46-2', '46-3'],
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    },
    bindPickerChange: function (e: any) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    reloadPage() {
        wx.reLaunch({url:"/miniprogram/pages/homepage"})
    }

})



