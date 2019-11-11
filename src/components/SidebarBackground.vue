<template>
  <transition
    enter-active-class="animated fadeIn ad-400"
    leave-active-class="animated fadeOut ad-400"
  >
    <button
      v-if="ux.sidebarIsOpen"
      class="sidebar-background absolute w-full h-full top-0 bottom-0 left-0 right-0 z-10 cursor-default"
      @click="closeSidebar"
    ></button>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState(['ux']),
  methods: mapActions('ux', ['closeSidebar']),
}
</script>

<style lang="scss">
.sidebar-background {
  background-color: rgba(0, 0, 0, 0.281);
}
</style>
