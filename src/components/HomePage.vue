<template>
<div>
  <nav-bar></nav-bar>
<router-view :key="$route.fullPath"></router-view>
</div>

</template>

<script>
import NavBar from './NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
