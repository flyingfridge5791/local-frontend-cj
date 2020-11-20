<template>
  <div>

	<button v-on:click="sum++"> Add </button>
	<button @click="sum--"> Subtract </button>

	<button v-on:click="add()"> Add 5 </button>
	<button @click="subtract()"> Subtract 5</button>

	<div>sum:  {{ sum }}</div>

  </div>
</template>

<script>
export default {
	name: 'Functions',
	data() {
		return {
			sum: 32,

		}
	},
	methods: {
		add(amount = 5){
			this.sum += amount;
		},
		subtract(amount = 5){
			this.sum -= amount;
		}
	}

}
</script>

<style>

</style>