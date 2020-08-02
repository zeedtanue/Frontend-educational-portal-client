<template>
  <v-layout>

			<v-flex xs6 offset-xs3>
                <div>
				<v-card >
                    <v-text class="title">Add Student</v-text>
                    <div >
					<v-card-text class="form-right">
                        <v-form>
                        <v-row justify="space-between">
                            <div>
                                <v-flex >
                                    <img :src="register.imageUrl" height="150" width="150">
                                </v-flex>
                            <v-btn class="mb-3 " raised @click="onPickFile">Upload Image</v-btn>
                            <input 
                                type="file" 
                                style="display:none" 
                                @change="onFileSelected" 
                                ref="fileInput">
                                
                            </div>
                         <div>
                           <v-text-field
						v-model="register.name"
						label="Name"
                        :rules="register.inputRules"
						required
						>
						</v-text-field>

						<v-text-field
						v-model="register.email"
						label="Email"
                        :rules="register.inputRules"
						required
						>
						</v-text-field>

						<v-text-field
						v-model="register.userid"
						label="User ID"
                        :rules="register.inputRules"
						required

						>
						</v-text-field>
                           
                           </div> 
                         
						</v-row>
                        </v-form>
                    <v-btn class="mb-3 register-button" success @click='registerIt'>Register</v-btn>
					</v-card-text>
                    </div>
                    
					

				</v-card>
                </div>
			</v-flex>

		</v-layout>
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
					name:"",
					email:"",
                    userid:"",
                    imageUrl:"",
                    profileImage:"",
                    inputRules:[
                        v=> v.length>=4||"Minimum character is 4"
                    ]
				}
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
                this.register.profileImage=file
                console.log(this.register.imageUrl)

            },
            onPickFile(){
                this.$refs.fileInput.click()

            },
			registerIt() {
                let formData = new FormData();
                formData.append('profileImage', this.register.profileImage);
                formData.append('name', this.register.name);
                formData.append('email', this.register.email);
                formData.append('userid', this.register.userid);



                axios.post('http://164.90.230.104:5000/api/admin/student', formData,
                    {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(()=>{
                        alert(`${this.register.name} has been added to the student list`)
                        this.$router.push({ path: '/admin/students', params: { id: this.register.email } })
                        //this.$router.push('/admin/add-to-section', params: { userId: '123' });
                    }).catch((err)=>{
                        console.log(err);
                    });
			}
		}
    }
</script>

<style  scoped>
.title{
    font-size: 30px;
    padding: 35px;
    color: #77C64A;
}
.form-right{
    padding: 50px;
}
.register-button
 {
    background-image: linear-gradient(to right, #A0E878, #77C64A);
    margin: 10px;
    float: right;
    max-width: 80%;
    height: 50px;
    color: white;
    }

</style>
