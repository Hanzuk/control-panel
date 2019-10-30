<template>
	<div
		class="sidebar fixed xl:static flex flex-col top-0 bottom-0 right-0 z-50 px-4 border-r border-light-700 bg-light-600"
		:class="{ open: sidebar.open }"
	>
		<div class="sidebar-head flex items-center flex-shrink-0 h-12">
			<img class="ml-3" src="@/assets/svg/logo-light-mode.svg" alt="logo" />
		</div>
		<nav class="sidebar-body relative flex-grow overflow-y-auto">
			<span
				class="absolute w-full h-10 rounded-lg shadow bg-light-500 exponential transition-slower transition-transform"
				:style="{ transform: `translateY(${100 * selected}%)` }"
			></span>
			<ul class="relative">
				<li>
					<button
						type="button"
						class="flex items-center w-full px-3 py-2 focus:outline-none"
						@click="select(0)"
					>
						<svg
							class="w-6 h-6 exponential transition-slower transition-all"
							:class="
								selected === 0 ? 'text-primary-600' : 'text-light-900'
							"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								class="fill-current"
								d="M3 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8zm0 8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8zm1-17a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6z"
							/>
						</svg>
						<span
							class="h-6 ml-2 text-sm font-normal exponential transition-slower transition-all"
							:class="
								selected === 0 ? 'text-primary-600' : 'text-light-900'
							"
							>Dashboard</span
						>
					</button>
				</li>
				<li>
					<button
						type="button"
						class="flex items-center w-full px-3 py-2 focus:outline-none"
						@click="select(1)"
					>
						<svg
							class="w-6 h-6 exponential transition-slower transition-all"
							:class="
								selected === 1 ? 'text-primary-600' : 'text-light-900'
							"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								class="fill-current"
								d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
							/>
						</svg>
						<span
							class="h-6 ml-2 text-sm font-normal exponential transition-slower transition-all"
							:class="
								selected === 1 ? 'text-primary-600' : 'text-light-900'
							"
							>Account</span
						>
					</button>
				</li>
				<li>
					<button
						type="button"
						class="flex items-center w-full px-3 py-2 focus:outline-none"
						@click="select(2)"
					>
						<svg
							class="w-6 h-6 exponential transition-slower transition-all"
							:class="
								selected === 2 ? 'text-primary-600' : 'text-light-900'
							"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								class="fill-current"
								d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12a3.99 3.99 0 0 0 1.502 3.124 10.044 10.044 0 0 1-2.046 3.543 3.992 3.992 0 0 0-3.456.261 3.992 3.992 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004 3.994 3.994 0 0 0-3.654-3.39 3.993 3.993 0 0 0-1.758.265A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86V2.21zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
							/>
						</svg>
						<span
							class="h-6 ml-2 text-sm font-normal exponential transition-slower transition-all"
							:class="
								selected === 2 ? 'text-primary-600' : 'text-light-900'
							"
							>Settings</span
						>
					</button>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'sidebar',
	data() {
		return {
			selected: 0
		};
	},
	computed: {
		...mapState(['sidebar'])
	},
	methods: {
		...mapActions('sidebar', ['toggleSidebar']),
		select(i) {
			this.selected = i;
		}
	}
};
</script>

<style>
.sidebar {
	left: calc(100% - var(--sidebar-width));
	transform: translateX(100%);
	transition: transform 700ms cubic-bezier(1, 0, 0, 1);
}

.sidebar-body {
	flex-basis: 0;
}

.open {
	transform: translateX(0);
}

@media (min-width: 1280px) {
	.sidebar {
		transform: translateX(0);
	}
}

.ease-in {
	transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ease-out {
	transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.ease-in-out {
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.exponential {
	transition-timing-function: cubic-bezier(1, 0, 0, 1);
}

.transition-fastest {
	transition-duration: 75ms;
}
.transition-faster {
	transition-duration: 100ms;
}
.transition-fast {
	transition-duration: 150ms;
}
.transition-medium {
	transition-duration: 200ms;
}
.transition-slow {
	transition-duration: 300ms;
}
.transition-slower {
	transition-duration: 500ms;
}
.transition-slowest {
	transition-duration: 700ms;
}

.transition-all {
	transition-property: all;
}
.transition-opacity {
	transition-property: opacity;
}
.transition-transform {
	transition-property: transform;
}
</style>
