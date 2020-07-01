<template>
    <div
        v-if="alertDetails.visible"
        :class="'alert alert-' + alertDetails.class"
        @click="alertDetails.visible = !alertDetails.visible"
    >
        {{ alertDetails.message }}
    </div>
</template>

<script>
    export default {
        name: 'Alert',
        props: {
            alertDetails: Object
        }
    }
</script>
