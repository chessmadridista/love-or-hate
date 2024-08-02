import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import UserView from '../views/UserView.vue'
import GetStartedView from '../views/GetStartedView.vue'
import CommunityView from '../views/CommunityView.vue'
import ChatView from '../views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView
    },
    {
      path: '/user/:username',
      name: 'user',
      component: UserView
    },
    {
      path: '/get-started',
      name: 'get-started',
      component: GetStartedView
    },
    {
      path: '/community/:communityName',
      name: 'community',
      component: CommunityView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView
    },
  ]
})

export default router
