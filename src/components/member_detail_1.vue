/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-06 16:36
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="teacher" >
    <!-- 研究方向详情页 -->
    <div class="activity-index">
      <h2>{{list.head}}</h2>
      <ul>
      <li v-for='item in list.items'><router-link :to='item.link'>{{item.name}}</router-link></li>
      </ul>
    </div>
    <div class="activity-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name:'member_teacher',
    data(){
      return{
        list:''
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
        let url='dest/data/'+type+'/member/member_right_top_'+route+'.txt'
        this.Axios.get(url).then(data=>{
          this.list=data.data;
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
