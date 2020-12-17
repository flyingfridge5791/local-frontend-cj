<template>
  <!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark primary-color">

  <!-- Navbar brand -->
  <router-link class="navbar-brand" to="/">Navbar</router-link>

  <!-- Collapse button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="basicExampleNav">

    <!-- Links -->
    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/posts" class="nav-link">Posts</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/customers" class="nav-link">Customers</router-link>
      </li>

    </ul>
    <!-- Links -->

    <form class="form-inline">
      <div class="md-form my-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
      </div>
    </form>
  </div>
  <!-- Collapsible content -->

</nav>
<!--/.Navbar-->
</template>

<script>
export default {

}
</script>

<style>

</style>