<template>
    <div class="container">
        <h5>Editing Exercise</h5>
        <hr>
        <EditExercise
            :exercise-details="exerciseDetails"
        />
    </div>
</template>

<script>
import EditExercise from './components/EditExercise';
export default {
    name: 'EditExerciseContainer',
    components: {EditExercise},
    data() {
        return {
            exerciseDetails: {
                name: '',
                notes: '',
                description: '',
                images: [],
                videos: {
                    hasVideo: false,
                    url: ''
                }
            }
        }
    }
}
</script>

<style>

</style>