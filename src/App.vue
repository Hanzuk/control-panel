<template>
	<div class="app relative h-screen max-h-screen bg-light-600">
		<Sidebar />
		<div class="main flex flex-col overflow-y-auto">
			<Header />
			<div class="main-body px-6 pb-3 flex-grow flex-shrink-0">
				<router-view />
			</div>
		</div>
		<transition name="inout">
			<div
				v-if="sidebar.open"
				class="close-layer xl:hidden absolute top-0 bottom-0 left-0 right-0 z-40"
				@click="toggleSidebar"
			></div>
		</transition>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

export default {
	name: 'app',
	components: {
		Sidebar,
		Header
	},
	computed: mapState(['sidebar']),
	methods: mapActions('sidebar', ['toggleSidebar'])
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* TODO Agregar los colores a la configuracion de Tailwind para asi tener modo oscuro mas facil */
:root {
	--sidebar-width: 260px;
	--sidebar-background: #2a2a2e;
}

.app {
	display: grid;
	grid-template-columns: 1fr;
}

.close-layer {
	background-color: rgba(0, 0, 0, 0.301);
}

@media (min-width: 1280px) {
	.app {
		grid-template-columns: var(--sidebar-width) 1fr;
	}
}

/* ========================================================================== */
/*                           CLOSE-LAYER TRANSITIONS                          */
/* ========================================================================== */

.inout-enter,
.inout-leave-to {
	opacity: 0;
}

.inout-enter-active,
.inout-leave-active {
	transition: opacity 700ms ease-in-out;
}
</style>
