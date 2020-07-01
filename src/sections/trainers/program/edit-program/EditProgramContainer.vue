<template>
    <div class="container-xl">
        <h5>Creating Program</h5>
        <hr>
        <div v-if="isLoading">
            <Loading/>
        </div>
        <div v-else>
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
                    @createProgram="updateProgram"
            />
        </div>
    </div>
</template>

<script>
    import ProgramDetails from "./components/ProgramDetails";
    import ProgramEditor from "./components/ProgramEditor";
    import {getProgramDetails,updateProgram} from '../utils';
    import {getAllExercises,parseExerciseBlob} from "../../../../utils";
    import { v4 as uuidv4 } from 'uuid';
    import Loading from "../../../../components/Loading";

    export default {
        name: "EditProgramContainer.vue",
        components: {Loading, ProgramEditor, ProgramDetails},
        data() {
            return {
                isLoading: true,
                programID: 0,
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
            addExercise(moduleId) {
                const moduleIndex = this.program.modules.findIndex(item => item.id === moduleId);
                // let exercisesLength = this.program.modules[moduleIndex].exercises.length;
                // Grab the exercise and create a new ID for the exercise
                // This is all temporary and will need to be replaced with information from a database in the future
                // TO BE REMOVED AND REPLACED
                let blankExercise = {
                    id: 0,
                    name: '',
                    sets: 0,
                    reps: 0,
                    note: '',
                    exercise_id: 0,
                    userData: {
                        set: 0,
                        reps: 0,
                        weight: 0,
                        rir: '' // Reps in reserve
                    }
                }
                blankExercise.id = uuidv4();
                this.program.modules[moduleIndex].exercises.push(blankExercise);
            },
            deleteExercise(exerciseId, moduleId) {
                const moduleIndex = this.program.modules.findIndex(item => item.id === moduleId);
                const exerciseIndex = this.program.modules[moduleIndex].exercises.findIndex(item => item.id === exerciseId);
                this.program.modules[moduleIndex].exercises.splice(exerciseIndex, 1);
            },
            fetchProgramDetails() {
                this.isLoading = true;
                getProgramDetails(this.$route.params.id).then(data => {
                    if (data.success) {
                        this.programID = data.id;
                        this.program = data.blob;
                    }
                    this.isLoading = false;
                })
            },
            updateProgram() {
                this.isLoading = true;
                updateProgram(this.programID, this.program).then(data => {
                    if (data.success) {
                        this.$router.push({ name: "AllPrograms" })
                    }
                    this.loading = false;
                })
            }
        },
        created() {
            this.fetchProgramDetails();
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