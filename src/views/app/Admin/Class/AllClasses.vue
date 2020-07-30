<template>
    <div class="container">
        <v-container>

            <v-row justify="space-between">
                <div>
                    <v-row>
                   <Drawer/> <h3 style="padding-top:10px;" class="title">Classes</h3>
                   </v-row>
                </div>
                <div class="paddingLine">
                    <CreateClass/></div>
            </v-row>
 <v-card>
        <v-row>
            <v-col cols="12" sm="6">
                <Assign-Section-To-Class/>
                </v-col>
            <v-col cols="12" sm="6">
                <Assign-Teacher-to-Class/>
            </v-col>
            
            
      
      
        </v-row>
           

       
            <div class="padding-card">


            <h1 class="title">List of Classes</h1>
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Section</th>
                    <th class="text-left">Students</th>
                    <th class="text-left">Teacher</th>
                    <th class="text-left">Actions</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in classes" :key="item.subject">
                    <router-link :to="`/class/${item.id}`">
                    
                    <td>{{ item.subject }}</td>
                    </router-link>
                    <td>{{ item.section.sectionName }}</td>
                    <td>{{ item.section.student.length }}</td>
                    <td>{{item.teacher.name}}</td>
                    <td>
                        <v-row align="center" >
                            <v-icon color="#77C64A" left>mdi-content-save-edit</v-icon>
                            <v-icon color="#77C64A" left @click="deleteNotice">mdi-delete</v-icon>
                        </v-row> 
                    </td>
                    </tr>
                </tbody>

                </template>
            </v-simple-table>

        
            
            </div>
        </v-card>
        
        <div>

            
            </div>   
            </v-container>     
    </div>

</template>

<script>
import Drawer from '../../component/Drawer/AdminDrawer'
import AddClass from '../../component/DialogFormButton/AddAClass'
import AssignTeacherClass from './AssignTeacherClass.vue'
import AssignToClass from './AssignSectionClass.vue'
import axios from 'axios';
export default {
    name:"AllClasses",
    components:{
        'Assign-Section-To-Class':AssignToClass,
        'Assign-Teacher-to-Class':AssignTeacherClass,
        'CreateClass':AddClass,
        'Drawer':Drawer
    },
    data(){
        return{
            sections:[],
            classes:[]
        }
    },
    mounted(){
        const self = this;
        axios.get('https://creatixa-student-portal.herokuapp.com/api/admin/class')
            .then((res)=>{
                
                self.classes=res.data.className;
                console.log('Data: ',res.data.className);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods:{
        delteNotice(){
            const id=[]
            for(const section of this.sections){
                id.push[section.id]
            }
            
            axios.delete(`https://creatixa-student-portal.herokuapp.com/api/admin/notice/${id}`)
        },
        addstudent(){
            this.$router.push('create-class')
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
    font-weight: bold;
    padding-top: 10px;
    font-size: 20px;
    color: #77C64A;
}
.padding-card{
    padding: 30px;
}
.student{
    padding-top:25px;
}
.paddingLine{
    padding-bottom:10px;
}
</style>    