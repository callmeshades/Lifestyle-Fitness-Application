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
            <tr v-for="exercise in allExercises" :key="exercise.id">
                <td>{{ exercise.name }}</td>
                <td>{{ exercise.blob.notes }}</td>
                <td>{{ exercise.blob.description }}</td>
                <td>{{ exercise.blob.images.length > 0 ? 'Yes' : 'No' }}</td>
                <td>{{ exercise.blob.videos.hasVideo > 0 ? 'Yes' : 'No' }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "AllExercisesTable",
        props: {
            allExercises: Array
        }
    }
</script>

<style scoped>

</style>