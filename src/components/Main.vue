<template>
	<div class="main p-3 overflow-y-auto">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'app-main'
};
</script>

<style>
.main {
	grid-area: main;
}
</style>
