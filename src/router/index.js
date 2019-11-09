import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardLayout from '../layouts/DashboardLayout.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'app',
		component: DashboardLayout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				name: 'dashboard',
				component: () =>
					import(
						/* webpackChunkName: "reports" */ '../views/Dashboard.vue'
					)
			},
			{
				path: 'reports',
				name: 'reports',
				component: () =>
					import(/* webpackChunkName: "reports" */ '../views/Reports.vue')
			},
			{
				path: 'security',
				name: 'security',
				component: () =>
					import(
						/* webpackChunkName: "security" */ '../views/Security.vue'
					)
			},
			{
				path: 'settings',
				name: 'settings',
				component: () =>
					import(
						/* webpackChunkName: "settings" */ '../views/Settings.vue'
					)
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
