<template>
    <div class="container">
        <div class="row">
            <div class="col-md">
                <LoginContainer/>
            </div>
        </div>
    </div>
</template>

<script>
import LoginContainer from "@/components/login/LoginContainer";
export default {
    name: 'Login',
    components: {LoginContainer}
}
</script>

<style lang="scss" scoped>
.row {
    height: 100vh;
    justify-content: center;
    align-items: center;
}
</style>
