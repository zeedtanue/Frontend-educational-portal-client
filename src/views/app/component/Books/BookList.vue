<template>
    <div>
    <v-card>
        <v-container >
    <v-row>

       <div class="student" v-for="item in books"
                :key="item.id">
      <router-link :to="`/book/${item.id}`">
              <div style="padding:20px">
                <p class="text-center">{{item.name}}</p>
                 <v-img height="200px"
                         width="180"
                         style="border-radious:25" 
                         v-bind:src="item.coverImage" 
                          
                         ></v-img>
                
                <p class="text-center">{{item.auther}}</p>
                <p class="text-center">Price: {{item.name}}</p>
                </div>
                </router-link>

            </div>





  
      
    </v-row>
  </v-container>
  </v-card>


    </div>
</template>


<script>
import axios from 'axios';
export default {
 data(){
        return{
            books:[]
        }
    },
    mounted(){
      const self = this;
        axios.get('http://46.101.188.213:5000/api/student/books')
            .then((res)=>{
                self.books=res.data.book;
                console.log("book:",res.data.book)
                
            })
            .catch((err)=>{
                console.log('Error: ',err)
            })
    }
    
}
</script>

<style scoped>
    
</style>