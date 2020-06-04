<template>
    <tr>
        <td><input class="form-control" type="text" v-model="exercise.name"></td>
        <td><input class="form-control" type="text" v-model="exercise.sets"></td>
        <td><input class="form-control" type="text" v-model="exercise.reps"></td>
        <td><input class="form-control" type="text" v-model="exercise.note"></td>
        <td>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "RowEditable.vue",
        props: {
            exercise: Object
        }
    }
</script>

<style scoped>

</style>