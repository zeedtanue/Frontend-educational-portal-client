<template>
    <div>
        <v-card>
            <div style="padding:10px">
                <v-row justify="space-around">

            <div class="classes" v-for="item in classes"
                :key="item.id">
                <router-link :to="`/class/${item.id}`">
                <h1>{{item.name}}</h1>
                
                </router-link>
                </div>
                </v-row>
</div>            
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
        axios.get('http://46.101.188.213:5000/api/student/class',{
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
  border: 2px solid #64dd17;
  background-color: #f0f2f5;

    padding:20px;
    width: 120px;
}
    
</style>