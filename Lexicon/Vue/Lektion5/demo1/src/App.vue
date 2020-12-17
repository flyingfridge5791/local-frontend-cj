<template>
  <div id="app">
       <navbar />
       <div class="container">
            <user />
       </div>
  </div>
</template>

<script>

import User from './components/User';
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {

       Navbar,
       User

  }
}
</script>

<style>

</style>
