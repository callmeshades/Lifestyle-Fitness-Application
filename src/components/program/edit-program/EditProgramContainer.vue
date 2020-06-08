<template>
    <div class="container-fluid py-4">
        Editing Program
        <button @click="addModule" class="btn btn-info btn-sm ml-2">Add Module</button>
        <div v-for="module in program.modules" :key="module.id">
            <ModuleTable @deleteModule="removeModule" @addExercise="addExercise" @deleteExercise="deleteExercise" :module="module" />
        </div>
    </div>
</template>

<script>
    import ModuleTable from "./components/ModuleTable";
    export default {
        name: "EditProgramContainer.vue",
        components: {ModuleTable},
        data() {
            return {
                program: {
                    modules: []
                }
            }
        },
        methods: {
            addModule() {
                const modulesLength = this.program.modules.length;
                if (modulesLength > 0) {
                    this.program.modules.push({id: this.program.modules[modulesLength - 1].id + 1, exercises: [], editable: true})
                } else {
                    this.program.modules.push({id: 0, exercises: [], editable: true})
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
                    note: ''
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>