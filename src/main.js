// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import './style/base/element-variables.scss'
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

import App from './App'
import router from './router'
import axios from 'axios'
import vueQuillEditor from 'vue-quill-editor' // 引入富文本工具
// 你可以在man.js里全局引入
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueQuillEditor)
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
