<template>
  <div id="mcnc">
    <!-- <canvas id="canvas"></canvas> -->
    <v-header :header='header' class='top'></v-header>
    <router-view class='main'></router-view>
    <v-footer :footer='footer' class='bottom'></v-footer>
  </div>
</template>

<script>
  import vHeader from './components/vHeader.vue';
  import vFooter from './components/vFooter.vue';
  export default {
    name: 'mcnc',
    components:{
      vHeader,
      vFooter,
    },
    data(){
      return{
        header:[],
        footer:[]
      }
    },
    beforeMount(){
      this.getData();
    },
    methods:{
      getData(){
        let path='';
        let isEnglish=/_en/.test(this.$route.path);
        if(isEnglish)
          path='dest/data/english/header-footer.txt';
        else
          path='dest/data/chinese/header-footer.txt';
        this.Axios.get(path).then(data=>{
          this.header=data.data.header;
          this.footer=data.data.footer;
        })
      }
    },
    watch:{
      $route(){
        this.getData();
      }
    }
  }
</script>

<style lang='scss'>
  #mcnc{
    width:1200px;
    height:100%;
    margin:0 auto;
    .top{
      position: absolute;
    }
    .top{
      height:170px;
      width:1200px;
      top:0;
    }
    .bottom{
      height:90px;
      width:1198px;
      bottom:0;
    }
    .main{
      margin-top:180px;
      min-height:600px;
      margin-bottom:10px;
      width:1158px;
      padding:0 20px;
      border:1px solid #ccc;
    }
  }
</style>
