<template>
    <nav class="d-flex justify-content-between bg-light py-2 px-2">
        <Logo />
        <Loading v-if="loading" />
        <span v-else class="btn btn-link btn-sm" @click="logoutSpinner">Logout</span>
    </nav>
</template>

<script>
    import Logo from "../../../../components/Logo";
    import Loading from "../../../../components/Loading";
    export default {
        name: "NavBar",
        components: { Logo, Loading },
        data() {
            return {
                loading: false
            }
        },
        methods: {
            logoutSpinner() {
                this.loading = true;
                this.$router.push('/logout');
            }
        }
    }
</script>

<style scoped>

</style>