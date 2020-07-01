<template>
    <form @submit="submitForm">
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
        <div v-for="picture in exerciseDetails.images" class="form-group" :key="picture.id">
            <label class="d-flex justify-content-between">
                <span>Picture:</span>
                <span class="delete-link" @click="deletePicture(picture.id)">Delete</span>
            </label>
            <input type="text" class="form-control" placeholder="Image URL..." v-model="picture.url" required>
        </div>
        <div v-if="exerciseDetails.videos.hasVideo" class="form-group">
            <label class="d-flex justify-content-between">
                <span>Video:</span>
                <span class="delete-link" @click="deleteVideo">Delete</span>
            </label>
            <input type="text" class="form-control" placeholder="YouTube Video URL..." v-model="exerciseDetails.videos.url" required>
        </div>
        <div class="form-group">
            <button class="btn btn-dark btn-block">Add Exercise</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ExerciseForm',
    props: {exerciseDetails: Object},
    methods: {
        deletePicture(id) {
            this.$emit('deleteImage', id);
        },
        deleteVideo() {
            this.$emit('deleteVideo');
        },
        submitForm() {
            event.preventDefault();
            this.$emit('postExerciseForm');
        }
    }
}
</script>

<style lang="scss" scoped>
    .delete-link {
        color: indianred;
        cursor: pointer;
        margin-right: 10px;
        &:hover {
            text-decoration: underline;
        }
    }
</style>