<template>
  <div class="exercises-list">
    <ExerciseCard/>
  </div>
</template>

<script>
import ExerciseCard from "./ExerciseCard";
export default {
name: "List",
  components: {ExerciseCard}
}
</script>

<style scoped>
.exercises-list {
  background: #e3e3e3;
  height: 100%;
  padding: 20px 10px;
}
</style>