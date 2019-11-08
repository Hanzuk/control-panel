import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'dashboard',
		component: Dashboard
	},
	{
		path: '/reports',
		name: 'reports',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "reports" */ '../views/Reports.vue')
	},
	{
		path: '/security',
		name: 'security',
		component: () =>
			import(/* webpackChunkName: "security" */ '../views/Security.vue')
	},
	{
		path: '/settings',
		name: 'settings',
		component: () =>
			import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
