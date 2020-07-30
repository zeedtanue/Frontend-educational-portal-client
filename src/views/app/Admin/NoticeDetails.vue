<template>
    <div>
        <v-card>
            <v-flex >
                    <img :src="notice.cover" height="400" width="800">
                </v-flex>
                <v-row align="center" justify="end">
                            <v-icon  color="#77C64A" left>mdi-content-save-edit</v-icon>
                            <v-icon color="#77C64A" left>mdi-delete</v-icon>
                        </v-row> 
                <p> Created At: {{notice.createdAt}}</p>
                <p> Name: {{notice.name}}</p>
                <p> Details: {{notice.details}}</p>
                
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Notice",
    data() {
        return {
            notice:[]
        }
    },
    mounted() {
        const self = this;
        axios.get(`http://localhost:5000/api/admin/notice/${this.$route.params.id}`)
            .then((res)=>{
                self.notice=res.data.notice;
                
                console.log('Data: ',res.data.notice);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
}
</script>