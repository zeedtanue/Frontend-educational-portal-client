<template>
    <div class="container">
        <v-container>
            <v-row justify="space-between">
                <v-row>
                    <Drawer/>
                    <h1 style="padding-top:10px;" class="title">Students</h1>
                </v-row>
                
                <v-btn class="ma-2" tile outlined color="success" @click="addstudent">
                    <v-icon left>mdi-plus</v-icon> Add Student
                </v-btn>
            </v-row>
        <h3>Total Students: {{students.length}}</h3>

        <v-card>
            <div class="padding-card">
            <v-row justify="center" class="d-flex">
            <div class="student" v-for="student in students"
                :key="student.id">
                <router-link :to="{ name: 'Student', params: { id : student.id }}">
                
                 <v-img height="100px"
                         width="100px"
                         style="border-radious:25" 
                         class="rounded-circle"  
                         v-bind:src="student.profileImage" 
                          
                         ></v-img>
                <p class="text-center">{{student.name}}</p>
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
    name:"AllStudent",
    components:{
        'Drawer':Drawer
    },
    data(){
        return{
            students:[]
        }
    },
    mounted(){
        const self = this;
        axios.get('https://creatixa-student-portal.herokuapp.com/api/admin/student')
            .then((res)=>{
                self.students=res.data.user;
                
                console.log('Data: ',res.data.user);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods:{
        addstudent(){
            this.$router.push('Register-Student')
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