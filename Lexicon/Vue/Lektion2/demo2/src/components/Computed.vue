<template>
  <div>

	<button class="mt5" @click="a++">Lägg till på A</button>
	<button @click="b++">Lägg till på B</button>
	<p>Nummret är {{ number }}</p>
	<p class="mt5">A = {{ a }}</p>
	<p>B = {{ b }}</p>
	<p>Numret + A = {{ addToA }}</p>
	<p>Numret + B = {{ addToB }}</p>

  </div>
</template>

<script>
export default {
	name: 'Computed',
	data(){
		return {
			number: 30,
			a: 0,
			b: 0,
		}
	},
	methods: {
		// addToA: function() {
		// 	console.log('ökade A');
		// 	return this.a + this.number;
		// },
	
		// addToB: function() {
		// 	console.log('ökade B');
		// 	return this.b + this.number;
		// }
	},
	computed: {

		addToA: function() {
			console.log('ökade A');
			return this.a + this.number;
		},
	
		addToB: function() {
			console.log('ökade B');
			return this.b + this.number;
		}

	}

}

</script>

<style>

</style>