<template>
  <div id="app" class="m-0 p-0">
    <router-view :alert="alert" />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        alert: {
          class: '',
          msg: '',
          visible: false
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
