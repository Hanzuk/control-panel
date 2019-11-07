<template>
	<div class="flex relative h-screen bg-gray-200">
		<sidebar />
		<div class="flex flex-col flex-grow">
			<Header />
			<Main>
				<router-view />
			</Main>
		</div>
		<SidebarBackground />
	</div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import SidebarBackground from '@/components/SidebarBackground.vue';

export default {
	name: 'app',
	components: {
		Sidebar,
		Header,
		Main,
		SidebarBackground
	}
};
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import 'assets/animate.css';
</style>
