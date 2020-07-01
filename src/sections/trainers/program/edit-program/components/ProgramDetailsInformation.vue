<template>
    <div class="d-flex justify-content-between">
        <div>
            <h6>Title: {{ program.name }}</h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgramDetailsInformation.vue",
        props: {
            program: Object
        }
    }
</script>

<style scoped>

</style>