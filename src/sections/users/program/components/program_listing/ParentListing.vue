<template>
    <ul class="list-group">
        <ListItem
            v-for="week in assignment"
            :key="week.id"
            :item="week"
            @viewWeek="viewWeekEmit"
        />
    </ul>
</template>

<script>
    import ListItem from "./ListItem";
    export default {
        name: "ParentListing",
        components: {ListItem},
        props: {
            assignment: Array
        },
        methods: {
            viewWeekEmit(weekId) {
                this.$emit('viewWeek', weekId);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>