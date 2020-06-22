<template>
    <header class="navbar navbar-expand navbar-light bg-white border-bottom">
        <nav class="container-xl flex-wrap flex-md-nowrap">
            <span class="navbar-brand">
                <Logo />
                Trainers
            </span>
        </nav>
    </header>
</template>

<script>
    import Logo from "../../Logo";
    export default {
        name: "TopNavbar",
        components: { Logo }
    }
</script>

<style>

</style>