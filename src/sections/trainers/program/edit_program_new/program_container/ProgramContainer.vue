<template>
  <div class="program-container">
    <Board/>
  </div>
</template>

<script>
import Board from "./program_module/Board";
export default {
  name: "ProgramContainer",
  components: {Board}
}
</script>

<style lang="scss" scoped>
.program-container {
  height: 100%;
  width: 100%;
  padding: 20px 10px;
  background: red;
}
</style>