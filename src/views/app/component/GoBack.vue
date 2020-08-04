<template>
    <div>
        <v-row>
        <v-icon style="padding-bottom:5px" dark left @click="goBack" color="light-green">mdi-arrow-left</v-icon> <p class="title"> Back</p>
        </v-row>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            return this.$router.go(-1);
        }
    }
}
</script>
<style  scoped>
.title{
    font-size: 30px;
    padding-top: 5px;
    color: #77C64A;
}
</style>