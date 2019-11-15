<template>
  <div class="flex items-center justify-center h-screen bg-gray-200">
    <form class="w-92 px-8 pt-6 pb-8 rounded bg-white shadow-xl">
      <div class="mb-8">
        <h1 class="text-2xl text-gray-900 font-bold">Login into system</h1>
        <p class="text-gray-600 text-sm">
          or
          <a
            href="#"
            class="underline text-gray-900 font-semibold hover:text-gray-700"
            >register to access</a
          >
        </p>
      </div>
      <div class="mb-4">
        <label class="block mb-2 font-semibold" for="username">Username</label>
        <input
          class="w-full p-2 border-2 rounded text-sm text-gray-800 border-gray-300 bg-gray-100 focus:border-gray-500 placeholder-gray-600"
          type="text"
          id="username"
          placeholder="myname@example.com"
        />
      </div>
      <div class="mb-6">
        <label class="block mb-2 font-semibold" for="password">Password</label>
        <input
          class="w-full p-2 border-2 rounded text-sm text-gray-800 border-gray-300 bg-gray-100 focus:border-gray-500 placeholder-gray-600"
          type="text"
          id="password"
          placeholder="●●●●●●●●●●●"
        />
      </div>
      <div>
        <button
          class="px-5 py-2 text-sm font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>
