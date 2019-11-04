<template>
	<div
		class="sidebar fixed lg:static w-64 top-0 bottom-0 left-auto right-0 z-50 bg-light-100"
		:class="{ open: ux.sidebarIsOpen }"
	>
		<div class="sidebar-head flex items-center justify-center">
			<img src="@/assets/logo.svg" alt="Logo" />
		</div>
		<div class="sidebar-body p-4 overflow-y-auto">
			<Menu />
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

import Menu from '@/components/Menu.vue';

export default {
	components: {
		Menu
	},
	computed: mapState(['ux'])
};
</script>

<style lang="scss">
.sidebar {
	display: grid;
	grid-area: sidebar;
	grid-template-columns: 1fr;
	grid-template-rows: 4rem 1fr;
	transform: translateX(100%);
	transition: transform 700ms cubic-bezier(0.645, 0.045, 0.355, 1);

	&.open {
		transform: translateX(0%);
	}
}

@media (min-width: 1024px) {
	.sidebar {
		transform: translateX(0);
		transition: none;
	}
}
</style>
