// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vue from "../node_modules/vue/dist/vue.js";
import App from './App'
// import App from './App.vue';
// 顾名思义，这句代码的意思就是引入我们写好的.vue文件。（.vue文件是vue框架的单文件组件。）
import router from './router/index'
// import router from './js/layer.js'
// import router from './route.js';
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

//添加Fastclick移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)