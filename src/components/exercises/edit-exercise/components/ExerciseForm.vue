<template>
    <form>
        <div class="form-group">
            <label>Name:</label>
            <input type="text" v-model="exerciseDetails.name" class="form-control" placeholder="Example: Close Grip BB Row" required>
            <p class="small">This will be shown where the exercise is used. This is public.</p>
        </div>
        <div class="form-group">
            <label>Notes:</label>
            <input type="text" v-model="exerciseDetails.notes" class="form-control" placeholder="Example: Struggling to complete a set? Try half reps!">
            <p class="small">This will show when viewing the exercise. This is public.</p>
        </div>
        <div class="form-group">
            <label>Description:</label>
            <input type="text" v-model="exerciseDetails.description" class="form-control" placeholder="Description...">
            <p class="small">This is for your own personal reference. This is private.</p>
        </div>
        
    </form>
</template>

<script>
export default {
    name: 'ExerciseForm',
    props: {exerciseDetails: Object}
}
</script>

<style>

</style>