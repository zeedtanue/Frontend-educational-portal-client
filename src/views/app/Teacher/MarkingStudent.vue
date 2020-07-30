<template>
    <v-container>
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
        <div style="margin-top:30px">

        </div>

        <v-card>
              <v-card-title class="text-center justify-center py-6">
                       <h3 class="font-weight-bold display-1 basil--text">Marking & Performance</h3>
            
                   </v-card-title>
                    <div  style="padding:30px">
                     <v-row justify="space-around">

                     <div>
                         <h1>Attendence:</h1>
                     </div>
                     <div style="padding-left:30px">
                         <v-row>
                             <div>
                         <input v-model.number="marks.attendance" type="number" placeholder="input here"></div>
                              <p>/20%</p>
                              </v-row>
                          </div>  
                     
                   </v-row>
                   </div>
                    <div  style="padding:30px">
                     <v-row justify="space-around">

                     <div>
                         <h1>Assignment 01:</h1>
                     </div>
                     <div style="padding-left:30px">
                         <v-row>
                             <div>
                         <input v-model.number="marks.item01" type="number" placeholder="input here"></div>
                              <p>/20%</p>
                              </v-row>
                          </div>  
                     
                   </v-row>
                   </div>               
                   <div  style="padding:30px">
                     <v-row justify="space-around">

                     <div>
                         <h1>Assignment 02:</h1>
                     </div>
                     <div style="padding-left:30px">
                         <v-row>
                             <div>
                         <input v-model.number="marks.item02" type="number" placeholder="input here"></div>
                              <p>/20%</p>
                              </v-row>
                          </div>  
                     
                   </v-row>
                   </div>     
                   <div  style="padding:30px">
                     <v-row justify="space-around">

                     <div>
                         <h1>Final Exam        :</h1>
                     </div>
                     <div style="padding-left:30px">
                         <v-row>
                             <div>
                         <input v-model.number="marks.item03" type="number" placeholder="input here"></div>
                              <p>/40%</p>
                              </v-row>
                          </div>  
                     
                   </v-row>
                   </div>
                   <v-progress-linear
      color="light-green"
      rounded
      value="100"
    ></v-progress-linear>
    <div  style="padding:30px">
                     <v-row justify="space-around">

                     <div>
                         <h1>Total:</h1>
                     </div>
                     <div style="padding-left:30px">
                         <v-row>
                             <p>{{marks.item01+marks.item02+marks.item03+marks.attendance}}</p>
                              <p>/100%</p>
                              </v-row>
                          </div>  
                     
                   </v-row>
                   </div>
                   <div align="end" style="padding-bottom:20px, padding-right:20px">
                       <v-btn
                                color="light-green"
                                dark
                                @click="submit"
                                >
                           Submit
                       </v-btn>
                   </div>
                   
        </v-card>
    
    </v-container>
        

</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {

            user:[],
            marks:{
                attendance:'',
                item01:'',
                item02:'',
                item03:'',
                


            },
            
        }
    },
    mounted() {
        const self = this;
        axios.get(`https://creatixa-student-portal.herokuapp.com/api/admin/student/${this.$route.params.id}`)
            .then((res)=>{
                self.user=res.data;
                
                console.log('Data: ',res.data);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
        
    },
    methods: {
        submit(){
            alert(`Total number of ${this.user.name} is ${this.marks.item01+this.marks.item03+this.marks.item02+this.marks.attendance}`)
            this.$router.push('/teacher/marking')
        }
    },
}
</script>