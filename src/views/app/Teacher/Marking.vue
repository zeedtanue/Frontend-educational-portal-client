<template>
    <v-container>
             <v-row>

                   
                    <Drawer/>
                    <h1  class="title">Performance & Marking</h1>
                </v-row>
                





                <div>
                    <v-card>
            <v-row justify="space-around">
            <div class="classes" v-for="item in classes"
                :key="item.id">
                
                    <router-link :to="{name:'Class-Student',params: { id : item._id, class:item.subject, classID:item._id }}">
                    <h1>{{item.subject}}</h1>
                    
                    </router-link>
                
                </div>
            </v-row>
        </v-card>

                </div>
    </v-container>
</template>




<script>
import Drawer from '../component/Drawer/TeacherDrawer'

import axios from 'axios';
export default {
 data(){
        return{
            classes:[]
        }
    },
    components:{
        'Drawer':Drawer,
    },
    
    mounted(){
        const self = this;
        let token= localStorage.getItem('token');
        axios.get('http://46.101.188.213:5000/api/teacher/class',{
            headers:{
                'Authorization': token
            }
        })
            .then((res)=>{

                self.classes=res.data;

                console.log('Class: ',self.classes);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    }
    
}
</script>

<style scoped>
    .classes{
        padding: 30px;
    }
    .title{
    font-size: 30px;
    color: #77C64A;
}
</style>