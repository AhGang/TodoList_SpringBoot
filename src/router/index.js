import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import ItemsGroup from '@/components/ItemsGroup'
import Home from '@/components/Home'
Vue.use(Router)
export default new Router({
    mode:'history',
    routes: [
     {
          path : '/welcome',  
          name : 'welcome',
          component  : Welcome
      },
    {
        path : '/home/:id',  
        name : 'home',
        component  : Home,
        props: true,
        children:[
            {
                path : 'itemsGroup',  
                name : 'itemsGroup',
                component  : ItemsGroup
            }
        ]
    },
    { path: '/itemsGroup/:id', component: ItemsGroup }
     
  ]

  })