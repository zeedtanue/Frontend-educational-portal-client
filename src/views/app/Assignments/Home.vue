<template>
    <div>
        <v-container>
            <v-card>
                <v-row justify="space-between">
                    <h4 style="padding-left:20px">Mark: {{assignment.mark}}</h4>
                    <h4 style="padding-right:20px" >Total submission: {{assignment.submission.length}}</h4>
                </v-row>
                <v-card-title class="text-center justify-center py-6">
                       <v-title  class="title">{{assignment.title}}</v-title>
                       
                       
         </v-card-title>
         <div style="padding-left:20px"  >
            <p> {{assignment.details}} </p>
            <input type="file"
            @change="onFileSelected">
            <v-btn @click="registerIt">Submit</v-btn>



            
    
            
         </div>
            <div align="end">
                        <v-btn
                         @click="downloadAssignment"
                           color="light-green "
                           dark
                           v-bind="attrs"
                           v-on="on"
                           class="mx-4"
                          >
                          Download
                          </v-btn>
            </div>
            
            
             <v-divider
                class="mx-4"
                :inset="inset"
                vertical
            ></v-divider>


            </v-card>
             <v-divider
                class="mx-4"
                :inset="inset"
                vertical
            ></v-divider>
                

            <v-card>
                <v-card-title class="text-center justify-center py-6">
                       <v-title  class="title">Submissions</v-title>
                       
                 </v-card-title>
                    <h4 style="padding-left:20px" >Total submission: {{submission.length}}</h4>

                <v-card>
                 <div style="padding-left:20px" v-for="item in submission" :key="item._id">
                    <v-row justify="space-between">
                    <div style="padding-left:20px">
                        <h4>Name: {{item.name}} </h4>
                    </div>
                    <div style="padding-right:20px">
                        <v-btn
                         @click="downloadSubmission(item)"
                           color="light-green "
                           dark
                           v-bind="attrs"
                           v-on="on"
                           class="mx-4"
                          >
                          Download
                          </v-btn>
                    </div>
                    </v-row>
                    <div>
                        
                        <h4>Mark</h4>
                        <v-row >
                            <div style="max-width:20%; padding-left:20px">
                                <v-text-field
						v-model="mark"
						label="Mark"
						required
						></v-text-field>


                            </div>
                         <div style="padding-top:20px">
                        <v-btn
                         @click="mark"
                           color="light-green "
                           dark
                           v-bind="attrs"
                           v-on="on"
                           class="mx-4"
                          >
                          Submit
                          </v-btn>
                          </div>
                          </v-row>
                    </div>

                 </div>
                 <v-divider
                class="mx-4"
                :inset="inset"
                vertical
            ></v-divider>
                
                 </v-card>
            </v-card>
        </v-container>
    </div>
</template>



<script>
import axios from 'axios'
export default {
    data() {
        return {
            assignment:[],
            submission:[],
            submittedFile:"",
            mark:""
        }
    },
    mounted() {
        const self = this;
        axios.get(`http://localhost:5000/api/admin/class/get-task/${this.$route.params.id}`)
            .then((res)=>{
                self.assignment=res.data.task;
                console.log(self.assignment)

            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
        let token= localStorage.getItem('token');

        axios.get(` http://localhost:5000/api/teacher/class/task/${this.$route.params.id}/submissions`,{
            headers:{
                'Authorization': token
            }
        })
            .then((res)=>{
                self.submission=res.data;

            })
            .catch((err)=>{
                console.log('Error: ',err)
            })

        
    },
    methods: {
        registerIt() {
                let token= localStorage.getItem('token');

                let formData = new FormData();
                formData.append('submittedFile', this.submittedFile);
                
                axios.post(`http://localhost:5000/api/student/assignments/${this.$route.params.id}`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': token

                        }
                    }
                    ).then(()=>{
                        this.dialog = false
                        alert(`$ Assignment has been submitted `)
                        this.$router.go(`/assignment/${this.$route.params.id}`)
                    }).catch((err)=>{
                        alert( err,'FAILURE!!');
                    });
            },
            downloadAssignment() {
              axios({
                    url: this.assignment.assignmentFile,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
   
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', `${this.assignment.title}.pdf`);
                     document.body.appendChild(fileLink);
   
                     fileLink.click();
                });
          },
        onFileSelected(event){
                
                const file= event.target.files[0]
                const fileReader= new FileReader()
                fileReader.addEventListener('load',()=>{
                    this.register.imageUrl=fileReader.result
                })
                fileReader.readAsDataURL(file)
                this.register.coverImage=file
                console.log(this.submittedFile)

            },
            downloadSubmission(submission){
                let submissionURL= submission.submittedFile

                 axios({
                    url: submissionURL,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
   
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', `${submission.name}.pdf`);
                     document.body.appendChild(fileLink);
   
                     fileLink.click();
                });


            }
    },
    
}

</script>


<style scoped>
    .title{
    font-size: 30px;
    color: #77C64A;
}
</style>