<template>
	<div>
		<h2 v-bind:class="{ pink : true }"> EN TEXT </h2>
		<h2 :class="{ green : available }"> EN ANDRA TEXT </h2>
		<h2 class="red"> EN ANDRA TEXT </h2>
	</div>
</template>

<script>
export default {

	name: 'Example1',

	data() {
		return {
			available: true,
		}
	}
}
</script>

<style>

.pink {
	color: pink;
}

</style>