<template>
	<div class="form">
		<label for="name">Name:</label>
		<input type="text" id="name">
		<button @click="error = !error">Toggle Error</button>
		<button @click="success = !success">Toggle Success</button>
		<div class="filler"></div>
		<p v-if="error">Någonting blev fel</p>
		<p v-else-if="success">Too right bruf.</p>
		<p v-else>Inget av dem.</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			error: false,
			success: false,
		}
	}

}
</script>

<style scoped>
.form {
	margin-top: 2rem;
}
.filler {
	height: 1rem;
}

</style>