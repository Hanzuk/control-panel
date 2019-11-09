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
						<router-link
							:to="{ name: 'dashboard' }"
							v-slot="{ href, navigate, isExactActive }"
						>
							<a
								:href="href"
								class="flex items-center w-full px-3 py-3 rounded-lg hover:text-white focus:outline-none transition-all"
								:class="
									isExactActive
										? 'text-white bg-gray-800'
										: 'text-gray-500'
								"
								@click="navigate"
							>
								<BaseIcon name="home" class="w-6 h-6" />
								<span class="ml-3">Dashboard</span>
							</a>
						</router-link>
					</li>
					<li>
						<router-link
							:to="{ name: 'reports' }"
							v-slot="{ href, navigate, isExactActive }"
						>
							<a
								:href="href"
								class="flex items-center w-full px-3 py-3 rounded-lg hover:text-white focus:outline-none transition-all"
								:class="
									isExactActive
										? 'text-white bg-gray-800'
										: 'text-gray-500'
								"
								@click="navigate"
							>
								<BaseIcon name="reports" class="w-6 h-6" />
								<span class="ml-3">Reports</span>
							</a>
						</router-link>
					</li>
					<li>
						<router-link
							:to="{ name: 'security' }"
							v-slot="{ href, navigate, isExactActive }"
						>
							<a
								:href="href"
								class="flex items-center w-full px-3 py-3 rounded-lg hover:text-white focus:outline-none transition-all"
								:class="
									isExactActive
										? 'text-white bg-gray-800'
										: 'text-gray-500'
								"
								@click="navigate"
							>
								<BaseIcon name="shield" class="w-6 h-6" />
								<span class="ml-3">Security</span>
							</a>
						</router-link>
					</li>
					<hr class="-mx-4 my-5 border border-gray-800" />
					<li>
						<router-link
							:to="{ name: 'settings' }"
							v-slot="{ href, navigate, isExactActive }"
						>
							<a
								:href="href"
								class="flex items-center w-full px-3 py-3 rounded-lg hover:text-white focus:outline-none transition-all"
								:class="
									isExactActive
										? 'text-white bg-gray-800'
										: 'text-gray-500'
								"
								@click="navigate"
							>
								<BaseIcon name="settings" class="w-6 h-6" />
								<span class="ml-3">Settings</span>
							</a>
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: mapState(['ux'])
};
</script>

<style lang="scss">
.-right-100 {
	right: -100%;
}

.transition-all {
	transition: all 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
}
</style>
