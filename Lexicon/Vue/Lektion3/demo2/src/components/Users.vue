<template>
	<div v-if="exportUsers.length">
		<div v-for="user in exportUsers" :key="user.id">
			<h3>{{ user.name }}</h3>
			<p>{{ user.age }}</p>
		</div>
		
	</div>
</template>

<script>
export default {
	props: ['exportUsers']

}
</script>

<style>

</style>