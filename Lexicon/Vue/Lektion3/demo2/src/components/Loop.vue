<template>
  <div>
	<p v-for="(name, index) in exportNames" v-bind:key="index"> {{ index }} {{ name }} </p>
  </div>
</template>

<script>

// names.forEach(name => body.innerHTML += <p>name</p>)

export default {
	props: ['exportNames']
}
</script>
	

<style>

</style>