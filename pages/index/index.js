//index.js
//获取globalData实例
const { store, wxApi } = getApp().globalData

Page({
  data: {

  },
  onLoad() {

  },
  onReady() {
    // wxApi.showModal({
    //   title: 'Hello',
    //   content: 'World!',
    // })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})
