<template>
    <div class="d-flex justify-content-between align-items-center">
        <ProgramTitle
            :program-title="assignment.program.name"
            :weekId="assignment.id"
        />
        <BackToParent
            @goBackHome="goBackHomeEmit"
        />
    </div>
</template>

<script>
    import ProgramTitle from "./ProgramTitle";
    import BackToParent from "./BackToParent";
    export default {
        name: "ProgramHeader",
        components: {BackToParent, ProgramTitle},
        props: {
            assignment: Object
        },
        methods: {
            goBackHomeEmit() {
                this.$emit('goBackHome');
            }
        }
    }
</script>

<style scoped>

</style>