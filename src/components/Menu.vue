<template>
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
</template>

<script>
export default {
	data() {
		return {
			menuItems: ['Dashboard', 'Reports', 'Security'],
			selected: 0
		};
	},
	methods: {
		select(i) {
			this.selected = i;
		}
	}
};
</script>
