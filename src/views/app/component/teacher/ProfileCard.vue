<template>
    <div>
        
        <v-card>
            <div style="padding:20px">
            <v-row justify="space-between"> 
            <v-text class="title">Profile</v-text>
            <h4>Classes Assigned: {{profile.totalClasses}}</h4>
            </v-row>
            <div>
                <v-card-text class="form-right">
                    <v-row justify="center"> 
                        <div style="padding-right:40px">
                            <v-flex>
                                    <img 
                                    :src="profile.image" 
                                    height="150" 
                                    width="150">
                                </v-flex>
                        </div>
                        <div style="padding-left:40px">
                            <h4>Name: {{profile.name}}</h4>
                            <h4>User ID: {{profile.userid}}</h4>
                            <h4>Email: {{profile.email}}</h4>
                        </div>
                    </v-row>
                    <div align="end">
                        <v-btn>
                        <v-icon color="#77C64A" left>mdi-content-save-edit</v-icon>
                        </v-btn>
                    </div>


                </v-card-text>

            </div>
            </div>
        </v-card>
        

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
        axios.get('http://164.90.230.104:5000/api/teacher/profile',{
            headers:{
                'Authorization': token
            }
        })
            .then((res)=>{
                self.profile=res.data.user;
        
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
}
</script>

<style scopped>
    
</style>