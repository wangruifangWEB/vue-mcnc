/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-06 16:15
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="post">
    <!-- <h2>{{data.time}}</h2> -->
    <ul>
      <li v-for='item in data.content'>{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'publish_detail',
    data(){
      return{
        data:''
      }
    },
    methods:{
      getData(){
        let id=this.$route.path.indexOf('qikan');
        let param;
        if(id<0)
          param='zhuanli';
        else
          param='qikan';
        let year=this.$route.params.year;
        if(this.$route.path.indexOf('publish')>0){
          let type='chinese';
          let isEnglish=/_en/.test(this.$route.path);
          if(isEnglish)
            type='english';
          let url='dest/data/'+type+'/publish/publish_right_'+param+'.txt'
          this.Axios.get(url).then(data=>{
            console.log(data.data.title)
            this.data=data.data[year];
          }).catch(error=>alert('数据加载异常'))
        }
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
