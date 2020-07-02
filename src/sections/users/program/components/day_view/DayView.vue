<template>
  <div class="">
    <ProgramHeader
        @goBackHome="goBackHomeEmit"
        :assignment="assignment"
    />
    <hr/>
    <template>
      <DayItem/>
      <DayItem/>
      <DayItem/>
    </template>
  </div>
</template>

<script>
import DayItem from "./DayItem";
import ProgramHeader from "../module_view/components/ProgramHeader";
export default {
  name: "WeekView",
  props: {
    assignment: Object
  },
  components: {
    DayItem,
    ProgramHeader
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