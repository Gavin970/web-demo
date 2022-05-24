// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name: 'xiangqing',
              path:'detail',
              component:Detail,
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