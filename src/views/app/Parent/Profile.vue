<template>
    <div>
        <v-container>
        <v-card>
            <div style="padding:20px">
            <v-row justify="space-between"> 
            <v-text class="title">Profile</v-text>
            </v-row>
            <div>
                <v-card-text class="form-right">
                    <v-row justify="center"> 
                        <div style="padding-right:40px">
                            <v-flex>
                                    <v-img 
                                    v-bind:src="profile.profileImage" 
                                    height="150" 
                                    width="150"></v-img>
                                </v-flex>
                        </div>
                        <div style="padding-left:40px">
                            <h4>Name: {{profile.name}}</h4>
                            <h4>User ID: {{profile.userid}}</h4>
                            <h4>Email: {{profile.email}}</h4>
                        </div>
                    </v-row>
                    


                </v-card-text>


            </div>
            </div>
        </v-card>
            <div style="padding:20px"></div>


        <v-card>
            <v-text class="title">Students</v-text>
 <v-row justify="center" class="d-flex">
            <div class="student" v-for="item in profile.user"
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
        </v-container>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            profile:[]
        }
    },
    mounted(){
        const self = this;
        let token= localStorage.getItem('token');
        axios.get('http://46.101.188.213:5000/api/parent/profile',{
            headers:{
                'Authorization': token
            }
        })
            .then((res)=>{
                self.profile=res.data.parentDB;
        
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
}
</script>

<style scopped>
    
</style>