/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-05 12:12
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="v-header">
    <header>
      <img src="../assets/imgs/logo.png" alt="logo">
      <div class="nav" >
        <ul>
          <li v-for='item in header'><router-link :to='item.link' ><i :class="['iconfont',item.icon]"></i>{{item.title}}</router-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
  export default{
    name:'v-header',
    props:['header','footer']
  }
</script>

<style lang='scss'>
  .v-header{
    img{
      width:100%;
      height:129px;
      display: block;
    }
    .nav{
      ul{
        display: flex;
        border:1px solid #999;
        border-top:none;
        li{
          flex:1;
          font-size:24px;
          text-align:center;
          a{
            display: inline-block;
            text-decoration: none;
            height:40px;
            line-height:40px;
            i{
              vertical-align:1px;
              margin-right:6px;
            }
            color:black;
            &:hover{
              color:purple;
              cursor: hand;
            }
            &.router-link-active{
              color:purple;
            }
          }
        }
      }
    }

  }
</style>
