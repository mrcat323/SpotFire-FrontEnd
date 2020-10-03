<template>
  <div class="container pt-30">
    <h3 class="title">Who are we ?</h3>  
    <img class="centered-image" alt="Cosmo Spirit LOGO" :src="logo" width="300" height="300" />  
    <p class="subtitle-1">We are <span class="font-weight-bold">The Cosmo Spirit</span> and we make the world better providing spotting wildfires with our technology</p>
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