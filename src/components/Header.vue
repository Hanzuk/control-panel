<template>
	<div class="header flex items-center px-6 shadow-md z-10 bg-light-100">
		<button
			type="button"
			class="lg:hidden ml-auto focus:outline-none"
			@click="open"
		>
			<svg
				class="w-6 h-6"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M3 12h18M3 6h18M3 18h18" />
			</svg>
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'app-header',
	methods: mapActions('sidebar', ['open'])
};
</script>

<style>
.header {
	grid-area: header;
}
</style>
