<template>
  <div>
      <h2 v-if="todos.length >= 1">Finns todos</h2>
      <h2 v-else>Inga todos</h2>
  </div>
</template>
 
<script>
export default {
    props: ['todos']
}
</script>
 
<style scoped>
 
div {
	margin-top: 2rem;
}

</style>