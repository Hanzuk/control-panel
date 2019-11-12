// NOTE Usar esta estructura de columnas y columns para las demas vistas
<template>
  <main class="flex-grow pt-6 px-6 lg:px-12 overflow-y-auto">
    <h2 class="block mb-1 text-lg text-gray-800">Sales</h2>
    <!-- Columns -->
    <div class="lg:flex -mx-2 mb-4">
      <!-- Column -->
      <div class="flex-grow flex-shrink p-2 lg:pr-0">
        <!-- Card -->
        <div
          class="w-full h-full p-4 rounded-lg lg:rounded-tr-none lg:rounded-br-none shadow bg-white"
        >
          <p class="text-xs font-semibold text-gray-700">Today</p>
          <div class="flex items-center justify-between">
            <p class="text-indigo-500">CAD$973.00</p>
            <div class="flex items-center text-red-700">
              <BaseIcon name="arrow-down" class="w-3 h-3" />
              <span class="text-xs font-bold">8%</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="flex-grow flex-shrink p-2 lg:px-0">
        <!-- Card -->
        <div
          class="w-full h-full p-4 rounded-lg lg:rounded-none shadow bg-white"
        >
          <p class="text-xs font-semibold text-gray-700">Last 7 days</p>
          <div class="flex items-center justify-between">
            <p class="text-indigo-500">CA$12,027.00</p>
            <div class="flex items-center text-green-700">
              <BaseIcon name="arrow-up" class="w-3 h-3" />
              <span class="text-xs font-bold">8%</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="flex flex-col flex-grow flex-shrink p-2 lg:pl-0">
        <!-- Card -->
        <div
          class="w-full h-full p-4 rounded-lg lg:rounded-tl-none lg:rounded-bl-none shadow bg-white"
        >
          <p class="text-xs font-semibold text-gray-700">Last 30 days</p>
          <div class="flex items-center justify-between">
            <p class="text-indigo-500">CA$57,929.00</p>
            <div class="flex items-center text-green-700">
              <BaseIcon name="arrow-up" class="w-3 h-3" />
              <span class="text-xs font-bold">8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Columns -->
    <div class="lg:flex -mx-2 mb-4">
      <!-- Column -->
      <div class="flex flex-col flex-grow flex-shrink-0 p-2 lg:w-1/3">
        <h2 class="block mb-1 text-lg text-gray-800">Payout</h2>
        <!-- Card -->
        <div class="w-full h-full p-4 rounded-lg shadow bg-white">
          <p class="text-xs font-semibold text-gray-700">Today</p>
          <div class="flex items-center justify-between">
            <p class="text-indigo-500">CAD$973.00</p>
            <div class="flex items-center text-red-700">
              <BaseIcon name="arrow-down" class="w-3 h-3" />
              <span class="text-xs font-bold">8%</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="flex flex-col flex-grow flex-shrink-0 p-2 lg:w-2/3">
        <h2 class="block mb-1 text-lg text-gray-800">Overview</h2>
        <!-- Card -->
        <div class="w-full h-full p-4 rounded-lg shadow bg-white">
          <p class="text-xs font-semibold text-gray-700">Last 7 days</p>
          <div class="flex items-center justify-between">
            <p class="text-indigo-500">CA$12,027.00</p>
            <div class="flex items-center text-green-700">
              <BaseIcon name="arrow-up" class="w-3 h-3" />
              <span class="text-xs font-bold">8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
