<template>
	<div
		class="flex flex-col flex-shrink-0 fixed lg:static top-0 bottom-0 left-auto w-64 z-30 bg-gray-700 transition-all"
		:class="[
			{ '-right-100': !ux.sidebarIsOpen },
			{ 'right-0': ux.sidebarIsOpen }
		]"
	>
		<div class="flex flex-shrink-0 items-center w-full h-20 px-3">
			<img class="ml-3" src="@/assets/logo.svg" alt="Logo" />
		</div>
		<div class="flex-grow flex-shrink-0 overflow-y-auto">
			<nav class="px-4 py-4">
				<ul>
					<li>
						<button
							class="flex items-center w-full px-3 py-3 rounded-lg focus:outline-none transition-all"
							:class="
								selected === 0
									? 'text-white bg-gray-800'
									: 'text-gray-500'
							"
							@click="select(0)"
						>
							<Icon name="home" class="w-6 h-6 fill-current" />
							<span class="ml-3">Dashboard</span>
						</button>
					</li>
					<li>
						<button
							class="flex items-center w-full px-3 py-3 rounded-lg focus:outline-none transition-all"
							:class="
								selected === 1
									? 'text-white bg-gray-800'
									: 'text-gray-500'
							"
							@click="select(1)"
						>
							<Icon name="reports" class="w-6 h-6 fill-current" />
							<span class="ml-3">Reports</span>
						</button>
					</li>
					<li>
						<button
							class="flex items-center w-full px-3 py-3 rounded-lg focus:outline-none transition-all"
							:class="
								selected === 2
									? 'text-white bg-gray-800'
									: 'text-gray-500'
							"
							@click="select(2)"
						>
							<Icon name="shield" class="w-6 h-6 fill-current" />
							<span class="ml-3">Security</span>
						</button>
					</li>
					<hr class="-mx-4 my-5 border border-gray-800" />
					<li>
						<button
							class="flex items-center w-full px-3 py-3 rounded-lg focus:outline-none transition-all"
							:class="
								selected === 3
									? 'text-white bg-gray-800'
									: 'text-gray-500'
							"
							@click="select(3)"
						>
							<Icon name="settings" class="w-6 h-6 fill-current" />
							<span class="ml-3">Settings</span>
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
.-right-100 {
	right: -100%;
}

.transition-all {
	transition: all 700ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
}
</style>
