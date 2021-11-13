<template>
  <Navbar/>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import './assets/scss/all.scss';
</style>
