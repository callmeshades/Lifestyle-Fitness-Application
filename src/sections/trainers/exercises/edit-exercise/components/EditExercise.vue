<template>
    <div>
        <div v-if="loading">
            <Loading />
        </div>
        <div v-else>
            <div class="d-flex justify-content-start">
                <p class="nav-link-c" @click="addImage">Add Image</p>
                <p class="nav-link-c" @click="addVideo">Add Video</p>
            </div>
            <ExerciseForm :exercise-details="exerciseDetails" @deleteImage="deleteImage" @deleteVideo="deleteVideo" @postExerciseForm="postExerciseForm" />
        </div>
    </div>
</template>

<script>
import ExerciseForm from './ExerciseForm';
import {addNewExercise} from "../../../../../utils";
import Loading from "../../../../../components/Loading";
export default {
    name: 'EditExercise',
    components: {Loading, ExerciseForm},
    props: { exerciseDetails: Object },
    data() {
        return {
            loading: false
        }
    },
    methods: {
        addImage() {
            let imageId = this.exerciseDetails.images.length;
            if (imageId === 0) {
                this.exerciseDetails.images.push({id: 1, url: ''});
            } else {
                let newID = this.exerciseDetails.images[this.exerciseDetails.images.length - 1].id;
                this.exerciseDetails.images.push({
                    id: newID + 1,
                    url: ''
                });
            }
        },
        deleteImage(pId) {
            let imageID = this.exerciseDetails.images.findIndex(item => item.id === pId);
            this.exerciseDetails.images.splice(imageID, 1);
        },
        addVideo() {
            this.exerciseDetails.videos.hasVideo = true;
        },
        deleteVideo() {
            this.exerciseDetails.videos.hasVideo = false;
            this.exerciseDetails.videos.url = '';
        },
        postExerciseForm() {
            this.loading = true;
            addNewExercise(this.exerciseDetails).then(data => {
                if (data.success) {
                    this.$router.push('/all-exercises');
                }
                this.loading = false;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav-link-c {
        color: dodgerblue;
        cursor: pointer;
        margin-right: 10px;
        &:hover {
            text-decoration: underline;
        }
    }
</style>