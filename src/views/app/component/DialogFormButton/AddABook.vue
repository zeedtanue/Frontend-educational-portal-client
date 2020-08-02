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
          Add New Book
        </v-btn>
      </template>  
				<v-card >
                    <v-container>
                    <h1 class="title">Add New Class</h1>

                    <v-row justify="space-around">
                     <div>
                                <v-flex >
                                    <img :src="register.imageUrl" height="150" width="150">
                                </v-flex>
                            <v-btn class="mb-3 " raised @click="onPickFile">Upload Cover Image</v-btn>
                            <input 
                                type="file" 
                                style="display:none" 
                                @change="onFileSelected" 
                                ref="fileInput">
                            <div>
                                <input type="file"
                                    @change="onPDFSelected"
                                    >
                                
                            </div>
                        </div>
                       <div>




					<v-card-text>
                        <v-text-field
						v-model="register.name"
						label="Name"
						required
						></v-text-field>
                        <v-text-field
						v-model="register.subject"
						label="Subject"
						required
						></v-text-field>
                        <v-text-field
						v-model="register.author"
						label="Author"
						required
						></v-text-field>
                        <v-text-field
						v-model="register.summery"
						label="Summery"
						required
						></v-text-field>

						<v-text-field
						v-model="register.price"
						label="Price"
						required
						>
						</v-text-field>
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
			
</template>


<script>
    import axios from 'axios';
    // import View from "./component/core/View";
    //import DashboardCoreView from "./component/View";

    export default {
        name: "RegisterStudent",
        data() {
			return {
				register:{

                    author:"",
                    summery:"",
                    subject:"",
                    price:"",
                    name:"",
                    imageUrl:"",
                    coverImage:"",
                    bookFile:"",
                    inputRules:[
                        v=> v.length>=4||"Minimum character is 4"
                    ]
        },
        dialog: false,
			}
		},
		methods:{
			registerIt() {
                let formData = new FormData();
                formData.append('name', this.register.name);
                formData.append('author', this.register.author);
                formData.append('summery', this.register.summery);
                formData.append('price', this.register.price);
                formData.append('subject', this.register.subject);
                formData.append('coverImage', this.register.coverImage);
                formData.append('bookFile', this.register.bookFile);

                axios.post('http://46.101.188.213:5000/api/admin/book', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(()=>{
                        this.dialog = false
                        alert(`${this.register.name} book has been added to the library`)
                        this.$router.go('/admin/books')
                    }).catch(function(){
                        console.log('FAILURE!!');
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
                this.register.bookFile=file

            },
		}
    }
</script>

<style  scoped>

</style>
