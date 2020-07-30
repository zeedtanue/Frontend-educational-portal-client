<template>
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
          Post A Notice
        </v-btn>
      </template>  
				<v-card >
					<v-card-text>
                        <img :src="register.imageUrl" height="300" width="500">
                        <v-btn class="mb-3 " raised @click="onPickFile">Upload Image For Notice</v-btn>
                         <input 
                                type="file" 
                                style="display:none" 
                                @change="onFileSelected" 
                                ref="fileInput">
						<v-text-field
						v-model="register.name"
						label="Name"
						required
						>
						</v-text-field>
					</v-card-text>

					

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click='registerIt'>Post</v-btn>
                        </v-card-actions>

				</v-card>
        </v-dialog>
  </v-row>
			
</template>


<script>
    import axios from 'axios';
    // import View from "./component/core/View";
    //import DashboardCoreView from "./component/View";

    export default {
        name: "UploadNotice",
        data() {
			return {
				register:{
                    imageUrl:"",
					name:"",
                    cover:"",
                    
                },
                dialog: false,
			}
		},
		methods:{
            onFileSelected(event){
                 const file= event.target.files[0]
                const fileReader= new FileReader()
                fileReader.addEventListener('load',()=>{
                    this.register.imageUrl=fileReader.result
                })
                fileReader.readAsDataURL(file)
                this.register.cover=file
                console.log(this.register.imageUrl)
            },
            
            onPickFile(){
                this.$refs.fileInput.click()

            },
			registerIt() {
                let formData = new FormData();
                formData.append('cover', this.register.cover);
                formData.append('name', this.register.name);

                axios.post('https://creatixa-student-portal.herokuapp.com/api/admin/notice', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(()=>{
                        alert('Successfully updated notice')
                        this.$router.push('/admin/notice')
                    }).catch(function(){
                        console.log('FAILURE!!');
                    });
			}
		}
    }
</script>

<style  scoped>

</style>
