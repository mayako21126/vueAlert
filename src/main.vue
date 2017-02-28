<template>
  <div id="">
  <button @click="show()">asd</button>
    <button @click="hide()">hide</button>
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
        console.log(this)
        this.vueLoading.show({
          onShow:function(){
            console.log('onshow')
          }
        });

      },
      hide:function(){
        console.log(this)
        this.vueLoading.hide({
          onHide:function(){
            console.log('onhide')
          }
        });

      }
    }
  }

</script>

<style>
  @import './assets/css/app.css';
  :root {
    --mainColor: red;
    --danger-theme: {
      color: white;
      border:1px solid sienna;
    };
  }
a{
  color: var(--mainColor);
}
  #app {
    background-color: var(--mainColor);
    @apply --danger-theme;
  }

  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
