<template>
    <div>
        
        <!-- profile info with section -->
        <v-container>
             <div >

            <GoBack/>

        </div>   
        <v-card>
            <div style="padding:20px">
            <v-row justify="space-between"> 
            <v-text class="title">Profile</v-text>
            </v-row>
            <v-row justify="center"> 
                <div style="padding-right:40px">
                       <v-flex>
            <v-img height="100px"
                         width="100px"
                         style="border-radious:25" 
                         class="rounded-circle"  
                         v-bind:src="user.profileImage" 
                          
                         ></v-img>
                       </v-flex>
                         </div>
                     <div style="padding-left:40px">
                            <h4>Name: {{user.name}}</h4>
                            <h4>User ID: {{user.userid}}</h4>
                            <h4>Email: {{user.email}}</h4>
                        </div>
                    </v-row>
            </div>
            
        </v-card>
        <div style="padding:15px"></div>


        <div style="padding:15px"></div>
        
        <v-card>
                <h1 style="padding-top:10px" class="title">Students Under Parent</h1>
                <p>Add New</p>
                 <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                        v-model="selectedStudent"
                        :items="students"
                        item-text="name"
                        label="Select a Student"
                        persistent-hint
                        return-object
                        single-line
                        ></v-select>
                        <v-btn @click="assignParent">Apply</v-btn>

                    </v-col>
                     <v-row justify="center" class="d-flex">
            <div class="student" v-for="item in user.user"
                :key="item._id">
                <router-link :to="{ name: 'Student', params: { id : item._id }}">
                
                 <v-img height="100px"
                         width="100px"
                         style="border-radious:25" 
                         class="rounded-circle"  
                         v-bind:src="item.profileImage" 
                          
                         ></v-img>
                <p class="text-center">{{item.name}}</p>
                </router-link>

            </div></v-row>

        </v-card>
        <!-- Students -->

        <!-- Add Students -->

        <!--Payment add up and history-->

 
        </v-container>
    </div>
</template>

<script>
import GoBack from '../../component/GoBack'
import axios from 'axios';
export default {
    name:"Parent",
    components:{
        GoBack
    },
    data() {
        return {
            user:[],
            students: [],
            selectedStudent: null
        }
    },
    mounted() {
        const self = this;
        axios.get(`http://46.101.188.213:5000/api/admin/parent/${this.$route.params.id}`)
            .then((res)=>{
                self.user=res.data;
                
                console.log('Data: ',res.data);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
        axios.get(`http://46.101.188.213:5000/api/admin/student`)
            .then((res)=>{
                for(const item of res.data.user ){
                    self.students.push({value: item.id, name:item.name})
                }
                
                console.log('section: ', self.section)
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods:{
        assignParent(){
            axios.post(`http://46.101.188.213:5000/api/admin/add-to-parent/${this.$route.params.id}/${this.selectedStudent.value}`,
                    {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                .then(()=>{
                    alert(`${this.user.name} has  ${this.selectedSection.value}`)
                }

                ) .catch((err)=>{
                console.log('Error: ',err)
            })  
        }
    }
}
</script>