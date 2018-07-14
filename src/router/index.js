import Vue from 'vue'
import Router from 'vue-router'
import BodyContent from '@/components/router/BodyContent'
import LoginView from '@/components/router/LoginView'
import TopicsList from '@/components/router/TopicsList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Main', component: BodyContent },
    { path: '/location/:location', name: 'LocationDetail', component: TopicsList },
    { path: '/login', name: 'Login', component: LoginView }
  ]
})
