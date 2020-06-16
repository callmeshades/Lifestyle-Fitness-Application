<template>
    <div class="container">
        All Exercises
        <div>
            <button class="btn btn-sm btn-primary" @click="$router.push({name: 'EditExercise', params: {id: 1}})">New Exercise</button>
        </div>
        <AllExercisesTable :all-exercises="allExercises" />
    </div>
</template>

<script>
    import {getAllExercises} from "../../../utils";
    import AllExercisesTable from "./components/AllExercisesTable";
    export default {
        name: 'AllExercises',
        components: {AllExercisesTable},
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