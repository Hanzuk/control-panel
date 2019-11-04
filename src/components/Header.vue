<template>
	<div class="header flex items-center px-6 shadow-md z-10 bg-light-100">
		<AccountDropdown />
		<button
			type="button"
			class="lg:hidden ml-auto focus:outline-none"
			@click="openSidebar"
		>
			<Icon name="menu" class="w-6 h-6 fill-current text-dark-500" />
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

import AccountDropdown from '@/components/AccountDropdown.vue';

export default {
	components: {
		AccountDropdown
	},
	methods: mapActions('ux', ['openSidebar'])
};
</script>

<style>
.header {
	grid-area: header;
}
</style>
