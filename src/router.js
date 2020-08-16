import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({


routes: [
{path: '/properties',  name: 'properties',  component:require('./components/Properties.vue').default},
{path: '/register',  name: 'register',  component:require('./components/Register.vue').default},
{path: '/login',  name: 'login',  component:require('./components/Login.vue').default},
{path: '/holding',  name: 'holding',  component:require('./components/Holding.vue').default},


]

})

export default router
