<template>
    <div class="container">
        <v-container>
            <v-row justify="space-between">
                <v-row>
                    <Drawer/>
                <h1 style="padding-top:10px" class="title">Parents</h1>
                    

                </v-row>
                <v-btn class="ma-2" tile outlined color="success" @click="addstudent">
                    <v-icon left>mdi-plus</v-icon> Add A Parent
                </v-btn>
            </v-row>
        <h3>Total Parents: {{parents.length}}</h3>

        <v-card>
            <div class="padding-card">
            <v-row justify="center" class="d-flex">
            <div class="student" v-for="parent in parents"
                :key="parent.id">
                <router-link :to="{ name: 'Parent', params: { id : parent.id }}">
                
                 <v-img height="100px"
                         width="100px"
                         style="border-radious:25" 
                         class="rounded-circle"  
                         v-bind:src="parent.profileImage" 
                          
                         ></v-img>
                <p class="text-center">{{parent.name}}</p>
                </router-link>

            </div></v-row>
            </div>
        </v-card>
        
        <div>

            
            </div>   
            </v-container>     
    </div>

</template>

<script>
import Drawer from '../../component/Drawer/AdminDrawer'
import axios from 'axios';
export default {
    name:"AllStudent",
    components:{
        'Drawer':Drawer
    },
    data(){
        return{
            parents:[]
        }
    },
    mounted(){
        const self = this;
        axios.get('http://localhost:5000/api/admin/parent')
            .then((res)=>{
                self.parents=res.data.parent;
                
                console.log('Data: ',res.data.parent);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods:{
        addstudent(){
            this.$router.push('register-parents')
        }
    }
}
</script>

<style  scoped>
.title{
    font-size: 30px;
    color: #77C64A;
}
.student{
    padding-top: 65px;
}

.text-center{
    padding-top: 10px;
    font-size: 20;
}
.padding-card{
    padding: 30px;
}
</style>