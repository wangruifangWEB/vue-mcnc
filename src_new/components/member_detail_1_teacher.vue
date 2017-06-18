<template>
  <div class="member_teacher" >
    <div class="description">
      <img :src='data.img' alt="成员" width="100" height="130" >
      <div class="detail">
        <h2>{{data.name}}</h2>
        <p>{{data.description}}</p>
      </div>
    </div>
    <div class="honor" >
      <h2 v-if='!isEnglish()'>荣誉(部分)</h2>
      <h2 v-else>Honor</h2>
      <span v-for="item in data.honor">{{item}}</span>
    </div>
    <div class="project">
      <h2 v-if='!isEnglish()'>项目</h2>
      <h2 v-else>Project</h2>
      <table>
        <thead>
          <tr v-if='!isEnglish()'>
            <th>时间</th>
            <th>名称</th>
            <th>类型</th>
          </tr>
          <tr v-else>
            <th>Time</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody v-for='item in data.project'>
          <tr>
            <td>{{item.time}}</td>
            <td>{{item.name}}</td>
            <td>{{item.type}}</td>
          </tr>
        </tbody>
      </table>
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
              let select=this.$route.params.teacher;
              console.log('select='+select)
              this.data=data.data[select];
            }).catch(error=>alert('数据加载异常'))
          },
          isEnglish(){
            return /member_e/.test(this.$route.path);
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

<style lang='scss' scoped>
  .member_teacher{
    h2{
      text-align: left !important;
    }
    .description{
        display: flex;
        border-top:1px solid #ccc;
        padding:50px 0 0 10px;
        margin:40px 0 10px 10px;
        justify-content: flex-start;
        h2{
          margin-top:8px;
        }
        img{
          border-radius:10px 12px;
          flex-shrink: 0;
          width:100px;
          height:120px;
          margin:0 20px 10px 10px;
        }
        .detail{
          width:790px;
        }
    }
    .honor,.project{
      margin-left:150px;
    }
    .honor{
      span{
        display: block;
        line-height:24px;
      }
    }
  }
</style>
