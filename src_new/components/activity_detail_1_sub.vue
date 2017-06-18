/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-09 19:36
 * @Github https://github.com/fengyinchao
 */
<template>
  <div>
    <p>{{list.content}}</p>
    <div class="img" >
      <img v-for='img in list.imgs':src="img">
    </div>
  </div>
</template>

<script>
  export default {
    name:'activity_laifang_detail',
    data(){
      return{
        list:''
      }
    },
    methods:{
      getData(){
        let id=this.$route.path.indexOf('laifang');
        let route
        if(id>0)
          route='laifang';
        else
          route='guoji'
        let type='chinese';
        let isEnglish=/_en/.test(this.$route.path);
        if(isEnglish)
          type='english';
        let url='dest/data/'+type+'/activity/activity_right_'+route+'.txt'
        this.Axios.get(url).then(data=>{
          let select=this.$route.params.name;
          console.log('select='+select);
          this.list=data.data[select];
          console.log('this.list='+this.list);
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
