<template>
	<dir class="hidden lg:block relative ml-auto">
		<button
			class="block relative w-8 h-8 rounded-full overflow-hidden border-2 z-30 border-amethyst-200 focus:outline-none focus:border-amethyst-500"
			@click="isOpen = !isOpen"
		>
			<img
				class="w-full h-full object-cover"
				src="https://source.unsplash.com/flEezrkdTEE/1600x900"
				alt="Account image"
			/>
		</button>
		<transition
			enter-active-class="animated fadeIn faster"
			leave-active-class="animated fadeOut faster"
		>
			<button
				v-if="isOpen"
				class="ad-closeable-bg fixed top-0 bottom-0 left-0 right-0 w-full cursor-default z-20"
				@click="isOpen = false"
			></button>
		</transition>
		<transition
			enter-active-class="animated fadeInDown faster"
			leave-active-class="animated fadeOutUp faster"
		>
			<div
				v-if="isOpen"
				class="absolute right-0 w-40 mt-2 py-2 shadow-lg rounded-lg z-30 bg-light-100"
			>
				<a
					href="#"
					class="block px-4 py-2 text-sm text-dark-500 hover:text-light-100 hover:bg-amethyst-300"
					>Account</a
				>
				<a
					href="#"
					class="block px-4 py-2 text-sm text-dark-500 hover:text-light-100 hover:bg-amethyst-300"
					>Log Out</a
				>
			</div>
		</transition>
	</dir>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false
		};
	}
};
</script>

<style lang="scss">
.ad-closeable-bg {
	background-color: rgba(0, 0, 0, 0.233);
}
</style>
