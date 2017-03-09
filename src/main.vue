<template>
  <div id="">
  <button @click="show()">asd</button>
    <button @click="error()">error</button>
  </div>
</template>
<script type="text/babel">
  export default {
    data () {
      return {
        num1: 10
      }
    },methods:{
      show:function(){
        this.vueAlert.show('xxx','success')

      },error:function(){
        this.vueAlert.show('xxx','error')
      }
    }
  }
</script>


