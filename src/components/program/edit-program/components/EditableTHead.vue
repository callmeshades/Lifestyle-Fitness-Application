<template>
    <tr>
        <th class="px-4 py-2">Exercise</th>
        <th class="px-4 py-2">Sets</th>
        <th class="px-4 py-2">Reps</th>
        <th class="px-4 py-2">Notes</th>
        <th class="px-4 py-2 d-flex">
            <button @click="module.editable = false" class="btn btn-success btn-sm px-4 py-1 mr-2 rounded-0">Save</button>
            <button @click="$emit('addExercise', module.id)" class="btn btn-primary btn-sm px-4 py-1 mr-2 rounded-0">Add</button>
            <button @click="$emit('deleteModule', module.id)" class="btn btn-danger btn-sm px-4 py-1 rounded-0">X</button>
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