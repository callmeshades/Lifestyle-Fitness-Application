<template>
    <tr>
        <th>Exercise</th>
        <th>Sets</th>
        <th>Reps</th>
        <th>Notes</th>
        <th>
            <button @click="$emit('deleteModule', moduleId)" class="btn btn-danger btn-sm">X</button>
        </th>
    </tr>
</template>

<script>
    export default {
        name: "EditableTHead.vue",
        props: {
            moduleId: Number
        }
    }
</script>

<style scoped>

</style>