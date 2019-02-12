import service from './service/http-service' // axios 异常处理
import ajax from './service/ajax' // axios 封装
import api from './service/api' // 接口地址

import native2ascii from './emotion/native2ascii'
import delEmoji from './emotion/delEmoji' // 删除表情
import emotionRep from './emotion/emotionRep' // 将匹配结果替换表情图片
import emoji from './emotion/emoji' // emoji 列表

const installComponents = {
  install: function (Vue) {
    Vue.prototype.$service = service
    Vue.prototype.$ajax = ajax
    Vue.prototype.$api = api
    Vue.prototype.$native2ascii = native2ascii
    Vue.prototype.$delEmoji = delEmoji
    Vue.prototype.$emotion = emotionRep
    Vue.prototype.$emoji = emoji
  }
}
export default installComponents