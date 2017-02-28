/**
 * Created by mayako on 2017/2/28.
 */
import loading from '../components/loading.vue'
import vue from 'vue'

let $vm
let watcher

export default {
    install: function (vue, options) {
    const VueLoading = vue.extend(loading)

    if (!$vm) {
      $vm = new VueLoading({
        el: document.createElement('div')
      })
    }
    document.body.appendChild($vm.$el)

    const vueLoading = {
      show (options) {
        if(options){
          // destroy watcher
          watcher && watcher()

          if (options.onShow) {
            watcher = $vm.$watch('loading', (val) => {
             if(val){
               options.onShow()
             }
            })
          }
        }
        $vm.loading = true
      },
      hide (options) {

        if(options){
          // destroy watcher

          watcher && watcher()
          if (options.onHide) {
            watcher = $vm.$watch('loading', (val) => {
              if(val==false){
                options.onHide()
              }
            })
          }
        }
        $vm.loading = false
      }
    }


    vue.mixin({
    created: function () {
      this.vueLoading = vueLoading
    }
  })
  }
}
