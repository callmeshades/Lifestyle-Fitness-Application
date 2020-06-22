<template>
    <div class="table-responsive shadow-sm rounded">
        <table class="table table-hover table-borderless">
            <thead class="bg-dark text-light">
                <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in allClients" :key="client.id" :class="client.active ? '' : 'table-danger'">
                    <td>{{ client.fullName }}</td>
                    <td>{{ client.username }}</td>
                    <td>{{ client.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Table",
        props: {
            allClients: Array
        }
    }
</script>

<style scoped>

</style>