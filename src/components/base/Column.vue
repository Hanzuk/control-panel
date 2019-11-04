<template functional>
	<div
		class="flex-grow flex-shrink-0 p-3"
		:class="[data.class, data.staticClass]"
	>
		<div class="w-full h-full p-3 rounded-lg shadow-md bg-light-100">
			<slot></slot>
		</div>
	</div>
</template>
