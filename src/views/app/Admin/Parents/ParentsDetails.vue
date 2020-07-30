<template>
    <div>
        <!-- profile info with section -->
        <v-container>
           
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
        <!-- Students -->

        <!-- Add Students -->

        <!--Payment add up and history-->

 
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Parent",
    data() {
        return {
            user:[]
        }
    },
    mounted() {
        const self = this;
        axios.get(`https://creatixa-student-portal.herokuapp.com/api/admin/parent/${this.$route.params.id}`)
            .then((res)=>{
                self.user=res.data;
                
                console.log('Data: ',res.data);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
}
</script>