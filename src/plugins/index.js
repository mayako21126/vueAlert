/**
 * Created by mayako on 2017/2/28.
 */
import alert from '../components/alert.vue'
import $ from 'jquery'
let $vm
let watcher

export default {
    install: function (vue, options) {
    const VueAlert = vue.extend(alert)

    if (!$vm) {
      $vm = new VueAlert({
        el: document.createElement('div')
      })
    }
    document.body.appendChild($vm.$el)

    const vueAlert = {
      show (msg,type,timer) {
        if(msg){
          if(timer==undefined){
            timer=2000;
          }
          // destroy watcher
          switch (type) {
            case "success":
              $(".axc-success span").text(msg);
              $("#axc-success").show().delay(timer).fadeOut();
              break;
            case "error":
              $(".axc-error span").text(msg);
              $("#axc-error").show().delay(timer).fadeOut();
              break;
          }
        }
      }
    }
    vue.mixin({
    created: function () {
      this.vueAlert = vueAlert
    }
  })
  }
}
