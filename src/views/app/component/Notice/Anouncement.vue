<template>
    <div>
        <v-card>
            <v-carousel>
            
                <v-carousel-item
                    v-for="(item,i) in notices"
                        :key="i"
                        
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                        :src="item.cover"
                        >
                        <div style="padding:20px;">
                        <p>{{item.name}}</p>
                        <p>Created At:{{item.updatedAt}}</p>
                        </div>
                    </v-carousel-item>
                    
                </v-carousel>
        </v-card>

    </div>
</template>


<script>
import axios from 'axios';
export default {
 data(){
        return{
            notices:[]
        }
    },
    mounted(){
        const self = this;
        axios.get('http://localhost:5000/api/admin/notice')
            .then((res)=>{
                self.notices=res.data.notice;
                
                console.log('Data: ',res.data.notice);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    }
    
}
</script>

<style scoped>
    
</style>