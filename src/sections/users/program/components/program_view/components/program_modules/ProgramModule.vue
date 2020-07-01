<template>
    <div class="shadow-sm border p-4 mb-5">

        <div class="d-flex justify-content-between align-items-center">
            <p class="font-weight-bold">Day: {{ module.day }} | Title: {{ module.title }}</p>
            <button class="btn btn-sm btn-success" @click="saveAssignmentEmit">Save</button>
        </div>

        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <td class="tr-long">Exercise Name</td>
                        <td>Sets</td>
                        <td>Reps</td>
                        <td class="tr-long">Notes</td>
                        <td>Completed Sets</td>
                        <td>Completed Reps</td>
                        <td>RIR (Reps-in-reserve)</td>
                        <td>Weight</td>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="exercise in module.exercises">
                        <ExerciseRow :exercise="exercise" :key="exercise.id" />
                    </template>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import ExerciseRow from "./components/ExerciseRow";
    export default {
        name: "ProgramModule",
        components: {ExerciseRow},
        props: {
            module: Object
        },
        methods: {
            saveAssignmentEmit() {
                this.$emit('saveAssignment');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tr-long {
        white-space: nowrap;
    }
</style>