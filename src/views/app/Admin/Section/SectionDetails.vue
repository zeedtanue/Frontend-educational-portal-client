<template>
    <div>
        <v-container>
        <!-- profile info with section -->
        <v-card>
             <v-card-title class="text-center justify-center py-6">
                       <h3 class="font-weight-bold display-1 basil--text">Section: {{section.section}}</h3>
                   </v-card-title>
        </v-card>
        <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>    
        <v-card>
            <p style="padding:30px; font-weight:bold; font-size:18px"> Classes:{{section.class.length}} </p>
            <v-row justify="space-around">
            <div  v-for="item in section.class"
                :key="item.id">
                <router-link :to="{ name: 'ClassName', params: { id : item.id }}">
                
                <p> {{item.subject}} </p>
                </router-link>
            </div>
            </v-row>
            </v-card>
            <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>  
            <v-card>
            <p style="padding:30px; font-weight:bold; font-size:18px"> Total Students:{{students.length}} </p>
                 <div class="padding-card">
            <v-row justify="space-around" class="d-flex">
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
            
        
        </v-container>
        <!-- attendance by class -->

        <!-- Payment -->
            <!-- Payment History -->
            <!-- Add new Payment -->
            
        <!-- Performance  -->


    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"User",
    data() {
        return {
            section:[],
            classes:[],
            students:[]
        }
    },
    mounted() {
        const self = this;
        axios.get(`http://46.101.188.213:5000/api/admin/section/${this.$route.params.id}`)
            .then((res)=>{
                self.section=res.data;
                self.classes= res.data.class;
                self.students=res.data.student;
                
                console.log('Data: ',self.students);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
}
</script>