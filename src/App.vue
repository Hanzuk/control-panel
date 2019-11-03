<template>
	<div class="app h-screen bg-light-300">
		<Header />
		<Sidebar />
		<Main>
			<router-view />
		</Main>
		<transition name="fade">
			<button
				type="button"
				v-if="sidebar.isOpen"
				class="fixed w-full h-full top-0 bottom-0 left-0 right-0 z-40 opacity-50 cursor-default bg-dark-700"
				@click="close"
			></button>
		</transition>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Main from '@/components/Main.vue';

export default {
	components: {
		Header,
		Sidebar,
		Main
	},
	computed: mapState(['sidebar']),
	methods: mapActions('sidebar', ['close'])
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.app {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 4rem 1fr;
	grid-template-areas: 'header' 'main';
}

@media (min-width: 1024px) {
	.app {
		grid-template-columns: 16rem 1fr;
		grid-template-areas: 'sidebar header' 'sidebar main';
	}
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 700ms ease-out;
}
</style>
