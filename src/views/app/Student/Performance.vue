<template>
    <div>
        <v-container>
            <v-row>
                <Drawer/>
                <h1 class="title">Classes</h1>
            </v-row>  
                    <v-card>
            <div style="padding:10px">

            <div class="classes" v-for="item in classes"
                :key="item.id">
                <router-link :to="`/class/${item.id}`">
                <h1 class="title ">{{item.name}}</h1>
                <Performance/>

                
                </router-link>
                </div>
                
                
</div>            
        </v-card>
          
        </v-container>
    </div>
</template>

<script>
import Performance from '../component/performanceTemplate'
import StudentDrawer from '../component/Drawer/StudentDrawer'

import axios from 'axios';

export default {
    components:{
        'Drawer':StudentDrawer,
        'Performance':Performance
    },
     data(){
        return{
            classes:[]
        }
    },
    mounted(){
        const self = this;
        let token= localStorage.getItem('token');
        axios.get('http://164.90.230.104:5000/api/student/class',{
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