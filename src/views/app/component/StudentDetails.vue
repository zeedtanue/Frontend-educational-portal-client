<template>
    <div>
        <v-card style="padding:30px;">
             <v-card-title class="text-center justify-center py-6">
                       <h3 class="font-weight-bold display-1 basil--text">Student Profile</h3>
                   </v-card-title>

            <v-row justify="center">
            <div style="padding-right:80;">   
            <v-img 
                        height="100px"
                        width="100px"
                         style="border-radious:25" 
                         class="rounded-circle"  
                         v-bind:src="user.profileImage" 
                          
                         ></v-img>
            </div>
                         
                     
                <div style="padding-left:80px;">
                     <p class="text"> Name: {{user.name}}</p>
                    
                       
                    <p class="text">Section Name: {{user.section.sectionName}}</p>
                         
                </div>
            </v-row>
                
        </v-card>
    </div>
</template>


<script>



import axios from 'axios';
export default {
    name:"User",
    data() {
        return {
            payment:{
                description:"",
                amount:""
            },
            user:[],
            section: [],
            selectedSection: null
        }
    },
    mounted() {
        const self = this;
        axios.get(`http://localhost:5000/api/admin/student/${this.$route.params.id}`)
            .then((res)=>{
                self.user=res.data;
                
                console.log('Data: ',res.data);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
        
    },
   
}