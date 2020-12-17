<template>
  <div class="container">
       <input type="text" v-model="search" placeholder="Search..." class="my-5 form-control">
       <div v-if="jsonPosts.length">
            <div v-for="post in filteredPosts" :key="post.id" class="card mb-3 p-4">
                 <h2 v-color>{{ post.title | to-upper }}</h2>
                 <p>{{ post.body | shorten }}</p>
            </div>
       </div>
  </div>
</template>

<script>
export default {
     name: 'Posts',
     props: ['jsonPosts'],
     data() {
          return {
               search: ''
          }
     },
     computed: {
          filteredPosts() {
               return this.jsonPosts.filter(post => post.title.match(this.search))
          }
     },
     filters: {
          toUpper(value) {
               return value.toUpperCase()

          },
          shorten(val) {
               return val.slice(0,100) + '...'
          }
     },
     directives: {
          color: {
               bind(el) {
                    el.style.color = '#' + Math.random().toString().slice(2, 8)
               }
          }
     }
}
</script>

<style>

</style>