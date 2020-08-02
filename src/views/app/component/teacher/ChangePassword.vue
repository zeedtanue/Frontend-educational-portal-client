<template>
    <div>
        <v-flex offset>
        
        <v-card>
            <div style="padding:20px">
            <v-text class="title">Change Password</v-text>
            <div>
                <v-card-text class="form-right">
                    <v-row justify="space-around"> 
                         <v-text-field
						v-model="change.oldPassword"
						label="Old Password"
						required

						>
						</v-text-field>
                        <v-spacer></v-spacer>
                      <v-text-field
						v-model="change.newPassword"
						label="New Password"
						required

						>
						</v-text-field>
                        <v-spacer></v-spacer>

                        <v-btn 
                            class="mb-3 register-button" 
                            success 
                            @click='changePassword'>
                            Change Password
                            </v-btn>
  
                    </v-row>


                </v-card-text>

            </div>
        </div>
        </v-card>
        
        
        </v-flex>
 
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            change:{
                newPassword:"",
                oldPassword:""
            }
        }
    },
    methods:{
        changePassword(){
             let token= localStorage.getItem('token');
             let formData = new FormData();
             formData.append('password', this.change.newPassword);

             axios.put('http://46.101.188.213:5000/api/teacher/change-password', formData,
                    {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': token
                        }
                    })
                    .then(()=>{
                        alert(`Please Log in with new password`)
                        this.$router.push('/')
                    }).catch((err)=>{
                        alert(err)
                    })
        }
    }
}
</script>

<style >
    
</style>