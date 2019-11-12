<template>
  <div
    class="fixed lg:static top-0 bottom-0 left-auto w-64 z-30 bg-gray-700 tp-right td-400 ttf-sine"
    :class="[
      { '-right-100': !ux.sidebarIsOpen },
      { 'right-0': ux.sidebarIsOpen },
    ]"
  >
    <div
      class="flex flex-shrink-0 items-center w-full h-20 mb-6 px-3 bg-gray-800"
    >
      <img class="ml-3" src="@/assets/logo.svg" alt="Logo" />
    </div>
    <nav>
      <ul>
        <div class="pb-4 border-b border-gray-800">
          <li>
            <router-link
              :to="{ name: 'dashboard' }"
              v-slot="{ href, navigate, isExactActive }"
            >
              <a
                :href="href"
                class="flex items-center w-full px-5 py-2 font-semibold text-sm border-l-4 border-gray-700 hover:text-gray-300 focus:outline-none tp-all td-300 ttf-sine"
                :class="
                  isExactActive
                    ? 'text-gray-300 border-indigo-400 bg-gray-800'
                    : 'text-gray-500'
                "
                @click="navigate"
              >
                <BaseIcon name="home" class="w-6 h-6" />
                <span class="ml-5">Dashboard</span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'reports' }"
              v-slot="{ href, navigate, isExactActive }"
            >
              <a
                :href="href"
                class="flex items-center w-full px-5 py-2 font-semibold text-sm border-l-4 border-gray-700 hover:text-gray-300 focus:outline-none tp-all td-300 ttf-sine"
                :class="
                  isExactActive
                    ? 'text-gray-300 border-indigo-400 bg-gray-800'
                    : 'text-gray-500'
                "
                @click="navigate"
              >
                <BaseIcon name="reports" class="w-6 h-6" />
                <span class="ml-5">Reports</span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'security' }"
              v-slot="{ href, navigate, isExactActive }"
            >
              <a
                :href="href"
                class="flex items-center w-full px-5 py-2 font-semibold text-sm border-l-4 border-gray-700 hover:text-gray-300 focus:outline-none tp-all td-300 ttf-sine"
                :class="
                  isExactActive
                    ? 'text-gray-300 border-indigo-400 bg-gray-800'
                    : 'text-gray-500'
                "
                @click="navigate"
              >
                <BaseIcon name="shield" class="w-6 h-6" />
                <span class="ml-5">Security</span>
              </a>
            </router-link>
          </li>
        </div>
        <div class="pt-4">
          <li>
            <router-link
              :to="{ name: 'settings' }"
              v-slot="{ href, navigate, isExactActive }"
            >
              <a
                :href="href"
                class="flex items-center w-full px-5 py-2 font-semibold text-sm border-l-4 border-gray-700 hover:text-gray-300 focus:outline-none tp-all td-300 ttf-sine"
                :class="
                  isExactActive
                    ? 'text-gray-300 border-indigo-400 bg-gray-800'
                    : 'text-gray-500'
                "
                @click="navigate"
              >
                <BaseIcon name="settings" class="w-6 h-6" />
                <span class="ml-5">Settings</span>
              </a>
            </router-link>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['ux']),
}
</script>
