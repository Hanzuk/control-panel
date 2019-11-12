<template>
  <header
    class="flex items-center justify-between flex-shrink-0 h-20 relative px-6 lg:px-12 shadow bg-white"
  >
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <BaseIcon name="search" class="w-6 h-6 text-gray-600" />
      </span>
      <input
        type="text"
        placeholder="Search"
        class="w-72 py-2 pl-10 pr-4 rounded text-sm font-semibold text-gray-700 placeholder-gray-600 border border-gray-400 focus:border-gray-500 tp-all td-200 ttf-ease"
      />
    </div>
    <div class="hidden lg:flex flex-shrink-0 items-center">
      <button
        class="ml-8 text-gray-500 hover:text-gray-600 tp-color td-200 ttf-ease"
      >
        <BaseIcon name="bell" class="w-6 h-6" />
      </button>
      <button
        class="px-3 py-1 ml-8 rounded border border-gray-400 font-semibold text-gray-800 hover:bg-gray-400 focus:outline-none tp-bg td-200 ttf-ease"
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
  </header>
</template>
