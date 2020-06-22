<template>
    <div class="container-xl">
        <Loading v-if="loading" />
        <div v-else>
            <Table :all-clients="allClients" />
        </div>
    </div>
</template>

<script>
    import { getAllClients } from './utils';
    import Loading from "../../components/Loading";
    import Table from "./components/Table";
    export default {
        name: "AllClients",
        components: {Table, Loading},
        data() {
            return {
                allClients: [],
                loading: false
            }
        },
        created() {
            this.loading = true;
            getAllClients().then(data => {
                if (data.success) {
                    this.allClients = data.clients;
                }
                this.loading = false;
            })
        }
    }
</script>

<style scoped>

</style>