<template>
    <div class="table-responsive shadow-sm rounded">
        <table class="table table-hover table-borderless">
            <thead class="bg-dark text-light">
                <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in allClients" :key="client.id" :class="client.active ? '' : 'table-danger'">
                    <td>{{ client.fullName }}</td>
                    <td>{{ client.username }}</td>
                    <td>{{ client.email }}</td>
                    <td>
                        <router-link class="btn btn-sm btn-link"
                            :to="{ name: 'EditClient', params: { id: client.id } }"
                        >
                            <Edit2Icon size="1.25x" />
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { Edit2Icon } from 'vue-feather-icons';
    export default {
        name: "Table",
        props: {
            allClients: Array
        },
        components: { Edit2Icon }
    }
</script>

<style scoped>

</style>