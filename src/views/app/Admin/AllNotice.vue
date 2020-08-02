<template>
    <div class="container">
        <v-container>
            <v-row justify="space-between">
                   <v-row>
                    <Drawer/>
                    <h1 style="padding-top:10px;" class="title">All Notice</h1>
                </v-row>
             
                <div>
                    <Upload-Notice/>
                </div>
            </v-row>
        <h3>Total Notice: {{notices.length}}</h3>

        <v-card>
            <div class="padding-card">
            
            <v-carousel>
            
                <v-carousel-item
                    v-for="(item,i) in notices"
                        :key="i"
                        :src="item.cover"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                        >
                    </v-carousel-item>
                    
            </v-carousel>


            <h1 class="title">List of Notice</h1>
            
            <div class="student" v-for="notice in notices"
                :key="notice.id">
                
                <v-row justify="space-between" class="d-flex">
                <v-flex >
                    <img :src="notice.cover" height="50" width="100">
                </v-flex>
                <div>
                    <router-link :to="{ name: 'Notice', params: { id:notice.id }}">
                        <p @click="viewNotice" class="text-center">{{notice.name}}</p>
                    </router-link>
                    
                    <div>
                        <v-row align="center" justify="end">
                            <v-icon color="#77C64A" left>mdi-content-save-edit</v-icon>
                            <v-icon color="#77C64A" left @click="deleteNotice">mdi-delete</v-icon>
                        </v-row> 
                        
                    </div>
                </div>   
                </v-row>
                

            </div>
            </div>
        </v-card>
        
        <div>

            
            </div>   
            </v-container>     
    </div>

</template>

<script>
import axios from 'axios';
import Drawer from '../component/Drawer/AdminDrawer'
import AddANotice from '../component/Notice/UploadNoticeForm'
export default {
    name:"AllNotice",
    components:{
        'Drawer':Drawer,
        'Upload-Notice':AddANotice
    },
    data(){
        return{
            notices:[]
        }
    },
    mounted(){
        const self = this;
        axios.get('http://164.90.230.104:5000/api/admin/notice')
            .then((res)=>{
                self.notices=res.data.notice;
                
                console.log('Data: ',res.data.notice);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods:{
        delteNotice(){
            const id=[]
            for(const notice of this.notices){
                id.push[notice.id]
            }
            
            axios.delete(`http://164.90.230.104:5000/api/admin/notice/${id}`)
        },
        addstudent(){
            this.$router.push('Upload-Notice')
        }
    }
}
</script>

<style  scoped>
.title{
    font-size: 30px;
    color: #77C64A;
}
.teache{
    padding-top: 65px;
}
.text-center{
    font-weight: bold;
    padding-top: 10px;
    font-size: 20px;
    color: #77C64A;
}
.padding-card{
    padding: 30px;
}
.student{
    padding-top:25px;
}
</style>    