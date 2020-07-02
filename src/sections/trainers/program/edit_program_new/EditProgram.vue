<template>
  <div class="edit-program-container">
    <ExercisesContainer/>
    <ProgramContainer/>
  </div>
</template>

<script>
import ProgramContainer from "./program_container/ProgramContainer";
import ExercisesContainer from "./exercises_container/ExercisesContainer";
export default {
name: "EditProgram",
  components: {ExercisesContainer, ProgramContainer}
}
</script>

<style lang="scss" scoped>
.edit-program-container {
  display: flex;
  height: 100vh;
}
</style>