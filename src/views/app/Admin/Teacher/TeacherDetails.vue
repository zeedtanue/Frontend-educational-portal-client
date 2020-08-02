<template>
    <div>
        <!-- profile info with section -->
        <v-container>
        <v-card>
            <v-card-title class="text-center justify-center py-6">
                       <h3 class="font-weight-bold display-1 basil--text">Teacher Profile</h3>
                   </v-card-title>

            <div style="padding:30px;">
             <v-row justify="center">
                 <div style="padding-right:100px;">
            <v-img height="100px"
                         width="100px"
                         style="border-radious:25" 
                         class="rounded-circle"  
                         v-bind:src="user.profileImage" 
                          
                         ></v-img></div>
                         <div>
                             <p style="font-weight:bold;">Name: {{user.name}}</p> 
                             <p style="font-weight:bold;">ID: {{user.userid}}</p> 
                             <p style="font-weight:bold;">Email: {{user.email}}</p> 
                         </div>
                         </v-row>
                         <v-row align="center" justify="end">
                            <v-btn  :to="`/admin/teacher/${user._id}`">
                                <v-icon color="#77C64A" left>mdi-content-save-edit</v-icon>
                            </v-btn>
                            <v-btn>
                                <v-icon color="#77C64A" left  @click="deleteUser">mdi-delete</v-icon>
                            </v-btn>
                        </v-row>
                         
         </div>   
        </v-card>
           <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>
      <v-card>
          <v-card-title class="text-center justify-center py-6">
                       <h4 class="font-weight-bold  basil--text">Assigned Classes</h4>

                   </v-card-title>
                <div style="padding-left:90px; padding-right:90px;">                
                    <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Actions</th>
                    
                    </tr>
                </thead>
                
                    <div  v-for="item in user.classes" :key="item.subject">
                        <v-row justify="space-between">
                    <router-link :to="`/admin/sectionDetails/${item._id}`">
                    
                    <p>{{ item.subject }}</p>
                    </router-link>
                    
                    <div>
                        <v-row align="center" >
                            <v-icon color="#77C64A" left>mdi-content-save-edit</v-icon>
                            <v-icon color="#77C64A" left @click="deleteNotice">mdi-delete</v-icon>
                        </v-row> 
                    
                    </div>
                    </v-row>
                    </div>
                

                </template>
            </v-simple-table>
            </div>
      </v-card>
      
        <!--Classes -->



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
        axios.get(`http://46.101.188.213:5000/api/admin/teacher/${this.$route.params.id}`)
            .then((res)=>{
                self.user=res.data;
                
                console.log('Data: ',res.data);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods: {
        deleteUser(){
            axios.delete(`http://46.101.188.213:5000/api/admin/teacher/${this.$route.params.id}`)
                .then(()=>{
                    this.$router.push('/admin/teachers')
                })
                .catch((err)=>{
                    console.log(err)
                })
            
        }
    },
}
</script>