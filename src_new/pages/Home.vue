/**
 * @Authors FYC (fengyinchao.hust@gmail.com)
 * @Date    2017-05-05 12:12
 * @Github https://github.com/fengyinchao
 */
<template>
  <div class='home'>
      <div class="home_left">
        <div class="member">
          <h2>{{left_top_title}}</h2>
          <img :src="left_top_img" alt="">
        </div>
        <div class="introduce">
          <h2>{{left_bottom_title}}</h2>
          <span>
            &emsp;&emsp;{{left_bottom_description}}
          </span>
        </div>
      </div>
      <div class="home_right">
        <div class="search">
          <h2>{{right_title}}</h2>
          <!-- <input type="search"  placeholder="搜索动态"> -->
        </div>
        <ul>
          <li class='li' v-for='item in right_news'>
            <img :src='item.img'>
            <div class="list">
              <span class='list-title'><i class="iconfont">&#xe658;</i>{{item.type}}</span>
              <span class='list-text'>&emsp;&emsp;{{item.title}}</span>
              <div class="list-footer">
                <span class='time'>{{item.time}}</span>
                <span class='detail'>
                  <router-link :to='item.detail' v-if='item.detail'>更多详情
                  </router-link>
                  <a v-else @click='showDetail'>更多详情</a>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default{
    name:'Home',
    props: {
      // some:String,
    },
    data(){
      return{
        left_top_title:'',
        left_top_img:'',
        left_bottom_title:'',
        left_bottom_description:'',
        right_title:'',
        right_news:[],
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
          path='dest/data/english/home.txt';
        else
          path='dest/data/chinese/home.txt';
        this.Axios.get(path).then(data=>{
          console.log(data);
          var data=data.data;
          this.left_top_title=data.left_top_title;
          this.left_top_img=data.left_top_img;
          this.left_bottom_title=data.left_bottom_title;
          this.left_bottom_description=data.left_bottom_description;
          this.right_title=data.right_title;
          this.right_news=data.right_news.slice(0,4);
        })
      },
      showDetail(){
        let _this=this;
        let options={
          "position":"fixed",
          "top":200,
          "left":480,
          "width":"400px",
          "background-color":"white",
          "padding":"30px",
          "line-height":'24px',
          "border-radius":"10px",
          "text-align":"justify",
          "text-indent":"2em"
        }
        this.right_news.forEach(function(item){
          if(item.type=='论文发表'){
            _this.$alerTips(item.title,options);
            return;
          }
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

<style lang='scss' scoped>
  .home{
    display: flex;
    padding-top:20px !important;
    h2{
      margin-top: 0 !important;
      text-align: left !important;
    }
    .home_left{
      width:550px;
      .member{
        height:350px;
        img{
          width:500px;
          height:300px;
        }
      }
      .introduce{
        margin-top: 20px;
        span{
          display: inline-block;
          width:500px;
          font-size:16px;
          line-height:24px;
          text-align:justify;
          display:block;
        }
      }
    }
    .home_right{
      flex:1;
      ul{
        .li{
          display: flex;
          border-radius: 10px;
          box-shadow: 2px 2px #ccc;
          /*background-color:lightgray;*/
          img{
            width:120px;
            height:90px;
          }
          padding:10px;
          list-style:none;
          text-align:justify;
          border:1px solid black;
          /*border-radius: 10px;*/
          margin-bottom:10px;
          .list{
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            width:100%;
            justify-content: space-between;
            margin-bottom: 4px;
            .list-title{
              font-size: 20px;
              font-weight: 600;
              color:balck;
            }
            .list-text,.list-footer{
              color:gray;
              font-size:16px;
            }
            .list-text{
              text-overflow: ellipsis;
              white-space:nowrap;
              overflow: hidden;
              width:400px;
            }
            .list-footer{
              padding-bottom: -2px;
              .time{
                  margin-right:30px;
              }
              .detail{
                a{
                  color:gray;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
