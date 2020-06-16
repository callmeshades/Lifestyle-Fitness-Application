<template>
    <div>
        <Navbar />
        <router-view />
    </div>
</template>

<script>
    import Navbar from './Navbar';
    export default {
        name: 'DashboardContainer',
        components: { Navbar }
    }
</script>

<style>

</style>