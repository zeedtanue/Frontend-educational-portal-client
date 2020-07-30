<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon 
                v-bind="attrs"
                v-on="on"
                color="light-green accent-4"
                >
        </v-app-bar-nav-icon>
      </template>
      <v-card
        class="mx-auto overflow-hidden"
        height="500"
        width="344"
      >
      <v-list>
                    <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/teacher/home`">
                   Home
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>
         <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/teacher/profile`">
                    Profile
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>


          



          <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/teacher/class`">
                    Classes & Events
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

        <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/teacher/marking`">
                    Marking & Performance
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

       

        <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/teacher/books`">
                    Books
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

      </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>











<!---
<v-app-bar-nav-icon 
        
        color="deep-purple accent-4"
        @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>

        --->