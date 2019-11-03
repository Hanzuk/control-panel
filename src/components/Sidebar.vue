<template>
	<div
		class="sidebar fixed lg:static w-64 top-0 bottom-0 left-auto right-0 z-50 bg-light-100"
		:class="{ open: sidebar.isOpen }"
	>
		<div class="sidebar-head flex items-center justify-center">
			<img src="@/assets/svg/logo.svg" alt="Logo" />
		</div>
		<div class="sidebar-body p-4 overflow-y-auto">
			<nav class="relative">
				<span
					class="absolute w-full h-10 rounded transition-transform transition-500 transition-backward bg-amethyst-300"
					:style="{ transform: `translateY(${100 * selected}%)` }"
				></span>
				<SidebarMenu @currentMenuItem="select" />
			</nav>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import SidebarMenu from '@/components/SidebarMenu.vue';

export default {
	name: 'app-sidebar',
	components: {
		SidebarMenu
	},
	data() {
		return {
			selected: 0
		};
	},
	computed: mapState(['sidebar']),
	methods: {
		...mapActions('sidebar', ['close']),
		select(toSelect) {
			this.selected = toSelect;
		}
	}
};
</script>

<style>
.sidebar {
	display: grid;
	grid-area: sidebar;
	grid-template-columns: 1fr;
	grid-template-rows: 4rem 1fr;
	transform: translateX(100%);
	transition: transform 700ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.open {
	transform: translateX(0%);
}

@media (min-width: 1024px) {
	.sidebar {
		transform: translateX(0);
		transition: none;
	}
}
</style>
