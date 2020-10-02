<template>
  <div class="about">
    <h3 class="title">Who are we ?</h3>  
    <v-spacer></v-spacer>
    <v-img class="centered-image" alt="Cosmo Spirit LOGO" :lazy-src="logo" :src="logo" max-width="300" max-height="300" />  
    <p class="subtitle-1">We are <span class="font-weight-bold">Cosmo Spirit</span> the  and we make the world better providing spotting wildfires with our technology</p>

  </div>
</template>
<script>
export default {
  computed: {
    logo() {
      return require('../assets/logo.png')  
    }
  }
}
</script>
<style lang="scss" scoped>

.centered-image {
  margin: 0 auto;
}

</style>