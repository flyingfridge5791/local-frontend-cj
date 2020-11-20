<template>

	<footer>
		
		<h1>{{ msg }}</h1>
		
	</footer>
  
</template>

<script>
export default {
	name: 'Footer',
	props: {
		msg: String,
	}
	// props
}
</script>

<style scoped>

	footer {
		background-color: purple;
		padding: 3rem;
	}

</style>