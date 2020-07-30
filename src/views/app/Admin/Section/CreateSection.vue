<template>
  <v-layout>

			<v-flex xs6 offset-xs3>
                <div>
				<v-card >
                    <v-text class="title">Create Section</v-text>
                    <div >
					<v-card-text class="form-right">
                        <v-form>
                        
                       <div>
                       
						<v-text-field
						v-model="register.sectionName"
						label="Section Name"
                        :rules="register.inputRules"
						required

						>
						</v-text-field>
                           
                           </div> 
                         
						
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
					sectionName:"",
                    inputRules:[
                        v=> v.length>=4||"Minimum character is 4"
                    ]
				}
			}
		},
		methods:{
			registerIt() {
                let formData = new FormData();
                formData.append('sectionName', this.register.sectionName);



                axios.post('http://localhost:5000/api/admin/section', formData,
                    {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(()=>{
                        this.$router.push('/admin/section')
                    }).catch(function(){
                        console.log('FAILURE!!');
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
