//app.jsaaaa
import api from './public/api/index.js'
import store from './store/index.js'
import wxApi from './utils/wxApi/index.js'

App({
  onLaunch() {



    wx.getSystemInfo({
      success(res) {
        console.log('获取系统信息：', res)
        store.updateSystemInfo(res)

        console.log('全局状态store：', store)
      },
    })
  },
  globalData: {
    api,
    store,
    wxApi
  }
})
