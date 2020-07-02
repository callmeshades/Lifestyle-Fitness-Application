<template>
    <div>

        <ProgramHeader
                @goBackHome="goBackHomeEmit"
                :assignment="assignment"
        />
        <hr/>

        <div v-for="module in assignment.program.modules" :key="module.id">
            <ProgramModule
                    :module="module"
                    @saveAssignment="saveAssignmentEmit"
            />
        </div>

    </div>
</template>

<script>
    import ProgramHeader from "./components/ProgramHeader";
    import ProgramModule from "./components/program_modules/ProgramModule";
    export default {
        name: "ProgramView",
        components: {ProgramModule, ProgramHeader},
        props: {
            assignment: Object
        },
        methods: {
            goBackHomeEmit() {
                this.$emit('goBackHome');
            },
            saveAssignmentEmit() {
                this.$emit('saveAssignment');
            }
        }
    }
</script>

<style scoped>

</style>