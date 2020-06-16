<template>
    <tr>
        <th class="px-4 py-2">Exercise</th>
        <th class="px-4 py-2">Sets</th>
        <th class="px-4 py-2">Reps</th>
        <th class="px-4 py-2">Notes</th>
        <th class="w-64 px-4 py-2 text-left">
            <button @click="module.editable = true" class="btn btn-link btn-sm">
                <i class="fas fa-pencil-alt"></i>
            </button>
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