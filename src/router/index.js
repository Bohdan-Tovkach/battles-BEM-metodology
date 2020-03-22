import Vue from 'vue'
import VueRouter from 'vue-router'

import matches from '../views/matches.vue'
import Battles from '../views/battles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Matches',
    component: matches
	},
	{
    path: '/matches',
    name: 'Matches',
    component: matches
	},
	{
		path: '/battles',
		name: 'Battles',
		component: Battles
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
