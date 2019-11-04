<template functional>
	<svg :class="[data.class, data.staticClass]">
		<use :xlink:href="'/icons-sprite.svg#' + props.name" />
	</svg>
</template>

<script>
export default {
	props: {
		name: String
	}
};
</script>
