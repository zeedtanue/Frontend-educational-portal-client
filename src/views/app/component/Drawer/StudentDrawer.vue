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
                    <router-link :to="`/student/home`">
                   Home
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>
         <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/student/profile`">
                    Profile
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>


          



          <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/student/class`">
                    Classes & Events
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

        <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/student/performance`">
                    Performance
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

       

        <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/student/books`">
                    Books
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>
                <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/student/payment`">
                    Payment
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