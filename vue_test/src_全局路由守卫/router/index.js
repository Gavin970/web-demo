// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建一个路由器
const router = new VueRouter({
  routes:[
    {
      name:'guanyu',
      path:'/about',
      component:About,
      meta:{'title':'关于'}
    },
    {
      name:'zhuye',
      path:'/home',
      component:Home,
      meta:{'title':'主页'},
      children:[
        {
          name:'xinwen',
          path:'news',
          component:News,
          meta:{'isAuth':true,'title':'新闻'}
        },
        {
          name:'xiaoxi',
          path:'message',
          component:Message,
          meta:{'isAuth':true,'title':'消息'},
          children:[
            {
              name: 'xiangqing',
              path:'detail',
              component:Detail,
              meta:{'isAuth':true,'title':'详情'},
              // props的第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传递给组件
              // props:{a:666,b:777}
              // props的第二种写法：props值为布尔值,若布尔值为ture，则把路由收到的所有params参数通过props传递给组件
              // props:true
              // props的第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传递给组件
              props($route){
                return {
                  id:$route.query.id,
                  title:$route.query.title
                }
              }
            },
          ]
        },
      ]
    },
  ]
})

//全局前置路由守卫————初始化的时候调用、每次路由切换之前被调用
router.beforeEach((to,from,next) => { 
  console.log('前置路由守卫',to,from);
  // debugger
  if (to.meta.isAuth) { //判断是否需要鉴权
    if (localStorage.getItem('type') === '1') {
      // document.title = to.meta.title || 'Vue_test';
      next();
    } else {
      alert('抱歉，您没有权限查看该内容！')
    }
  } else {
    // document.title = to.meta.title || 'Vue_test';
    next();
  }
})

//全局后置路由守卫————初始化的时候调用、每次路由切换之后被调用
router.afterEach((to,from) => {
  console.log('后置路由守卫',to,from);
  document.title = to.meta.title || 'Vue_test';
})

export default router