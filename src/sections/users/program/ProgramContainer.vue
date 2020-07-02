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
                        v-if="page === 'home'"
                        :assignment="assignedProgram.weeks"
                        @viewWeek="viewWeek"
                />
                <ProgramView
                        v-if="page === 'program'"
                        :assignment="assignedProgram.weeks[viewingWeek.index]"
                        @goBackHome="clearWeek"
                        @saveAssignment="saveAssignment"
                />
                <DayView
                  v-if="page === 'day'"
                  :assignment="assignedProgram.weeks[viewingWeek.index]"
                  @goBackHome="clearWeek"
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
    import ProgramView from "./components/module_view/ProgramView";
    import DayView from "./components/day_view/DayView";

    export default {
        name: "ProgramContainer",
        components: {ProgramView, ParentListing, NoProgram, DayView, Loading},
        data() {
            return {
                assignedProgram: [],
                hasAssignment: false,
                loading: false,
                page: 'home',
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
                        this.page = 'day';
                        this.viewingWeek = { id: item.id, index: index };
                    }
                });
            },
            clearWeek() {
                this.page = 'home';
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