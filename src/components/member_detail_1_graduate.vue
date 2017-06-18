<template>
  <div class="member_graduate">
    <h2>{{data.time}}</h2>
    <table>
      <thead>
        <tr v-if='!isEnglish()'>
          <th>姓名</th>
          <th>去向</th>
          <th>城市</th>
          <th>邮箱</th>
        </tr>
        <tr v-else>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody v-for='item in data.members'>
        <tr>
          <td>{{item.name}}</td>
          <td>{{item.destination}}</td>
          <td>{{item.city}}</td>
          <td>{{item.email}}</td>
        </tr>
      </tbody>
    </table>
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
              let select=this.$route.params.id;
              console.log(select,data.data[select])
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

<style lang='scss'>
  .member_graduate{
      border-top:1px solid #ccc;
      padding:30px 0 0 10px;
      margin:40px 0 10px 10px;
      text-align: center;
  }
</style>
