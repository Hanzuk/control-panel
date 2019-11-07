<template>
	<div
		class="flex items-center justify-between flex-shrink-0 h-20 relative px-6 lg:px-12 shadow bg-white"
	>
		<h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
		<div class="hidden lg:flex items-center">
			<button>
				<Icon name="search" class="w-6 h-6 fill-current text-gray-600" />
			</button>
			<button class="ml-8">
				<Icon name="bell" class="w-6 h-6 fill-current text-gray-600" />
			</button>
			<button class="px-3 py-2 ml-8 rounded text-gray-900 bg-gray-300">
				Log out
			</button>
		</div>
		<button
			class="lg:hidden ml-auto focus:outline-none"
			@click="$store.dispatch('ux/openSidebar')"
		>
			<Icon name="menu" class="w-8 h-8 fill-current text-gray-600" />
		</button>
	</div>
</template>
