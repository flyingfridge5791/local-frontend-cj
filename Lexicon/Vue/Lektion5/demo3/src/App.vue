<template>
  <div>
    <posts v-bind:jsonPosts="jsonPosts" />
  </div>
</template>

<script>
import axios from 'axios'
import Posts from './components/Posts'

export default {
  name: 'App',
  components: {
       Posts
  },
  data() {
       return {
          jsonPosts: [  ]
     }
  },
  methods: {
     //   getPosts() {
     //        axios.get(' https://jsonplaceholder.typicode.com/posts')
     //        .then(res => this.posts = res.data)
     //   }  
     async getPosts() {
          const res = await axios.get(' https://jsonplaceholder.typicode.com/posts ')
          this.jsonPosts = res.data
     }
  },
  created() {
       this.getPosts()
  }
}

</script>

<style>

</style>
