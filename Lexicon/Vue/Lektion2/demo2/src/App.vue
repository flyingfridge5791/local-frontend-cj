<template>
	<div id="app">
		
		<navbar />
		
		<div class="container mt5">

			<h2>{{ message }}</h2>

			<functions class="mt5"  />

			<twoWay class="mt5" />

			<computed />

		</div>

		<div class="output"></div>

		<appFooter msg="message" />
		<appFooter v-bind:msg="message" />
		<appFooter :msg="message" />

	</div>
</template>

<script>

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Functions from './components/Functions';
import TwoWay from './components/TwoWay';
import Computed from './components/Computed';



export default {
  name: 'App',
  components: {
	
		Navbar,
		appFooter : Footer,
		Functions,
		TwoWay,
		Computed,
	},
	data(){
		return {
			message: 'Ett meddelande från våran data',
		}
	}
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.output {
	min-height: 500px;
}

.container {

	width: 80%;
	margin: auto;

}

.mt5 {
	margin-top: 15px;
}

</style>
