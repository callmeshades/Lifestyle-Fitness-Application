<template>
    <tr>
        <td>{{ exercise.name }}</td>
        <td>{{ exercise.sets }}</td>
        <td>{{ exercise.reps }}</td>
        <td>{{ exercise.note }}</td>
        <td>
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