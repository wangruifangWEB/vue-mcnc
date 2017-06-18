/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-05 18:56
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="member common">
    <!-- 左侧导航条 -->
    <div class="left">
      <div>
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
    name:'member',
    data(){
      return{
        list:''
      }
    },
    beforeMount(){
      let path='';
      let isEnglish=/_en/.test(this.$route.path);
      if(isEnglish)
        path='dest/data/english/member/member_left.txt';
      else
        path='dest/data/chinese/member/member_left.txt';
      this.Axios.get(path).then(data=>{
        this.list=data.data;
      }).catch(error=>alert('成员页数据加载异常'))
    }
  }
</script>

<style lang='scss'>
  .member{
    .right{
      p{
        text-indent: 2em;
        line-height: 24px;
        text-align: justify;
      }

    }
  }
</style>
