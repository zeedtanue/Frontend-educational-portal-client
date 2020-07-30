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
          Add New
        </v-btn>
      </template>  
				<v-card >
                    <h1 class="title">Add New Class</h1>
					<v-card-text>
						<v-text-field
						v-model="register.subject"
						label="Subject Name"
						required
						>
						</v-text-field>
					</v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click='registerIt'>Create</v-btn>
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
        name: "RegisterStudent",
        data() {
			return {
				register:{
					subject:"",
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
                formData.append('subject', this.register.subject);

                axios.post('https://creatixa-student-portal.herokuapp.com/api/admin/class', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(()=>{
                        this.dialog = false
                        alert(`${this.register.subject} has been added`)
                        
                    }).catch(function(){
                        console.log('FAILURE!!');
                    });
			}
		}
    }
</script>

<style  scoped>

</style>
