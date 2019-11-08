<template>
	<div class="flex-grow overflow-y-auto">
		<div class="flex items-center justify-between mt-10 mb-2 px-6 lg:px-12">
			<h2 class="text-xl font-semibold">Overview</h2>
			<button
				class="px-3 py-2 rounded-lg text-sm text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-none"
			>
				Last 30 days
			</button>
		</div>
		<div class="lg:flex px-2 lg:px-8">
			<div class="flex-grow flex-shrink h-56 p-3">
				<div class="w-full h-full rounded-lg shadow-md bg-white"></div>
			</div>
			<div class="flex-grow flex-shrink h-56 p-3">
				<div class="w-full h-full rounded-lg shadow-md bg-white"></div>
			</div>
			<div class="flex-grow flex-shrink h-56 p-3">
				<div class="w-full h-full rounded-lg shadow-md bg-white"></div>
			</div>
		</div>
		<div class="flex items-center justify-between mt-10 mb-2 px-6 lg:px-12">
			<h2 class="text-xl font-semibold">Recent Avtivity</h2>
			<a href="@" class="flex items-center hover:text-gray-700">
				<span>View all activities</span>
				<Icon name="arrow-right" class="w-4 h-4 mt-1 ml-1 fill-current" />
			</a>
		</div>
		<div class="lg:flex mb-10 px-2 lg:px-8">
			<div class="flex-grow flex-shrink w-full h-92 p-3">
				<div class="w-full h-full rounded-lg shadow-md bg-white"></div>
			</div>
		</div>
	</div>
</template>
