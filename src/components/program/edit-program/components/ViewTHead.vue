<template>
    <tr>
        <th class="px-4 py-2">Exercise</th>
        <th class="w-24 px-4 py-2">Sets</th>
        <th class="w-24 px-4 py-2">Reps</th>
        <th class="px-4 py-2">Notes</th>
        <th class="w-64 px-4 py-2 text-left">
            <button @click="module.editable = true" class="bg-green-400 text-white px-3 py-1">Edit</button>
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