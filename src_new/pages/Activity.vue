/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-05 19:14
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="activity common">
    <!-- 左侧导航条 -->
    <div class="left">
      <div>
        <h2>{{list.head}}</h2>
        <span v-for='item in list.items'><router-link :to='item.link'>{{item.name}}</router-link></span>
      </div>
    </div>
    <!-- 右侧显示区 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'activity',
    data(){
      return{
        list:''
      }
    },
    beforeMount(){
      let path='';
      let isEnglish=/_en/.test(this.$route.path);
      if(isEnglish)
        path='dest/data/english/activity/activity_left.txt';
      else
        path='dest/data/chinese/activity/activity_left.txt';
      this.Axios.get(path).then(data=>{
        this.list=data.data;
      }).catch(error=>alert('数据加载异常'))
    }
  }
</script>

<style lang='scss'>
  .activity-index{
    ul{
      text-align: center;
      li{
        display:inline-block;
        padding:6px;
        margin:4px;
        border:1px solid black;
        border-radius: 10px;
        a{
          text-decoration:none;
          color:black;
          /*font-weight: bold;*/
          &:hover{
            cursor:pointer;
            color:purple;
          }
          &.router-link-active{
            color:purple;
            font-weight: bold;
          };
        }
      }
    }
  }
  .activity-content{
    width:940px;
    margin:0 auto 30px;
    p{
      line-height:24px;
      text-indent:2em;
      margin: 10px;
    }
    .img{
      width:100%;
      text-align:center;
      img{
        margin:10px;
        width:440px;
        height:300px;
        /*border-radius:10px;*/
      }
    }
  }
</style>
