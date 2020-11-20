<template>
  <div>

            <appNavbar></appNavbar>
            <appHero />
            <appFooter />
            
      
  

  </div> <!-- KAN EJ HA SYSKONELEMENT, BARA ETT MAIN PARENT ELEMENT INOM TEMPLATE -->
</template>

<script>

import navbar from './components/navigation/Navbar';
import footer from './components/navigation/Footer';
import hero from './components/Hero';

export default {
  name: 'App',
  components: {

    appNavbar: navbar,
    appFooter: footer,
    appHero: hero,
  }
}
</script>

<style>



</style>
