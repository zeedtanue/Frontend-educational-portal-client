<template>
    <div class="container">
        <v-container>
            <v-row justify="space-between">
                <h1 class="title">All Section</h1>
                
        </v-row>
        <h3>Total sections: {{sections.length}}</h3>

        <v-card>
            <div class="padding-card">


            <h1 class="title">List of Section</h1>
            <p>params:{{this.$router.param.userId}} </p>
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Students</th>
                    <th class="text-left">Classes</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in sections" :key="item.name">
                    <router-link :to="`/admin/sectionDetails/${item.id}`">

                    <td>{{ item.name }}</td>
                    </router-link>
                    <td>{{ item.student_count }}</td>
                    <td>{{item.classes_count}}</td>
                    
                    </tr>
                </tbody>

                </template>
            </v-simple-table>

            </div>
        </v-card>
        
        <div>

            
            </div>   
            </v-container>     
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name:"AllNotice",
    data(){
        return{
            sections:[],
            selectedSection:""
            
        }
    },
    mounted(){
        const self = this;
        axios.get('http://164.90.230.104:5000/api/admin/section')
            .then((res)=>{
                self.sections=res.data.section;
                self.desserts.category=res.data.section.name
                console.log('Data: ',res.data.section);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods:{
        delteNotice(){
            const id=[]
            for(const section of this.sections){
                id.push[section.id]
            }
            
            axios.delete(`http://164.90.230.104:5000/api/admin/notice/${id}`)
        },
        addToSection(){
            console.log(this.selectedSection)
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