<template>
    <div class="mt-4 p-4">
        <div v-if="loading">
            <Loading/>
        </div>
        <div v-else>
            <div v-if="!hasAssignment">
                <NoProgram/>
            </div>
            <div v-else>
                <ParentListing
                        v-if="isHome"
                        :assignment="assignedProgram.weeks"
                        @viewWeek="viewWeek"
                />
                <ProgramView
                        v-else
                        :assignment="assignedProgram.weeks[viewingWeek.index]"
                        @goBackHome="clearWeek"
                        @saveAssignment="saveAssignment"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import {getUserAssignment, saveUserAssignment} from './requests';
    import Loading from "../../../components/Loading";
    import NoProgram from "./components/NoProgram";
    import ParentListing from "./components/program_listing/ParentListing";
    import ProgramView from "./components/program_view/ProgramView";

    export default {
        name: "ProgramContainer",
        components: {ProgramView, ParentListing, NoProgram, Loading},
        data() {
            return {
                assignedProgram: [],
                hasAssignment: false,
                loading: false,
                isHome: true,
                viewingWeek: {
                    id: 0,
                    index: 0
                }
            }
        },
        methods: {
            viewWeek(weekId) {
                this.assignedProgram.weeks.forEach((item, index) => {
                    if (item.id === weekId) {
                        this.isHome = false;
                        this.viewingWeek = { id: item.id, index: index };
                    }
                });
            },
            clearWeek() {
                this.isHome = true;
                this.viewingWeek = { id: 0, index: 0 };
            },
            saveAssignment() {
                this.loading = true;
                saveUserAssignment(this.assignedProgram)
                .then(data => {
                    if (data.success) {
                        this.assignedProgram = data.assignment;
                    } else {
                        alert(data.message);
                    }
                    this.loading = false;
                })
            }
        },
        created() {
            this.loading = true;
            getUserAssignment().then(data => {
                if (data.success) {
                    this.hasAssignment = true;
                    this.assignedProgram = data.assignment;
                } else {
                    this.hasAssignment = false;
                }
                this.loading = false;
            });
        }
    }
</script>

<style scoped>

</style>