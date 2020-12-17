<template>
	<nav>
		<h1>Hello World!</h1>
		<ul v-if="importedActiveBoolean">
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
		</ul>
		<ul v-else>
			<li><a href="#">Register</a></li>
			<li><a href="#">Login</a></li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ['importedActiveBoolean']
}
</script>

<style scoped>

nav {
	background-color:rgb(64, 105, 23);
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
}
h1 {
	font-weight: bold;
	font-family: bahnschrift;
	text-shadow: -1px 0px 1px black, 1px 0px 1px black, 0px 1px 1px black, 0px -1px 1px black;
}
ul {
	list-style: none;
	display: flex;
}
a {
	color: white;
	text-decoration: none;
	padding: 1.5rem;
	display: inline-block;
}
a:hover {
	background: rgba(0,0,0, 0.25)
}

</style>