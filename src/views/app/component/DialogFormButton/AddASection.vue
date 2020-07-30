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
          Create A Section
        </v-btn>
      </template>  
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
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click='registerIt'>Post</v-btn>
                        </v-card-actions>

					</v-card-text>
                    </div>
                    
					

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
					sectionName:"",
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
                formData.append('sectionName', this.register.sectionName);



                axios.post('http://localhost:5000/api/admin/section', formData,
                    {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(()=>{
                        this.dialog = false
                        alert(`${this.register.sectionName} Section has been added`)
                        
                    }).catch(function(){
                        console.log('FAILURE!!');
                    });
			}
		}
    }
</script>

<style  scoped>

</style>
