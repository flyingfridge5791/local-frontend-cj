<template>
  <div id="app">
	
	<navbar v-bind:importedActiveBoolean="active" />
	<div class="container">
		<h1 v-if="name =='Joakim'">Hej {{ name }} välkommen tillbaka!</h1>
		<h1 v-else>Trevligt att träffas {{ name }}</h1>

		<todos :todos="todos" />
		<appForm />
		
	</div>
  </div>
</template>

<script>
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import Form from './components/Form';

export default {
  name: 'App',
  components: {
    Navbar,
    Todos,
    appForm : Form,
    
  },
  data(){
	return { 
		name: 'Joakim',
		active: true,
		todos: [
			{ id: 1, title: 'Todo item 1' },
			{ id: 2, title: 'Todo item 2' },
			{ id: 3, title: 'Todo item 3' },
			]
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

.container {
	margin: auto;
	width: 80%;
	padding-top: 2rem;
}

</style>
