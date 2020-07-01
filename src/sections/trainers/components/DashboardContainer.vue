<template>
    <div>
        <TopNavbar />
        <BottomNavbar />
        <router-view  />
    </div>
</template>

<script>
    import TopNavbar from "./navbar/top-navbar/TopNavbar";
    import BottomNavbar from "./navbar/bottom-navbar/BottomNavbar";

    export default {
        name: 'DashboardContainer',
        props: { alert: Object },
        components: {BottomNavbar, TopNavbar }
    }
</script>

<style>

</style>