<template>
    <div class="container-xl">
        <div class="pb-3">
            <h5>Editing Client: {{ clientData.fullName }}</h5>
        </div>
        <div v-if="loading">
            <Loading />
        </div>
        <div v-else class="shadow-sm border p-4 rounded">
            <form @submit="(e) => e.preventDefault()">
                <div class="form-group">
                    <label for="firstName">Full Name</label>
                    <input type="text" id="firstName" class="form-control mr-2" v-model="clientData.firstName" readonly />
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" class="form-control mr-2" v-model="clientData.lastName" readonly />
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" class="form-control mr-2" v-model="clientData.username" readonly>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control mr-2" v-model="clientData.email" readonly />
                </div>
                <div class="form-group">
                    <label for="assignedProgram">Assigned Program</label>
                    <input type="text" id="assignedProgram" class="form-control mr-2" v-model="assignmentName" readonly />
                </div>
            </form>
        </div>
        <AssignProgram v-if="clientData.id" :clientId="clientData.id" />
    </div>
</template>

<script>
    import { getClientById } from "./utils";
    import Loading from "../../../../components/Loading";
    import AssignProgram from "./AssignProgram";


    export default {
        name: "EditClient",
        components: {AssignProgram, Loading},
        data() {
            return {
                clientData: {},
                assignmentName: '',
                loading: false
            }
        },
        created() {
            this.loading = true;
            getClientById(this.$route.params.id).then(data => {
                if (data.success) {
                    this.clientData = data.client;
                    this.assignmentName = data.assignmentName;
                } else {
                    // This needs to be implemented
                }
                this.loading = false;
            })
        }
    }
</script>

<style scoped>

</style>