<template>
	<div>
		<button class="btn btn-primary ">TOGGLE</button>
		<div class="output">
			<h2>EN TEXT</h2>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Example2',
}

</script>

<style scoped>

.btn { 
	background-color: transparent;
	border: none;
	border-radius: 10px;
	padding: 1rem 2rem;
	cursor: pointer;
 }
 .btn-primary {
	background-color: rgb(53, 6, 50) !important;
	color: #fff;
}

</style>