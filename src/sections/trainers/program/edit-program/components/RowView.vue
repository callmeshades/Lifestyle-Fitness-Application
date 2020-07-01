<template>
    <tr>
        <td class="px-4 py-2">{{ exercise.name }}</td>
        <td class="px-4 py-2">{{ exercise.sets }}</td>
        <td class="px-4 py-2">{{ exercise.reps }}</td>
        <td class="px-4 py-2">{{ exercise.note }}</td>
        <td class="px-4 py-2">
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