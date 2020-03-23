import Vue from 'vue'
import VueRouter from 'vue-router'

import matches from '../views/matches.vue'
import Battles from '../views/battles.vue'
import ViewBattle from '../views/view-battle.vue'
import ViewMatch from '../views/view-match.vue'

Vue.use(VueRouter)

const routes = [
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
	{
		path: '/battles/battle',
		name: 'Battle',
		component: ViewBattle
	},
	{
		path: '/matches/match',
		name: 'Match',
		component: ViewMatch
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
	routes,
	linkActiveClass: "nav-button--active"
})

router.currentRoute.path === '/'
	? router.push('/matches/')
	: false
	
export default router
