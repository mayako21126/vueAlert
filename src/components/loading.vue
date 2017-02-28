<template>
  <div style="height: 100vh;width: 100%;text-align: center;vertical-align: middle; top: 0px;   background-color: rgba(55, 55, 55, 0.498039);
    position: fixed;
    z-index: 99999;" v-if="loading">
    <img src="../assets/i/loading.gif" id="center" alt="" style="width:84px; height:84px;position:absolute;top:50%;left:50%; margin:-42px 0 0 -42px;">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
       loading:false
      }
    },
    watch: {
      loading: function (val) {
        console.log(val)
        if (val==true) {
          console.log('3')
          this.$emit('on-show')
        }else{
          console.log('4')
          this.$emit('on-hide')
        }
      }
    }}
</script>


