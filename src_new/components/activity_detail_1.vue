/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-06 16:36
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class="right" >
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
    name:'activity_laifang',
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
          route='guoji';
        let type='chinese';
        let isEnglish=/_en/.test(this.$route.path);
        if(isEnglish)
          type='english';
        let url='dest/data/'+type+'/activity/activity_right_top_'+route+'.txt'
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
