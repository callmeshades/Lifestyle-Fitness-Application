<template>
    <div class="container-fluid">
        Editing Program
        <div class="d-flex">
            <button @click="addModule" class="btn btn-sm btn-primary">Add Module</button>
        </div>
        <div v-for="module in program.modules" :key="module.id">
            <ModuleTable @deleteModule="removeModule" :module="module" />
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>