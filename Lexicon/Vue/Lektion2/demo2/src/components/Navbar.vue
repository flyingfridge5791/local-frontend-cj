<template>
	<nav>
		<h1>Hello World</h1>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
}
</script>

<style scoped>
nav {
	background-color: purple;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	padding: 1rem;
	align-items: center;
}

ul{
	display: flex;
	list-style: none;
	column-gap: 1rem;
}

a {
	color: black;
	text-decoration: 1rem;
	padding: 21% 2rem;
}

a:hover {
	background: rgba(0, 0, 0, 0.13)
}

</style>