<template>
   <a-layout-header :style="{ background: '#A9F37F', padding: 0 }">
        <a-row type="flex" justify="start">
            <a-col :span="5" :offset="1" class=logo><p href="/"> University ABC </p></a-col>
            <a-col :xs="{span:4 , offset:8}" :sm="{span:4 , offset:10}" :md="{span:3 , offset:12}" :lg="{span:2 , offset:13}" :xl="{span:2 , offset:14}"><a-button type="link" href=" ">About Us</a-button></a-col>
            <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" > <a-button type="link" href="/">Logout</a-button></a-col>
            
        </a-row>
    </a-layout-header>
</template>

<script>
    export default {
        name: "DashboardCoreAppBar"
    }
</script>

<style scoped>
.ant-btn-link
{
    color: white;
}
.logo 
{
    color: white;
    font-size: 25px;
}
</style>
