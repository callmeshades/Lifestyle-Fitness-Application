<template>
    <tr>
        <th class="px-4 py-2">Exercise</th>
        <th class="px-4 py-2">Sets</th>
        <th class="px-4 py-2">Reps</th>
        <th class="px-4 py-2">Notes</th>
        <th class="px-4 py-2 d-flex">
            <button @click="module.editable = false" class="btn btn-link btn-sm px-4 py-1 mr-2 rounded-0"><i class="fas fa-check"/></button>
            <button @click="$emit('addExercise', module.id)" class="btn btn-link btn-sm px-4 py-1 mr-2 rounded-0"><i class="fas fa-plus"/></button>
            <button @click="$emit('deleteModule', module.id)" class="btn btn-link btn-sm px-4 py-1 rounded-0"><i class="fas fa-window-close"/></button>
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