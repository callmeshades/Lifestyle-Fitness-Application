<template>
    <div class="container-fluid">
        Editing Program
        <div class="d-flex">
            <button @click="addModule" class="btn btn-sm btn-primary">Add Module</button>
        </div>
        <div v-for="module in program.modules" :key="module.id">
            <ModuleTable @deleteModule="removeModule" @addExercise="addExercise" :module="module" />
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
                let blankExercise = {
                    id: exercisesLength + 1,
                    name: '',
                    sets: 0,
                    reps: 0,
                    note: ''
                }
                this.program.modules[moduleIndex].exercises.push(blankExercise);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>