<template>
    <div class="container">
        <h5>Creating Program</h5>
        <hr>
        <ProgramDetails v-if="details" :program="program" @nextSection="details = !details" />
        <ProgramEditor
            v-else
            :program="program"
            :all-exercises="allExercises"
            @changeSection="details = !details"
            @addModule="addModule"
            @removeModule="removeModule"
            @addExercise="addExercise"
            @deleteExercise="deleteExercise"
            @createProgram="addProgram"
        />
    </div>
</template>

<script>
    import ProgramDetails from "./components/ProgramDetails";
    import ProgramEditor from "./components/ProgramEditor";
    import {addNewProgram} from '../utils';
    import {getAllExercises,parseExerciseBlob} from "../../../utils";

    export default {
        name: "EditProgramContainer.vue",
        components: {ProgramEditor, ProgramDetails},
        data() {
            return {
                program: {
                    name: '',
                    description: '',
                    requiresGym: false,
                    requiresEquipment: false,
                    modules: [],
                    notes: []
                },
                details: true,
                allExercises: []
            }
        },
        methods: {
            addModule() {
                const modulesLength = this.program.modules.length;
                if (modulesLength > 0) {
                    this.program.modules.push({id: this.program.modules[modulesLength - 1].id + 1, exercises: [], day: 1, title: '', editable: true})
                } else {
                    this.program.modules.push({id: 0, exercises: [], day: 1, title: '', editable: true})
                }

            },
            removeModule(id) {
                this.program.modules.forEach((item, index) => {
                    if (item.id === id) {
                        this.program.modules.splice(index, 1);
                    }
                });
            },
            getModuleIndexById(moduleId) {
                this.program.modules.forEach((item, index) => {
                    if (item.id === moduleId) {
                        return index;
                    }
                });
            },
            addExercise(moduleId) {
                const moduleIndex = this.program.modules.findIndex(item => item.id === moduleId);
                let exercisesLength = this.program.modules[moduleIndex].exercises.length;
                // Grab the exercise and create a new ID for the exercise
                // This is all temporary and will need to be replaced with information from a database in the future
                // TO BE REMOVED AND REPLACED
                let blankExercise = {
                    id: 0,
                    name: '',
                    sets: 0,
                    reps: 0,
                    note: '',
                    exercise_id: 0
                }
                if (exercisesLength > 0) {
                    const newExericseId = this.program.modules[moduleIndex].exercises[exercisesLength - 1].id + 1;
                    blankExercise.id = newExericseId;
                } else {
                    blankExercise.id = exercisesLength + 1;
                }
                this.program.modules[moduleIndex].exercises.push(blankExercise);
            },
            deleteExercise(exerciseId, moduleId) {
                const moduleIndex = this.program.modules.findIndex(item => item.id === moduleId);
                const exerciseIndex = this.program.modules[moduleIndex].exercises.findIndex(item => item.id === exerciseId);
                this.program.modules[moduleIndex].exercises.splice(exerciseIndex, 1);
            },
            addProgram() {
                addNewProgram(this.program).then(data => {
                    if (data.success) {
                        this.$router.push({name: 'AllPrograms'})
                    }
                });
            }
        },
        created() {
            getAllExercises().then(data => {
                if (data.success) {
                    this.allExercises = parseExerciseBlob(data.exercises);
                }
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>