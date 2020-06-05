<template>
    <tr>
        <th class="px-4 py-2">Exercise</th>
        <th class="w-24 px-4 py-2">Sets</th>
        <th class="w-24 px-4 py-2">Reps</th>
        <th class="px-4 py-2">Notes</th>
        <th class="px-4 py-2">
            <button @click="module.editable = false" class="bg-green-400 text-white px-4 py-1 mr-2">Save</button>
            <button @click="$emit('addExercise', module.id)" class="bg-blue-500 text-white px-4 py-1 mr-2">Add</button>
            <button @click="$emit('deleteModule', module.id)" class="bg-red-700 text-white px-4 py-1">X</button>
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