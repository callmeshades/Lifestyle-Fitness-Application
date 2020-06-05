<template>
    <tr>
        <td class="overflow-x-auto border px-4 py-2">{{ exercise.name }}</td>
        <td class="overflow-hidden w-24 border px-4 py-2">{{ exercise.sets }}</td>
        <td class="overflow-hidden w-24 border px-4 py-2">{{ exercise.reps }}</td>
        <td class="overflow-x-auto border px-4 py-2">{{ exercise.note }}</td>
        <td class="border px-4 py-2">
        </td>
    </tr>
</template>

<script>
    export default {
        name: "RowView",
        props: { exercise: Object }
    }
</script>

<style scoped>

</style>