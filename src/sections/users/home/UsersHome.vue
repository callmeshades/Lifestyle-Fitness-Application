<template>
    <div>
        <h4>Welcome, {{ this.$attrs.userData.fullName }}</h4>
        <ProgramContainer />
    </div>
</template>

<script>
    import ProgramContainer from "../program/ProgramContainer";
    export default {
        name: "UsersHome",
        components: {ProgramContainer}
    }
</script>

<style scoped>

</style>