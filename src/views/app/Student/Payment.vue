<template>
    <div>
       <v-container>
           <div>
               <v-row>
                <Drawer/>
                <h1 class="title">Payment</h1>
            </v-row>
           </div>
           <v-card style="padding:30px;">
                         <h2> Payment History </h2>   
                         <div v-if="payment">

                                <div v-for="item in payment" :key="item.description">
                                    <div>
                                <h3 v-if!="item.paid"> Unpaid Payment </h3>
                                   <p> {{ item.description }}</p>
                                   <p> {{ item.amount }}</p>
                                   </div>
                                </div>
                                <h3  >No Paid Payment</h3>

                            
                         
                         </div>
                         <div v-else>
                            <p> No payment history</p>
                         </div>
                        <div align="end">
                            <v-btn
                                color="light-green"
                                dark
                                @click="pay">Pay Now</v-btn>
                        </div>
            
            </v-card>
           
           
           </v-container> 
    </div>
</template>

<script>
import Drawer from '../component/Drawer/StudentDrawer'
import axios from 'axios'
export default {
    components:{
        'Drawer':Drawer
    },
    data() {
        return {
            payment:[]
        }
    },
    mounted() {
        const self = this;
        let token= localStorage.getItem('token');
        axios.get('http://localhost:5000/api/student/payment',{
            headers:{
                'Authorization': token
            }
        })
            .then((res)=>{

                self.payment=res.data;

                console.log('Class: ',self.payment);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods:{
        pay(){
            alert("this section will be created upon school's payment version")
        }
    }
    
}
</script>

<style  scoped>

</style>