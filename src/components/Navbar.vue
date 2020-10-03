<template>
  <section class="hero has-background-image is-fullheight" :style="style">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <p class="title">CosmoSpirit</p>
          </router-link>
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item" to="/">
              Home
            </router-link>
            <router-link class="navbar-item" to="/about">
              About
            </router-link>
            <router-link class="navbar-item" to="/instructions">
              Instructions
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        {{ title }}
      </p>
      <p class="subtitle">
        {{ subTitle }}
      </p>
    </div>
  </div>

</section>
</template>
<script>
export default {
  props: ['bgImage', 'title', 'subTitle'],
  computed: {
    style() {
      return 'background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + this.bgImage + ') right bottom; background-size: cover;';
    }  
  } 
}
</script>
<style lang="scss" scoped>
p, .navbar-item {
  color: white;  
}
</style>