<template>
	<div
		class="sidebar fixed lg:static w-64 top-0 bottom-0 left-auto right-0 z-50 bg-light-100"
		:class="{ open: ux.sidebarIsOpen }"
	>
		<div class="sidebar-head flex items-center justify-center">
			<img src="@/assets/logo.svg" alt="Logo" />
		</div>
		<div class="sidebar-body p-4 overflow-y-auto">
			<nav class="relative">
				<span
					class="absolute w-full h-10 rounded transition-transform transition-500 transition-backward bg-amethyst-300"
					:style="{ transform: `translateY(${100 * selected}%)` }"
				></span>
				<ul class="relative">
					<li v-for="item in menuItems" :key="item">
						<button
							class="flex items-center w-full h-10 px-3 py-2 focus:outline-none"
							@click="
								select(menuItems.indexOf(item));
								$router.push({ name: item.toLowerCase() });
								$store.dispatch('ux/closeSidebar');
							"
						>
							<Icon
								:name="item.toLowerCase()"
								class="w-6 h-6 fill-current transition-color transition-500 transition-backward"
								:class="
									selected === menuItems.indexOf(item)
										? 'text-light-100'
										: 'text-dark-500'
								"
							/>
							<span
								class="ml-2 text-sm font-normal transition-color transition-500 transition-backward"
								:class="
									selected === menuItems.indexOf(item)
										? 'text-light-100'
										: 'text-dark-500'
								"
								>{{ item }}</span
							>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			menuItems: ['Dashboard', 'Reports', 'Security'],
			selected: 0
		};
	},
	computed: mapState(['ux']),
	methods: {
		select(i) {
			this.selected = i;
		}
	}
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
