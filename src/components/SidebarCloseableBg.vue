<template>
	<transition
		enter-active-class="animated fadeIn faster"
		leave-active-class="animated fadeOut fast"
	>
		<button
			type="button"
			v-if="ux.sidebarIsOpen"
			class="sidebar-closeable-bg fixed w-full h-full top-0 bottom-0 left-0 right-0 z-10 cursor-default"
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
.sidebar-closeable-bg {
	background-color: rgba(0, 0, 0, 0.281);
}
</style>
