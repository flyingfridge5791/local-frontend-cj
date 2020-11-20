<template>
  <div id="app">
    
	<appNavbar />
    
  </div>
</template>

<script>

import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
	
		appNavbar : Navbar

	}
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

.container {
	width: 80%;
	margin: auto;
};

.mt-2 {
	margin-top: 2rem;
};

.green {
	color: green;
	background-color: green;
};



</style>