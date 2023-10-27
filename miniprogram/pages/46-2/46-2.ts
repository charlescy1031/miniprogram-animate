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
