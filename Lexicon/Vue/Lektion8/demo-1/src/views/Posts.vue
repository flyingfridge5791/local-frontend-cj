<template>
  <div>
    <h1 class="text-center mt-5">My Posts</h1>
    <div class="container mt-5">
      <router-link :to="'/posts/details/' + post.id" v-for="post in posts" :key="post.id">
        <div class="border rounded mb-3 hoverable p-3 text-dark">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body | shorten }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['getPosts'])
  },
  computed: {
    ...mapGetters(['posts'])
  },
  created() {
    this.getPosts()
  },
  filters: {
    shorten(val) {
      return val.slice(0,100) + '...'
    }
  }
}
</script>

<style scoped>
  .hoverable {
    cursor: pointer;
  }
</style>