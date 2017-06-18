<template>
  <div class='member_lab' >
    <div class="description" v-for='member in data.members'>
      <img :src='member.img' alt="图像">
      <div >
        <h2>{{member.name}}</h2>
        <p>{{member.description}}</p>
        <p>Email：{{member.email}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        name:'zdls_detail',
        props: {
            // some:String,
        },
        data(){
            return{
              data:{
                // name:'',
                // description:'',
                // img:'',
                // project:[],
                // honor:[]
              }
            }
        },
        methods:{
          getData(){
            let id_zdls=this.$route.path.indexOf('zdls');
            let id_sys=this.$route.path.indexOf('sys');
            let route
            if(id_zdls<0&&id_sys<0)
              route='bys';
            else if(id_zdls>0)
              route='zdls'
            else
              route='sys'
            let type='chinese';
            let isEnglish=/_en/.test(this.$route.path);
            if(isEnglish)
              type='english';
            let url='dest/data/'+type+'/member/member_right_'+route+'.txt'
            this.Axios.get(url).then(data=>{
              let index=this.$route.path.lastIndexOf('/');
              let select=this.$route.path.substring(index+1);
              console.log(select,data.data[select])
              this.data=data.data[select];
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

<style lang='scss'>
  .member_lab{
    h2{
      text-align: left !important;
    }
    .description{
        display: flex;
        border-top:1px solid #ccc;
        padding:30px 0 0 10px;
        margin:40px 0 10px 10px;
        h2{
          margin-top:8px;
        }
        img{
          border-radius:10px 12px;
          width:100px;
          height:120px;
          margin:0 20px 10px 10px;
        }
    }
  }
</style>
