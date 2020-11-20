<template>
	<div>
	
		<navbar />
		<signIn />

	</div> 
</template>

<script>

import Navbar from './components/Nav'
import SignIn from './components/SignIn'

export default {
  name: 'App',
  components: {

		Navbar : Navbar,
		SignIn,
	}
}
</script>

<style>

</style>
