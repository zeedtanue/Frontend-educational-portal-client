<template>
    <a-layout>
        <dashboard-core-app-bar/>
        <router-view/>
    </a-layout>
</template>

<script>
    import DashboardCoreAppBar from "./AppBar";
    export default {
        name: "DashboardCoreView",
        components: {DashboardCoreAppBar}
    }
</script>

<style scoped>

</style>
