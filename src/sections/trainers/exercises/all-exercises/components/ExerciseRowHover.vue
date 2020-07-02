<template>
  <div class="exercise-row-dropdown">
    <div class="exercise-dropdown-content shadow-sm border">
      {{ exercise.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseRowHover",
  props: {
    exercise: Object
  }
}
</script>

<style lang="scss" scoped>
.exercise-row-dropdown {
  position: relative;
  display: inline-block;

  .exercise-dropdown-content {
    display: block;
    padding: 15px 20px;
    position: absolute;
    background: white;
    min-width: 200px;
    top: 40px;
    right: 50%;
    z-index: 1;
  }
}
</style>