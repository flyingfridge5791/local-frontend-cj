<template>
	<div>
		<appNavbar />
		<div class="container">
			<example1 class="mt-2"/>
			<example2 class="mt-2" />
		</div>
	</div>
</template>

<script>
          
import Navbar from './components/Navbar';
import Example1 from './components/Example1';
import Example2 from './components/Example2';

export default {
  name: 'App',
  components: {
	
		appNavbar : Navbar,
		Example1,
		Example2,

	},
};
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.red {
	color: red;
}

.green {
	color: green;
	background-color: blue;
}

.container {
	width: 80%;
	margin: auto;
	margin-top: 3rem;
}

.mt-2 {
	margin-top: 2rem;
}

</style>