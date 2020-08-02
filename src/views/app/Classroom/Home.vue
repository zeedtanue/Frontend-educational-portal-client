<template>
<v-container>
    <v-title class="title">Classroom</v-title>

    <v-card>
         <v-card-title class="text-center justify-center py-6">
                       <h3 class="font-weight-bold display-1 basil--text">{{classDetails.subject}}</h3>
         </v-card-title>
        <div style="padding-left:30px; padding-right:30px">
         <v-row justify="space-between">
             <h1>Teacher's Name: {{classDetails.teacher.name}}</h1>
             <div>
             <h1>Section:{{classDetails.section.sectionName}}</h1>
             <h1>Total Students:{{classDetails.section.student.length}}</h1>

             </div> 
         </v-row>

         
         </div>
         <v-row>
         <div class="video-chat">
             <section>
                 <iframe width="560" height="315" src="https://www.youtube.com/embed/SecROmUZGIA?start=16" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </section>
         </div>
         <div>
         <div class="chat-box">
              
             <H1 style="padding:20px">Comment for the class</H1>
         </div>
         <div style="padding-left:50px">
             <v-row>
         <v-text-field
						v-model="register.title"
						label="Type Your Text"
						required
						></v-text-field>
                        <v-btn color="light-green" dark style="margin-top:20px; margin-left:10px">Send </v-btn>
             </v-row>
        </div>
         
         </div>
         </v-row>
         
    </v-card>
        <div style="padding:20px;">
            <v-row justify="space-between">
            <div>
                <v-title  class="title">Assignments</v-title>
            </div>
            <div>
            <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="light-green "
          dark
          v-bind="attrs"
          v-on="on"
          class="mx-4"
        >
          Add An Assignment
        </v-btn>
      </template>  
				<v-card >
                    <v-container>
                    <h1 class="title">Add New Assignment</h1>

                    <v-row justify="space-around">
                     <div>
                            
                            <div>
                                <input type="file"
                                    @change="onPDFSelected"
                                    >
                                
                            </div>
                        </div>
                       <div>




					<v-card-text>
                        <v-text-field
						v-model="register.title"
						label="Title"
						required
						></v-text-field>
                        <v-text-field
						v-model="register.mark"
						label="Mark"
						required
						></v-text-field>
                        <v-text-field
						v-model="register.details"
						label="Details"
						required
						></v-text-field>
                        
					</v-card-text>
                       </div>
</v-row>


                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click='registerIt'>Create</v-btn>
                        </v-card-actions>

					
					
</v-container>
				</v-card>
        </v-dialog>
  </v-row>

            </div>
            
            </v-row>
        </div>
    <v-card>
        <h1 style="padding:10px">Total Assignments: {{classDetails.assignments.length}}</h1>
        <div  v-for="item in classDetails.assignments" 
             :key="item._id"
             style="padding:30px">
             <router-link :to="`/assignment/${item._id}`">
             <v-card>
                 <div style="padding:30px">
                 <v-row justify="space-between"> 
                     <h1> Title: {{item.title}} </h1>
                     <div>
                      <h1> Mark: {{item.mark}} </h1>
                      <p>Total Submission: {{item.submission.length}}</p>
                    </div>
                 </v-row>
                 
                <p>Details: {{item.details}} </p>
                <div align="end">
                    <v-btn
                    @click="downloadAssignment(item)"
                        color="light-green "
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="mx-4"
                             >
                      Download
                     </v-btn>
                     
                </div>
                </div>

            
            </v-card>
             </router-link>

   
        </div>
        
    </v-card>

        <div style="padding:20px;">
            <v-row justify="space-between">
            <div>
            <v-title  class="title">Resources</v-title>
            </div>
            <div>
            <v-row justify="center">
    <v-dialog v-model="resourceDialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="light-green "
          dark
          v-bind="attrs"
          v-on="on"
          class="mx-4"
        >
          Add A Resource
        </v-btn>
      </template>  
				<v-card >
                    <v-container>
                    <h1 class="title">Add New Resource</h1>

                    <v-row justify="space-around">
                     <div>
                            
                            <div>
                                <input type="file"
                                    @change="onResourceSelected"
                                    >
                                
                            </div>
                        </div>
                       <div>




					<v-card-text>
                        <v-text-field
						v-model="resourceData.title"
						label="Title"
						required
						></v-text-field>
                        
                        <v-text-field
						v-model="resourceData.details"
						label="Details"
						required
						></v-text-field>
                        
					</v-card-text>
                       </div>
</v-row>


                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="resourceDialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click='resourceRegisterIt'>Create</v-btn>
                        </v-card-actions>

					
					
</v-container>
				</v-card>
        </v-dialog>
  </v-row>

            </div>






            </v-row>
        </div>
    <v-card>
        <h1 style="padding:10px">Total resources: {{classDetails.resource.length}} </h1>
        <div  v-for="item in classDetails.resource" 
             :key="item._id"
             style="padding:30px">
             <v-card>
                 <div style="padding:30px">
                     <v-row justify="space-between">
                         <h1>Title: {{item.title}}</h1>
                         <v-btn
                         @click="downloadResource(item)"
                           color="light-green "
                           dark
                           v-bind="attrs"
                           v-on="on"
                           class="mx-4"
                          >
                          Download
                          </v-btn>


                     </v-row>
                 
                 
                <p>Details: {{item.details}} </p>
                
                </div>

            
            </v-card>


   
        </div>
        
    </v-card>





</v-container>
    
</template>

<script>
import axios from 'axios'
export default {
     data() {
        return {
            classDetails:[],
            register:{

                    title:"",
                    mark:"",
                    details:"",
                    imageUrl:"",
                    coverImage:"",
                    assignmentFile:"",
                    inputRules:[
                        v=> v.length>=4||"Minimum character is 4"
                    ]
            },
            resourceData:{
                title:"",
                details:"",
                resourceFile:""

            },
            dialog: false,
            resourceDialog:false,
        }
    },
    components:{
    },
    mounted() {
        const self = this;
        axios.get(`http://164.90.230.104:5000/api/admin/class/${this.$route.params.id}`)
            .then((res)=>{
                self.classDetails=res.data.class;
                console.log(res.data.class)

            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    },
    methods:{
            resourceRegisterIt(){


                let token= localStorage.getItem('token');

                let formData = new FormData();
                formData.append('title', this.resourceData.title);
                formData.append('details', this.resourceData.details);
                formData.append('resourceFile', this.resourceData.resourceFile);

                axios.post(`http://164.90.230.104:5000/api/teacher/class/resource/${this.$route.params.id}`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': token

                        }
                    }
                    ).then(()=>{
                        this.dialog = false
                        alert(`${this.resourceData.title} Resource has been added to the class ${this.classDetails.subject}`)
                        this.$router.go(`/class/${this.$route.params.id}`)
                    }).catch((err)=>{
                        alert( err,'FAILURE!!');
                    });

            },

			registerIt() {
                let token= localStorage.getItem('token');

                let formData = new FormData();
                formData.append('title', this.register.title);
                formData.append('details', this.register.details);
                formData.append('mark', this.register.mark);
                formData.append('assignmentFile', this.register.assignmentFile);

                axios.post(`http://164.90.230.104:5000/api/teacher/class/task/${this.$route.params.id}`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': token

                        }
                    }
                    ).then(()=>{
                        this.dialog = false
                        alert(`${this.register.title} Assignment has been added to the class ${this.classDetails.subject}`)
                        this.$router.go(`/class/${this.$route.params.id}`)
                    }).catch((err)=>{
                        alert( err,'FAILURE!!');
                    });
            },
            onPickFile(){
                this.$refs.fileInput.click()

            },
            onFileSelected(event){
                
                const file= event.target.files[0]
                const fileReader= new FileReader()
                fileReader.addEventListener('load',()=>{
                    this.register.imageUrl=fileReader.result
                })
                fileReader.readAsDataURL(file)
                this.register.coverImage=file
                console.log(this.register.imageUrl)

            },
            onPDFSelected(event){
                
                const file= event.target.files[0]
                const fileReader= new FileReader()
                
                fileReader.readAsDataURL(file)
                this.register.assignmentFile=file

            },
            onResourceSelected(event){
                
                const file= event.target.files[0]
                const fileReader= new FileReader()
                
                fileReader.readAsDataURL(file)
                this.resourceData.resourceFile=file

            },
            downloadAssignment(assignment){
                let assignmentURL= assignment.assignmentFile

                 axios({
                    url: assignmentURL,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
   
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', `${assignment.title}.pdf`);
                     document.body.appendChild(fileLink);
   
                     fileLink.click();
                });





            },
            downloadResource(resource){
                let resourceURL= resource.resourceFile
                axios({
                    url: resourceURL,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
   
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', `${resource.title}.pdf`);
                     document.body.appendChild(fileLink);
   
                     fileLink.click();
                });

            }
		}
}
</script>

<style >
    .title{
    font-size: 30px;
    color: #77C64A;
}
.chat-box{
    
  width: 300px;
  border: 2px solid green;
  margin:30px;
  margin-left: 30px;
  min-height: 350px;
  max-height: 280px;
}
.video-chat{
    width: 600px;
    max-height:370px;
  border: 2px solid green;
  padding:20px;
  margin: 30px;;
  margin-left: 90px;

}
</style>