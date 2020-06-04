<template>
    <tr>
        <th>Exercise</th>
        <th>Sets</th>
        <th>Reps</th>
        <th>Notes</th>
        <th>
            <button @click="module.editable = true" class="btn btn-success btn-sm">Edit</button>
        </th>
    </tr>
</template>

<script>
    export default {
        name: "ViewTHead.vue",
        props: {module: Object}
    }
</script>

<style scoped>

</style>