<template>
    <div>
        {{exerciseDetails.name}}
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
                videos: []
            }
        }
    }
}
</script>

<style>

</style>