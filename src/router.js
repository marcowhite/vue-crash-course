import Vue from "vue";
import Home from '@/views/Home'
import Router from 'vue-router'

Vue.use(Router)

export default  new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            component: Home
        },
        {
            path:'/todos',
            component:()=> import('./views/Todos.vue')
        }
    ]
})