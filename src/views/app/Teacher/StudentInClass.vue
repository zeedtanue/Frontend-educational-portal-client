<template>
    <div>
        <v-container>
        
        <h1 class="title">{{this.$route.params.class}}</h1>
        
        <v-card>
            <v-row justify="center" class="d-flex">
            <div class="student" v-for="student in students"
                :key="student.id">
                    <router-link :to="{name:'Student-Performance',params: { id : student.id, name:student.name }}">
                
                 <v-img height="100px"
                         width="100px"
                         style="border-radious:25" 
                         class="rounded-circle"  
                         v-bind:src="student.profileImage" 
                          
                         ></v-img>
                <p class="text-center">{{student.name}}</p>
                </router-link>

            </div></v-row>
        </v-card>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            students:[]
        }
    },
    mounted() {
        const self = this;
        axios.get(`http://164.90.230.104:5000/api/teacher/class/${this.$route.params.id}/students`)
            .then((res)=>{
                for(const item of res.data){
                    self.students.push(item)
                }
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
}
</script>
<style scoped>
    .title{
    font-size: 30px;
    color: #77C64A;
}
</style>