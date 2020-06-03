<template>
    <div>
        <div class="d-flex">
            <button class="btn btn-outline-secondary btn-sm">Add Notes</button>
            <button class="btn btn-outline-secondary btn-sm">Add Notes</button>
        </div>
        <ExerciseForm :exercise-details="exerciseDetails" />
    </div>
</template>

<script>
import ExerciseForm from './ExerciseForm';
export default {
    name: 'EditExercise',
    components: {ExerciseForm},
    props: { exerciseDetails: Object }
}
</script>

<style>

</style>