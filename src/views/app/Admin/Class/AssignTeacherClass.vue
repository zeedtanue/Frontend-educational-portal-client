<template>
    <div class="container">
        <v-container>
        

        <v-card>
            <div class="padding-card">
                
                <h1 class="title">Assign Teacher to a class</h1>
            
        <v-row  justify="space-between">
            <h3>Total classess: {{classes.length}}</h3>
            <h3>Total teachers: {{teachers.length}}</h3>
         </v-row>
            <v-row  justify="space-between">
            
            <v-col class="d-flex" cols="12" sm="6">
            
                    <v-select
                        v-model="selectedClass"
                        :items="classes"
                        item-text="className"
                        label="Select a Class"
                        persistent-hint
                        return-object
                        single-line
                        ></v-select>
                        
                </v-col>  
                <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                        v-model="selectedTeacher"
                        :items="teachers"
                        item-text="teacherName"
                        label="Select a teacher"
                        persistent-hint
                        return-object
                        single-line
                        ></v-select>
                        <v-btn @click="assignTeacherClass">Apply</v-btn>
                </v-col>  
            </v-row>


            
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
    data(){
        return{
            teachers:[],
            classes:[],
            selectedClass:null,
            selectedTeacher:null
        }
    },
    mounted(){
        const self = this;
        axios.get(`http://164.90.230.104:5000/api/admin/teacher`)
            .then((res)=>{
                for(const item of res.data.teacher){
                    self.teachers.push({value:item.id, teacherName:item.name})
                }
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
        axios.get(`http://164.90.230.104:5000/api/admin/class`)
            .then((res)=>{
                for(const item of res.data.className ){
                    self.classes.push({value: item.id, className:item.subject})
                }
                
                console.log('classes: ', self.classes)
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
        
    },
    methods:{
        assignTeacherClass(){
            axios.post(`http://164.90.230.104:5000/api/admin/teacher-to-class/${this.selectedClass.value}/${this.selectedTeacher.value}`,
                {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(()=>{
                        alert(`${this.selectedClass.className} has ${this.selectedTeacher.teacherName}`)
                        this.$router.go('/admin/class')
                    }).catch((err)=>{
                        console.log(err)
                    })
        },
        addstudent(){
            this.$router.push('create-class')
            
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