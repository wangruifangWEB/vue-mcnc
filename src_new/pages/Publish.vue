/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-05 19:15
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="publish common">
    <!-- 左侧导航条 -->
    <div class="left">
      <div class="professor">
        <h2>{{list.head}}</h2>
        <span v-for='item in list.items'><router-link :to='item.link'>{{item.name}}</router-link></span>
      </div>
    </div>
    <!-- 右侧显示区 -->
    <div class="right" >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name:'publish',
    data(){
      return{
        list:''
      }
    },
    beforeMount(){
      let path='';
      let isEnglish=/_en/.test(this.$route.path);
      if(isEnglish)
        path='dest/data/english/publish/publish_left.txt';
      else
        path='dest/data/chinese/publish/publish_left.txt';
      this.Axios.get(path).then(data=>{
        this.list=data.data;
      }).catch(error=>alert('数据加载异常'))
    }
  }
</script>

<style lang='scss'>
  .post{
    ul{
      width:900px;
      margin:0 auto;

      li{
        margin:10px;
        line-height:20px;
        &.sort{
          list-style: square !important;
        }
        a{
          color:black;
        }
      }
    }
  }
</style>
