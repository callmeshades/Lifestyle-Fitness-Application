<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <h5>All Exercises</h5>
            <div v-if="!loading">
                <button class="btn btn-sm btn-dark" @click="$router.push({name: 'EditExercise', params: {id: 1}})">
                    <PlusIcon />
                </button>
            </div>
        </div>
        <Loading v-if="loading" />
        <AllExercisesTable v-else :all-exercises="allExercises" />
    </div>
</template>

<script>
    import {getAllExercises} from "../../../../utils";
    import AllExercisesTable from "./components/AllExercisesTable";
    import { PlusIcon } from 'vue-feather-icons';
    import Loading from "../../../../components/Loading";
    export default {
        name: 'AllExercises',
        components: {Loading, AllExercisesTable, PlusIcon},
        data() {
            return {
                allExercises: [],
                loading: false
            }
        },
        methods: {
            parseBlob(exercises) {
                let temp_exercise_list = [];
                exercises.forEach((item) => {
                    temp_exercise_list.push({
                        id: item.id,
                        name: item.name,
                        blob: JSON.parse(item.blob)
                    })
                })
                this.allExercises = temp_exercise_list;
            }
        },
        created() {
            this.loading = true;
            getAllExercises().then(data => {
                if (data.success) {
                    this.parseBlob(data.exercises);
                }
                this.loading = false;
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>