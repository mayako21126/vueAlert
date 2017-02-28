import VueLoading from './plugins/build.js'
import Main from './main.vue'
import Vue from 'vue'

//引入组件并使用2个模块
Vue.use(VueLoading)


var vm = new Vue({
  el: '#app',
  render: h => h(Main)
})

