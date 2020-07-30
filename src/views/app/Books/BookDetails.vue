<template>
    <div>
        <!-- profile info with section -->
        <v-container>
        <v-card style="padding:30px;">
             <v-card-title class="text-center justify-center py-6">
                       <h3 class="font-weight-bold display-1 basil--text">{{book.name}}</h3>
                   </v-card-title>

            <v-row justify="center">
            <div style="padding-right:80;">   
            <v-img 
                        height="100px"
                        width="100px"
                         style="border-radious:25" 
                         class="rounded-circle"  
                         v-bind:src="book.coverImage" 
                          
                         ></v-img>
            </div>
                         
                     
                <div style="padding-left:80px;">
                     <p class="text"> Name: {{book.name}}</p>
                    
                    <p class="text">Author: {{book.author}}</p>
                    </div>         
                
                </v-row>
                <div>
                    <v-row align="center" justify="end">
                            <v-btn  :to="`/admin/book/${book.id}`">
                                <v-icon color="#77C64A" left>mdi-content-save-edit</v-icon>
                            </v-btn>
                            <v-btn>
                                <v-icon color="#77C64A" left  @click="deleteUser">mdi-delete</v-icon>
                            </v-btn>
                        </v-row> 
                </div>
        </v-card>
            
            
        
              
        <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>

           </v-container>     
        <!-- attendance by class -->

        
            
        <!-- Performance  -->


    </div>
</template>

<script>



import axios from 'axios';
export default {
    name:"User",
    data() {
        return {
            
            book:[],
            
        }
    },
    mounted() {
        const self = this;
        axios.get(`http://localhost:5000/api/admin/book/${this.$route.params.id}`)
            .then((res)=>{
                self.book=res.data.book;
                
                console.log('Data: ',res.data.book);
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
       
    },
    
}
</script>

<style scopped>
    .text{
        font-weight: bold;
    }
</style>