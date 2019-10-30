<template>
	<div
		class="header flex items-center justify-between flex-shrink-0 h-12 px-6 z-40"
	>
		<h1 class="text-xl text-dark-100">Dashboard</h1>
		<button class="xl:hidden focus:outline-none" @click="toggleSidebar">
			<svg
				class="w-6 h-6 text-dark-100"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path
					class="fill-current"
					d="M3 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm6 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1zm-6 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'header',
	methods: mapActions('sidebar', ['toggleSidebar'])
};
</script>
