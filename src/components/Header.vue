<template>
	<div
		class="flex items-center justify-between flex-shrink-0 h-20 relative px-6 lg:px-12 shadow bg-white"
	>
		<h1 class="text-2xl font-semibold text-gray-900">{{ routeName }}</h1>
		<div class="hidden lg:flex items-center">
			<button class="text-gray-600 hover:text-gray-500">
				<BaseIcon name="search" class="w-6 h-6" />
			</button>
			<button class="ml-8 text-gray-600 hover:text-gray-500">
				<BaseIcon name="bell" class="w-6 h-6" />
			</button>
			<button
				class="px-3 py-2 ml-8 rounded text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-none"
			>
				Log out
			</button>
		</div>
		<button
			class="lg:hidden ml-auto focus:outline-none"
			@click="$store.dispatch('ux/openSidebar')"
		>
			<BaseIcon name="menu" class="w-8 h-8 text-gray-600" />
		</button>
	</div>
</template>

<script>
import { upperFirst } from 'lodash';

export default {
	computed: {
		routeName() {
			return upperFirst(this.$route.name);
		}
	}
};
</script>
