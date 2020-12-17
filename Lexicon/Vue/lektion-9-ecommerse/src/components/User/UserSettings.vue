<template>
  <div>
    <router-link to="/">Min Sida</router-link>
    <div class="dropdown-divider"></div>
    <router-link to="/login">
      <span class="custom-drop" @click="logout">Logout</span>
    </router-link>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UserSettings',
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style>

</style>