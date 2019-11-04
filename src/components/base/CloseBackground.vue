<template>
	<!-- TODO Hacerlo mas generico para usarlo con un modal, etc -->
	<transition name="fade">
		<button
			type="button"
			v-if="ux.sidebarIsOpen"
			class="fixed w-full h-full top-0 bottom-0 left-0 right-0 z-40 opacity-50 cursor-default bg-dark-700"
			@click="closeSidebar"
		></button>
	</transition>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	computed: mapState(['ux']),
	methods: mapActions('ux', ['closeSidebar'])
};
</script>

<style lang="scss">
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 700ms ease-out;
}
</style>
