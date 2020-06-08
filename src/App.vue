<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/components/Navbar";
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style lang="scss">

</style>
