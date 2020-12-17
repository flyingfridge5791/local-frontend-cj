<template>
	<div id="app">
		<names :exportNames="names" />
		<loop :exportNames="names" />
		<users :exportUsers="users" />
		<objects :exportUsers="users" />

	</div>
</template>

<script>

import Names from './components/Names';
import Loop from './components/Loop';
import Users from './components/Users';
import Objects from './components/Objects';


export default {
	name: 'App',
	components: {
		Names,
		Loop,
		Users,
		Objects,
	},
	data() {
		return {
			names: [ 'Joakim', 'Jeanette', 'Kim', 'Johan', 'Arselete',],
			users: [ 
				{ id: 1, name: 'Joakim', age: 33 },
				{ id: 2, name: 'Joakim', age: 33 },
				{ id: 3, name: 'Joakim', age: 33 },
			]
		}
	},


}

</script>

<style>


</style>
