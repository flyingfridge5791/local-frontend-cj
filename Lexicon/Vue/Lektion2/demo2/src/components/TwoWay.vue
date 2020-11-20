<template>
	<div>
		<input type="text" v-model="text">
		<p>{{ text }}</p>
	</div>
</template>

<script>
export default {
	name: 'TwoWay',
	data(){
		return{
			text: 'hej hej',
		}	
	}
}
</script>

<style>

</style>