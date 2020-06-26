<template>
    <div class="shadow-sm p-4 border rounded my-4">
        <p class="lead">Assign a Program</p>
        <div v-if="loading">
            <Loading />
        </div>
        <form v-else @submit="(e) => submitNewProgram(e)">
            <div class="form-group">
                <label>Program</label>
                <v-select :getOptionLabel="blob => blob.blob.name" :options="allPrograms" v-model="selectedName" @input="setSelected" />
            </div>
            <div class="form-group">
                <label>Duration</label>
                <input type="number" class="form-control" v-model="duration" min="1" required />
                <small>Assignment duration is in weeks. EX: 2 which would be equal to two weeks</small>
            </div>
            <div class="form-group">
                <button class="btn btn-dark btn-block" type="submit">Assign Program</button>
            </div>
        </form>
    </div>
</template>

<script>
    import vSelect from 'vue-select';
    import {assignNewProgram, getAllPrograms} from "./utils";
    import Loading from "../../components/Loading";

    export default {
        name: "AssignProgram",
        components: {Loading, vSelect },
        props: {
            clientId: Number
        },
        data() {
            return {
                allPrograms: [],
                loading: false,
                selectedName: '',
                selectedProgramId: 0,
                duration: 0
            }
        },
        methods: {
            setSelected(value) {
                this.selectedProgramId = value.id;
            },
            submitNewProgram(event) {
                event.preventDefault();
                this.loading = true;
                assignNewProgram(this.clientId, this.selectedProgramId, this.duration).then(data => {
                    if (data.success) {
                        this.$router.push({ name: 'AllClients' });
                    }
                    this.loading = false;
                })
            }
        },
        created() {
            this.loading = true;
            getAllPrograms().then(data => {
                if (data.success) {
                    this.allPrograms = data.programs;
                }
                this.loading = false;
            })
        }
    }
</script>

<style scoped>

</style>