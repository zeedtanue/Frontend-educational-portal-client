<template>
    <a-layout>
 
        <dashboard-core-view/>
    </a-layout>
</template>

<script>

    // import View from "./component/core/View";
    import DashboardCoreView from "./component/View";

    export default {
        name: "AppIndex",
        components: {DashboardCoreView}
    }
</script>

<style scoped>

</style>
