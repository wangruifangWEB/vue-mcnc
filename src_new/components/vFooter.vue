/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-05 12:12
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class='v-footer'>
    <p>{{footer[0]}}</p>
    <p>{{footer[1]}}</p>
    <p>{{footer[2]}}</p>
    <a href='https://122.205.5.5:5001/webman/index.cgi' target="blank">维护入口</a>
  </div>
</template>

<script>
  export default{
    name:'v-footer',
    props:['footer']
  }
</script>

<style lang='scss'>
  .v-footer{
    border:1px solid #bcbdbf;
    font-size:16px;
    color:#999;
    text-align: center;
    p {
      line-height:30px;
    }
    a{
      position: fixed;
      right:0;
      bottom:0;
    }
  }
</style>
