<template>
    <div>
        <h5>Week {{ weekId }} | {{ programTitle }}</h5>
    </div>
</template>

<script>
    export default {
        name: "ProgramTitle",
        props: { programTitle: String, weekId: Number }
    }
</script>

<style scoped>

</style>