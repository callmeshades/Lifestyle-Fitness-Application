<template>
    <nav class="d-flex justify-content-between bg-light py-2 px-2">
        <Logo />
        <router-link class="btn btn-link btn-sm" to='/logout'>Logout</router-link>
    </nav>
</template>

<script>
    import Logo from "../../../components/components/Logo";
    export default {
        name: "NavBar",
        components: { Logo }
    }
</script>

<style scoped>

</style>