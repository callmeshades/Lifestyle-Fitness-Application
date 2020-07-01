<template>
    <tr class="tr-long">
        <td>{{ exercise.name }}</td>
        <td>{{ exercise.sets }}</td>
        <td>{{ exercise.reps }}</td>
        <td>{{ exercise.note }}</td>
        <td>
            <input type="number" min="0" v-model="exercise.userData.set">
        </td>
        <td>
            <input type="number" min="0" v-model="exercise.userData.reps">
        </td>
        <td>
            <input type="text" v-model="exercise.userData.rir">
        </td>
        <td>
            <input type="text" v-model="exercise.userData.weight">
        </td>
    </tr>
</template>

<script>
    export default {
        name: "ExerciseRow",
        props: {
            exercise: Object
        }
    }
</script>

<style lang="scss" scoped>
    .tr-long {

        td {
            white-space: nowrap;
        }

    }
</style>