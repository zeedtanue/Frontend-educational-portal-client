<template>
    <div class="container">
        <v-container>
            <v-row justify="space-between">
                   <v-row>
                    <Drawer/>
                    <h1 style="padding-top:10px;" class="title">Teachers</h1>
                </v-row>
             
                <v-btn class="ma-2" tile outlined color="success" @click="addTeacher">
                    <v-icon left>mdi-plus</v-icon> Add Teacher
                </v-btn>
            </v-row>
        <h3>Total Teacher: {{teachers.length}}</h3>

        <v-card>
            <div class="padding-card">
            <v-row justify="center" class="d-flex">
            <div class="teacher" v-for="teacher in teachers"
                :key="teacher.id">
                <router-link :to="{ name: 'Teacher', params: { id : teacher.id }}">
                 <v-img height="100px"
                         width="100px"
                         style="border-radious:25" 
                         class="rounded-circle"  
                         v-bind:src="teacher.profileImage" 
                          
                         ></v-img>
                <p class="text-center">{{teacher.name}}</p>
                </router-link>

            </div></v-row>
            </div>
        </v-card>
        
        <div>

            
            </div>   
            </v-container>     
    </div>

</template>

<script>
import Drawer from '../../component/Drawer/AdminDrawer'

import axios from 'axios';
export default {
    name:"AllTeachers",
    components:{
        'Drawer':Drawer
    },
    data(){
        return{
            teachers:[]
        }
    },
    mounted(){
        const self = this;
        axios.get('http://localhost:5000/api/admin/teacher')
            .then((res)=>{
                self.teachers=res.data.teacher;
                
                console.log('Data: ',self.teachers);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods:{
        addTeacher(){
            this.$router.push('Register-Teacher')
        }
    }
}
</script>

<style  scoped>
.title{
    font-size: 30px;
    color: #77C64A;
}
.teache{
    padding-top: 65px;
}

.text-center{
    padding-top: 10px;
    font-size: 20;
}
.padding-card{
    padding: 30px;
}
</style>