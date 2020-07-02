<template>
    <header class="navbar navbar-expand navbar-light bg-white border-bottom">
        <nav class="container-xl flex-wrap">
            <span class="navbar-brand">
                <Logo />
                Trainers
            </span>
          <span>
            <Loading v-if="loading" />
            <button class="btn btn-sm btn-link" @click="startLogout" v-else>Logout</button>
          </span>
        </nav>
    </header>
</template>

<script>
    import Logo from "../../../../../components/Logo";
    import Loading from "../../../../../components/Loading";
    export default {
        name: "TopNavbar",
        components: {Loading, Logo },
        data() {
          return {
            loading: false
          }
        },
        methods: {
          startLogout() {
            this.loading = true;
            this.$router.push('logout');
          }
        }
    }
</script>

<style>

</style>