<template>
  <div class="exercise-container">
    <List/>
  </div>
</template>

<script>
import List from "./List";
export default {
  name: "ExercisesContainer",
  components: {List}
}
</script>

<style lang="scss" scoped>
.exercise-container {
  min-width: 280px;
}
</style>