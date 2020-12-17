<template>

     <div>
               <!-- Card -->
          <div class="card card-cascade" v-for="(post, index) in posts" :key="index">

          <!-- Card image -->
               <div class="view view-cascade gradient-card-header blue-gradient text-center">

                    <!-- Title -->
                    <h2 class="card-header-title my-3 white-text out-title">{{ post.title }}</h2>

               </div>

               <!-- Card content -->
               <div class="card-body card-body-cascade">

                    <!-- Text -->
                    
                    <p>Content: </p>
                    <p>{{ post.content }}</p>
                    <p>Categories:</p>
                    <ul class="list-group list-group-horizontal">
                         <li v-for="(cat, index) in post.categories" :key="index"> {{ cat }} </li>
                    </ul>
                    <p>Author: {{ post.author }}</p>

               </div>

          </div>
     </div>
    <!-- Card -->
</template>

<script>
export default {

}
</script>

<style>

</style>