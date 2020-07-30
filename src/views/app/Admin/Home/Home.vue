<template>
    <div>
        <v-container>
            <v-row justify="space-between">
                <div>
                    <Drawer/>
                    
                </div>
                <div>
                    <Upload-Notice/>
                </div>

            </v-row>
            <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>
                            
    
        <Notice-Carasoul/>
        
        <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>
        <v-card>
            <div>
                <div class="text-color">
                <v-btn  color="light-green" text @click="alert">Edit</v-btn></div>
             <v-card-title class="text-center justify-center py-6">
                       <h2 class="font-weight-bold display-1 basil--text">Your School</h2>
                   </v-card-title>
                   
                   </div>
                   <v-row justify="center">
                       <div class="school--image">
                        
                            <v-img
                            
                            height="100px"
                            width="100px" 
                            src="data:image/jpeg;base64,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" aspect-ratio="1.7"></v-img>
                       </div>
                       <div>
                           <p class="text">Bangladesh Bank Colony High School</p>
                           <p class="text">Address: Chattogram, Bangladesh
</p>

                       </div>
                   </v-row>
        </v-card>
         <v-divider
                class="mx-4"
                :inset="inset"
                vertical
            ></v-divider>
        <v-card>
            <div>
                <div class="text-color">
                <v-btn  color="light-green" text @click="alert">Edit</v-btn></div>
             <v-card-title class="text-center justify-center py-6">
                       <h2 class="font-weight-bold display-1 basil--text">TimeLine For The Day</h2>
                   </v-card-title>

                <v-card
    class="mx-auto"
    max-width="500"
  >
    

    <v-container fluid>
      <v-row >
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

            </div>
        </v-card>        
        </v-container>
    </div>
</template>


<script>
import NoticeCarasoul from '../../component/Notice/Anouncement' 
import AddANotice from '../../component/Notice/UploadNoticeForm'
import Drawer from '../../component/Drawer/AdminDrawer'
export default {
    components:{
        'Notice-Carasoul': NoticeCarasoul,
        'Upload-Notice':AddANotice,
        'Drawer':Drawer
    },
    data: () => ({
      cards: [
        
        { title: '3 Classes Today', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Teacher Meeting', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),
}
</script>

<style scopped>
    .school--image{
        padding-right: 80px;
        padding-bottom: 20px;
    }
    .text-color{
        float:right;
    }
    .text{
        font-weight: bold;
        font-size: 16px;
        padding-left: 30px;
    }
</style>