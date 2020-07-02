<template>
    <table class="table mt-4">
        <thead>
            <tr>
                <th>Name</th>
                <th>Notes</th>
                <th>Description</th>
                <th>Image(s)</th>
                <th>Video</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="exercise in allExercises">
                <ExerciseRow :exercise="exercise" :key="exercise.id" />
            </template>
        </tbody>
    </table>
</template>

<script>
  import ExerciseRow from "./ExerciseRow";
  export default {
    name: "AllExercisesTable",
    components: {ExerciseRow},
    props: {
          allExercises: Array
      }
  }
</script>

<style scoped>

</style>