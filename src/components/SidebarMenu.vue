<template>
	<ul class="relative">
		<li>
			<button
				class="flex items-center w-full h-10 px-3 py-2 focus:outline-none"
				@click="select(0)"
			>
				<svg
					class="w-6 h-6 transition-color transition-500 transition-backward"
					:class="selected === 0 ? 'text-light-100' : 'text-dark-500'"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						class="fill-current"
						d="M12 4C6.486 4 2 8.486 2 14c0 1.55.354 3.045 1.051 4.445.17.34.516.555.895.555h16.107c.379 0 .726-.215.896-.555C21.646 17.045 22 15.55 22 14c0-5.514-4.486-10-10-10zm7.41 13H4.59A7.875 7.875 0 0 1 4 14c0-4.411 3.589-8 8-8s8 3.589 8 8a7.875 7.875 0 0 1-.59 3z"
					/>
					<path
						class="fill-current"
						d="M10.939 12.939c-.168.111-.323.262-.44.44-.465.708-.268 1.657.44 2.121.707.465 1.657.268 2.121-.44l3.962-6.038a.0338.0338 0 0 0 0-.035.0335.0335 0 0 0-.045-.01l-6.038 3.962z"
					/>
				</svg>
				<span
					class="ml-2 text-sm font-normal transition-color transition-500 transition-backward"
					:class="selected === 0 ? 'text-light-100' : 'text-dark-500'"
					>Dashboard</span
				>
			</button>
		</li>
		<li>
			<button
				class="flex items-center w-full h-10 px-3 py-2 focus:outline-none"
				@click="select(1)"
			>
				<svg
					class="w-5 h-5 transition-color transition-500 transition-backward"
					:class="selected === 1 ? 'text-light-100' : 'text-dark-500'"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path class="fill-current" d="M18 20V10M12 20V4M6 20v-6" />
				</svg>
				<span
					class="ml-2 text-sm font-normal transition-color transition-500 transition-backward"
					:class="selected === 1 ? 'text-light-100' : 'text-dark-500'"
					>Reports</span
				>
			</button>
		</li>
		<li>
			<button
				class="flex items-center w-full h-10 px-3 py-2 focus:outline-none"
				@click="select(2)"
			>
				<svg
					class="w-5 h-5 transition-color transition-500 transition-backward"
					:class="selected === 2 ? 'text-light-100' : 'text-dark-500'"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
					<path d="M7 11V7a5 5 0 0 1 10 0v4" />
				</svg>
				<span
					class="ml-2 text-sm font-normal transition-color transition-500 transition-backward"
					:class="selected === 2 ? 'text-light-100' : 'text-dark-500'"
					>Security</span
				>
			</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'sidebar-menu',
	data() {
		return {
			selected: 0
		};
	},
	methods: {
		select(i) {
			this.selected = i;
			this.$emit('currentMenuItem', i);
		}
	}
};
</script>
