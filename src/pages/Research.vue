/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-05 19:10
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="research common">
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
    name:'research',
    data(){
      return{
        list:''
      }
    },
    beforeMount(){
      let path='';
      let isEnglish=/_en/.test(this.$route.path);
      if(isEnglish)
        path='dest/data/english/research/research_left.txt';
      else
        path='dest/data/chinese/research/research_left.txt';
      this.Axios.get(path).then(data=>{
        this.list=data.data;
      }).catch(error=>alert('数据加载异常'))
    }
  }
</script>

<style lang='scss'>
  .right{
    .research-name{
      margin-left: 40px;
      h2{
        text-align: left !important;
      }
      .content{
        display: flex;
        p{
          width:500px;
          text-indent:2em;
          line-height:24px;
          text-align:justify;
          display: inline-block;
        }
        .img{
          width:220px;
          height:150px;
          margin-left:20px;
          vertical-align: top;
          img{
            width:100%;
            height:100%;
          }
        }
        &.qita{
          display: block;
          .img{
            width:800px ;
            height:100%;
            img{
              width:45%;
              height:600px;
              margin:5px;
            }
          }
        }
      }
    }
    .research-people{
      p{
        width:500px;
        line-height:24px;
        margin:20px 0;
      }
    }
  }
</style>
