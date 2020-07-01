<template>
    <li class="d-flex justify-content-between list-custom">
        <span>
            <p v-if="item.completed">
                <del><b>{{ item.id }}</b> | {{ item.program.name }}</del>
            </p>
            <p v-else>
                <b>Week {{ item.id }}</b> | {{ item.program.name }}
            </p>
        </span>
        <span v-if="!item.completed">
            <button class="btn btn-link btn-sm"
                @click="() => emitChildFunction(item.id)"
            >
                <ChevronRightIcon />
            </button>
        </span>
    </li>
</template>

<script>
    import {ChevronRightIcon} from 'vue-feather-icons';

    export default {
        name: "ListItem",
        components: { ChevronRightIcon },
        props: { item: Object },
        methods: {
            emitChildFunction(itemId) {
                this.$emit('viewWeek', itemId);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-custom {
        list-style: none;
        padding: 18px 0;
        align-items: center;

        &:not(:last-child) {
            border-bottom: 1px solid #e3e3e3;
        }

        p {
            font-size: 17px;
        }

    }
</style>