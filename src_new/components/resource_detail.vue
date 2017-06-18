/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-06 16:15
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="post">
    <h2>{{data.title}}</h2>
    <ul >
      <li v-for='item in data.content' class='sort'>
        <a :href="item.link" title="">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'resource_detail',
    data(){
      return{
        data:''
      }
    },
    methods:{
      getData(){
        let id=this.$route.path.lastIndexOf('/');
        let route=this.$route.path.substring(id+1);
        if(this.$route.path.indexOf('resource')>0){
          let type='chinese';
          let isEnglish=/_en/.test(this.$route.path);
          if(isEnglish)
            type='english';
          let url='dest/data/'+type+'/resource/resource_right_'+route+'.txt'
          this.Axios.get(url).then(data=>{
            console.log(data.data.title)
            this.data=data.data;
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
