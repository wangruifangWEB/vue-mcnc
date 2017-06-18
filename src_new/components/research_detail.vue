<template>
  <div class="research-name">
    <h2>{{data.title}}</h2>
    <div class="content" :class='{qita:data.img.length>1}'>
      <p v-if='data.content'>{{data.content}}</p>
      <div class="img" >
        <img v-for='item in data.img':src="item" alt="其他方向">
      </div>
    </div>
    <div v-if='data.people_title' class="research-people">
      <h3>{{data.people_title}}</h3>
      <p>{{data.people}}</p>
    </div>
  </div>
</template>


<script>
  export default {
    name:'research_detail',
    data(){
      return{
        data:''
      }
    },
    methods:{
      getData(){
        let route=this.$route.params.name;
        if(this.$route.path.indexOf('research')>0){
          let type='chinese';
          let isEnglish=/_en/.test(this.$route.path);
          if(isEnglish)
            type='english';
          let url='dest/data/'+type+'/research/research_right_'+route+'.txt'
          this.Axios.get(url).then(data=>{
            console.log(data.data)
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
