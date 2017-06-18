/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-09 18:36
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="right">
    <h2>{{list.head}}</h2>
    <div>
      <div class="right-content">
        <div v-for='(item,key) in list.items'>
          <p>{{key+1}}、{{item.content}}</p>
          <img v-for='img in item.imgs' :src='img'>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang='scss'>
  .right-content{
    text-align: center;
    p{
      margin:20px 0;
      line-height: 20px;
      text-align: left;
      text-indent: 2em;
    }
    img{
      width:440px;
      height:300px;
      margin:10px;
      /*border-radius:20px;*/
    }
  }
</style>

<script>
  export default {
    name:'activity_xueshu',
    data(){
      return{
        list:''
      }
    },
    methods:{
      getData(){
        let id=this.$route.path.lastIndexOf('/');
        let route=this.$route.path.substring(id+1);
        let type='chinese';
        let isEnglish=/_en/.test(this.$route.path);
        if(isEnglish)
          type='english';
        let url='dest/data/'+type+'/activity/activity_right_'+route+'.txt'
        this.Axios.get(url).then(data=>{
          this.list=data.data;
          console.log(data.data);
        }).catch(error=>alert('数据加载异常'))
      }
    },
    beforeMount(){
      this.getData();
    },
    watch:{
      $route(){
        this.getData();
      }
    }
  }
</script>
