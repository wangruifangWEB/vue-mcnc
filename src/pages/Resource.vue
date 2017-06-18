/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-05 19:15
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="resource common">
      <!-- 左侧导航条 -->
      <div class="left">
        <div class="professor">
          <h2>{{list.head}}</h2>
          <span v-for='item in list.items'><router-link :to='item.link'>{{item.name}}</router-link></span>
        </div>
      </div>
      <!-- 右侧显示区 -->
      <div class="right" v-show='show'>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
  export default {
    name:'resource',
    data(){
      return{
        list:'',
        show:false
      }
    },
    beforeMount(){
      let path='';
      let isEnglish=/_en/.test(this.$route.path);
      if(isEnglish)
        path='dest/data/english/resource/resource_left.txt';
      else
        path='dest/data/chinese/resource/resource_left.txt';
      this.Axios.get(path).then(data=>{
        this.list=data.data;
      }).catch(error=>alert('数据加载异常'))
    },
    beforeRouteEnter(to,from,next){
      var yanzhengma = window.prompt("访问该页面需要提供密码", "请输入密码...")
      // console.log('yanzhengma='+yangzhengma)
      if(yanzhengma == 'B309' ){
        next(vm=>{
          vm.show=true;
        })
      }
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
      }
    }
  }
</style>
