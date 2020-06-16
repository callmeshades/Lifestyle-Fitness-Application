<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <h5>All Exercises</h5>
            <div>
                <button class="btn btn-sm btn-dark" @click="$router.push({name: 'EditExercise', params: {id: 1}})">
                    <PlusIcon />
                </button>
            </div>
        </div>
        <AllExercisesTable :all-exercises="allExercises" />
    </div>
</template>

<script>
    import {getAllExercises} from "../../../utils";
    import AllExercisesTable from "./components/AllExercisesTable";
    import { PlusIcon } from 'vue-feather-icons';
    export default {
        name: 'AllExercises',
        components: {AllExercisesTable, PlusIcon},
        data() {
            return {
                allExercises: []
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
            getAllExercises().then(data => {
                if (data.success) {
                    this.parseBlob(data.exercises);
                }
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>