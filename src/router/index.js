import Vue from 'vue'
import Router from 'vue-router'
import {
  Home,
  Member,
  Research,
  Activity,
  Publish,
  Resource
} from '../pages'
import {
  MemberRightTop,
  MemberRightGraduate,
  MemberRightLab,
  MemberRightTeacher,
  ResearchDetail,
  LaiFangOrGuoJi,
  LaiFangOrGuoJiDetail,
  XueShuCommon,
  PublishDetail,
  PublishDetail_1,
  ResourceDetail
} from '../components'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home_en',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member,
      redirect:'/member/zdls',
      children:[
        {
          path: '/member/zdls',
          component:MemberRightTop,
          redirect:'/member/zdls/yuli',
          children:[
            {
              path:'/member/zdls/:teacher',
              component:MemberRightTeacher,
            }
          ]
        },
        {
          path:'/member/sys',
          component:MemberRightTop,
          redirect:'/member/sys/wireless',
          children:[
            {
              path:'/member/sys/wireless',
              component:MemberRightLab
            },
            {
              path:'/member/sys/media',
              component:MemberRightLab
            },
          ]
        },

        {
          path:'/member/bys',
          component:MemberRightTop,
          redirect:'/member/bys/2014',
          children:[
            {
              path:'/member/bys/:id',
              component:MemberRightGraduate,
            }
          ]
        }
      ]
    },
    {
      path: '/research',
      name: 'Research',
      redirect:'/research/dsdsp',
      component: Research,
      children:[
        {
          path:'/research/:name',
          component:ResearchDetail
        }
      ]
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity,
      redirect:'/activity/laifang',
      children:[
        {
          path:'/activity/laifang',
          component:LaiFangOrGuoJi,
          redirect:'/activity/laifang/dairui',
          children:[
            {
              path:'/activity/laifang/:name',
              component:LaiFangOrGuoJiDetail
            }
          ]
        },
        {
          path:'/activity/xueshu',
          component:XueShuCommon
        },
        {
          path:'/activity/guoji',
          component:LaiFangOrGuoJi,
          redirect:'/activity/guoji/vtc',
          children:[
            {
              path:'/activity/guoji/:name',
              component:LaiFangOrGuoJiDetail
            }
          ]
        },
        {
          path:'/activity/biye',
          component:XueShuCommon
        },
        {
          path:'/activity/shiyan',
          component:XueShuCommon
        },
        {
          path:'/activity/rongyu',
          component:XueShuCommon
        },
      ]
    },
    {
      path: '/publish',
      component: Publish,
      redirect:'/publish/qikan',
      children:[
        {
          path:'/publish/qikan',
          component:PublishDetail_1,
          redirect:'/publish/qikan/2014',
          children:[
            {
              path:'/publish/qikan/:year',
              component:PublishDetail
            }
          ]
        },
        {
          path:'/publish/zhuanli',
          component:PublishDetail_1,
          redirect:'/publish/zhuanli/2014',
          children:[
            {
              path:'/publish/zhuanli/:year',
              component:PublishDetail
            }
          ]
        }
      ]
    },
    {
      path:'/resource',
      component:Resource,
      redirect:'/resource/ppt',
      children:[
        {
          path:'/resource/ppt',
          component:ResourceDetail
        },
        {
          path:'/resource/other',
          component:ResourceDetail
        },
      ]
    },

    //英文页面路由
    {
      path: '/home_en',
      component: Home
    },
    {
      path: '/member_en',
      component: Member,
      redirect:'/member_en/zdls',
      children:[
        {
          path: '/member_en/zdls',
          component:MemberRightTop,
          redirect:'/member_en/zdls/yuli',
          children:[
            {
              path:'/member_en/zdls/:teacher',
              component:MemberRightTeacher,
            }
          ]
        },
        {
          path:'/member_en/sys',
          component:MemberRightTop,
          redirect:'/member_en/sys/wireless',
          children:[
            {
              path:'/member_en/sys/wireless',
              component:MemberRightLab
            },
            {
              path:'/member_en/sys/media',
              component:MemberRightLab
            },
          ]
        },

        {
          path:'/member_en/bys',
          component:MemberRightTop,
          redirect:'/member_en/bys/2014',
          children:[
            {
              path:'/member_en/bys/:id',
              component:MemberRightGraduate,
            },
            {
              path:'/member_en/bys/2013',
              component:MemberRightGraduate,
            },
            {
              path:'/member_en/bys/2012',
              component:MemberRightGraduate,
            },
            {
              path:'/member_en/bys/2011',
              component:MemberRightGraduate,
            },
          ]
        }
      ]
    },
    {
      path: '/research_en',
      redirect:'/research_en/dsdsp',
      component: Research,
      children:[
        {
          path:'/research_en/:name',
          component:ResearchDetail
        }
      ]
    },
    {
      path: '/activity_en',
      component: Activity,
      redirect:'/activity_en/laifang',
      children:[
        {
          path:'/activity_en/laifang',
          component:LaiFangOrGuoJi,
          redirect:'/activity_en/laifang/dairui',
          children:[
            {
              path:'/activity_en/laifang/:name',
              component:LaiFangOrGuoJiDetail
            }
          ]
        },
        {
          path:'/activity_en/xueshu',
          component:XueShuCommon
        },
        {
          path:'/activity_en/guoji',
          component:LaiFangOrGuoJi,
          redirect:'/activity_en/guoji/vtc',
          children:[
            {
              path:'/activity_en/guoji/:name',
              component:LaiFangOrGuoJiDetail
            }
          ]
        },
        {
          path:'/activity_en/biye',
          component:XueShuCommon
        },
        {
          path:'/activity_en/shiyan',
          component:XueShuCommon
        },
        {
          path:'/activity_en/rongyu',
          component:XueShuCommon
        },
      ]
    },
    {
      path:'/resource_en',
      component:Resource,
      redirect:'/resource_en/ppt',
      children:[
        {
          path:'/resource_en/ppt',
          component:ResourceDetail
        },
        {
          path:'/resource_en/other',
          component:ResourceDetail
        },
      ]
    },
    {
      path: '/publish_en',
      component: Publish,
      redirect:'/publish_en/qikan',
      children:[
        {
          path:'/publish_en/qikan',
          component:PublishDetail_1,
          redirect:'/publish_en/qikan/2014',
          children:[
            {
              path:'/publish_en/qikan/:year',
              component:PublishDetail
            }
          ]
        },
        {
          path:'/publish_en/zhuanli',
          component:PublishDetail_1,
          redirect:'/publish_en/zhuanli/2014',
          children:[
            {
              path:'/publish_en/zhuanli/:year',
              component:PublishDetail
            }
          ]
        }
      ]
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
