<template>
	<div class="app h-screen bg-light-300">
		<Header />
		<Sidebar />
		<Main>
			<router-view />
		</Main>
		<CloseBackground />
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Main from '@/components/Main.vue';

export default {
	name: 'app',
	components: {
		Header,
		Sidebar,
		Main
	}
};
</script>

<style lang="scss">
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
</style>
