<template>
    <div>
        <!-- profile info with section -->
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
                    <div v-if="user.section">
                       
                    <p class="text">Section Name: {{user.section.sectionName}}</p>
                         
                </div>
                <div v-else>
                    <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                        v-model="selectedSection"
                        :items="section"
                        item-text="sectionName"
                        label="Select a Section"
                        persistent-hint
                        return-object
                        single-line
                        ></v-select>
                        <v-btn @click="assignSection">Apply</v-btn>
                    </v-col>    
                         
                </div>
                    <p class="text">ID: {{user.userid}}</p>
                    </div>         
                
                </v-row>
                <div>
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
            
            
        <!--add a section-->
            
    <!-- Payment -->
            <!-- Payment History -->
            <!-- Add new Payment -->
              
        <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>

            <v-card justify="center">
                <div style="padding:30px;">
                <h2>Add a Payment</h2>
                <v-form  style="max-width:800px">
                        
                       <div>
                       
						<v-text-field
						v-model="payment.description"
						label="Payment for.."
						required

						>
						</v-text-field>
                        <v-text-field
						v-model="payment.amount"
						label="Amount"
						required

						>
						</v-text-field>
                           
                           </div> 
                         
						
                        </v-form>
                         <v-btn class="mb-3 register-button" success @click='paymentAdd'>Add Payment</v-btn>
                         </div>
            </v-card>
             <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>
            <v-card style="padding:30px;">
                         <h2> Payment History </h2>   
                         <div v-if="user.payment">

                                <div v-for="item in user.payment" :key="item.description">
                                <h3 v-if!="item.paid"> Unpaid Payment </h3>
                                   <p> {{ item.description }}</p>
                                   <p> {{ item.amount }}</p>
                                <h3 v-if="item.paid" >Paid Payment</h3>
                                <h3 v-else >No Paid Payment</h3>
                                </div>

                            
                         
                         </div>
                         <div v-else>
                            <p> No payment history</p>
                         </div>
            
            
            </v-card>
           
        
           </v-container>     
        <!-- attendance by class -->

        
            
        <!-- Performance  -->


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
        axios.get(`https://creatixa-student-portal.herokuapp.com/api/admin/student/${this.$route.params.id}`)
            .then((res)=>{
                self.user=res.data;
                
                console.log('Data: ',res.data);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
        axios.get(`https://creatixa-student-portal.herokuapp.com/api/admin/section`)
            .then((res)=>{
                for(const item of res.data.section ){
                    self.section.push({value: item.id, sectionName:item.name})
                }
                
                console.log('section: ', self.section)
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods: {
        assignSection(){
            axios.post(`https://creatixa-student-portal.herokuapp.com/api/admin/student-in-section/${this.selectedSection.value}/${this.$route.params.id}`,
                    {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                .then(()=>{
                    alert(`${this.user.name} has been added to Section ${this.selectedSection.value}`)
                }

                ) .catch((err)=>{
                console.log('Error: ',err)
            })  
        },
        paymentAdd() {
                let formData = new FormData();
                formData.append('description', this.payment.description);
                formData.append('amount', this.payment.amount);



                axios.post(`https://creatixa-student-portal.herokuapp.com/api/admin/student/payment/${this.$route.params.id}`, formData,
                    {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(()=>{
                        alert(` A Payment has been sent to ${this.user.name}`)
                    }).catch((err)=>{
                        alert(err)
                    });
            },
            deleteUser(){
                axios.delete(`https://creatixa-student-portal.herokuapp.com/api/admin/student/${this.$route.params.id}`)
                    .then(()=>{
                        alert(`Student data has been deleted`)
                        this.$router.push('/admin/teacher')
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                
            }
        
    },
}
</script>

<style scopped>
    .text{
        font-weight: bold;
    }
</style>