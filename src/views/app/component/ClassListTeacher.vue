<template>
    <div>
        <v-card>
            <v-row justify="space-around">
            <div class="classes" v-for="item in classes"
                :key="item.id">
                
                    <router-link :to="`/class/${item._id}`">
                    <h1>{{item.subject}}</h1>
                    
                    </router-link>
                
                </div>
            </v-row>
        </v-card>

    </div>
</template>


<script>
import axios from 'axios';
export default {
 data(){
        return{
            classes:[]
        }
    },
    mounted(){
        const self = this;
        let token= localStorage.getItem('token');
        axios.get('http://164.90.230.104:5000/api/teacher/class',{
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
</style>