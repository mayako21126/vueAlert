<template>
  <div>
    <div class="axc-console axc-success" id="axc-success">
      <i class="axc-base"></i>
      <span></span>
    </div>
    <div class="axc-console axc-error" id="axc-error" style="display: none;">
      <i class="axc-base"></i>
      <span></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  export default {

  }
</script>

<style>
  .axc-console {
    width: 100%;
    font-size: 16px;
    line-height: 2;
    background: rgba(217, 83, 79, .95);
    padding: 7px 11px;
    position: fixed;
    text-align: center;
    color: #fff;
    top: 0;
    display: none;
    z-index: 1001;
    -webkit-animation: fadeInDown 500ms 0ms ease both;
  }

  .axc-success {
    background: #3d9c52 !important;
  }

  .axc-success .axc-base {
    background-position: 0 -60px;
  }

  .axc-base {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 6px;
    vertical-align: middle;
    background: url("../assets/i/case.png");
    background-size: 40px;
    margin-bottom: 1px;
    background-position: 40px 40px
  }
</style>
