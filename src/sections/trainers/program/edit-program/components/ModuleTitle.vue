<template>
    <div class="m-0 px-3">
        <div class="d-flex justify-content-between m-0 p-2" v-if="isEditable">
            <div class="d-flex">
                <label class="form-inline mr-2">
                    Day: <input type="text" class="form-control form-control-sm" v-model="module.day">
                </label>
                <label class="form-inline">
                    Title: <input type="text" class="form-control form-control-sm" v-model="module.title">
                </label>
            </div>
            <div>
                <span class="editable-title-link" @click="changeEditable">
                    <i class="fas fa-check"/>
                </span>
            </div>
        </div>
        <div class="d-flex justify-content-between m-0 p-2" v-if="!isEditable">
            <div>
                <p class="m-0 font-weight-bold">Day {{ module.day }} | {{ module.title }}</p>
            </div>
            <div>
                <a class="editable-title-link" v-if="!isEditable" @click="changeEditable">
                    <i class="fas fa-pencil-alt"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModuleTitle",
        props: {
            module: Object
        },
        data() {
            return {
                isEditable: false
            }
        },
        methods: {
            changeEditable() {
                this.isEditable = !this.isEditable;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .editable-title-link {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
</style>