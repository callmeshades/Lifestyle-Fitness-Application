<template>
    <tr>
        <th>Exercise</th>
        <th>Sets</th>
        <th>Reps</th>
        <th>Notes</th>
        <th>
            <button @click="module.editable = false" class="btn btn-success btn-sm mr-2">Save</button>
            <button @click="$emit('addExercise', module.id)" class="btn btn-primary btn-sm mr-2">Add</button>
            <button @click="$emit('deleteModule', module.id)" class="btn btn-danger btn-sm">X</button>
        </th>
    </tr>
</template>

<script>
    export default {
        name: "EditableTHead.vue",
        props: {
            module: Object
        }
    }
</script>

<style scoped>

</style>