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
                    <router-link :to="`/admin/home`">
                   Home
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>


          <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/admin/section`">
                   Section
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>



          <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/admin/class`">
                    Class
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

        <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/admin/students`">
                    Students
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

        <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/admin/teachers`">
                    Teachers
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

        <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/admin/parents`">
                    Parents
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

        <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/admin/books`">
                    Books
                    </router-link>
                    </v-list-item-title>
                
        </v-list-item>

        <v-list-item>
              
                <v-list-item-title>
                    <router-link :to="`/admin/notice`">
                    All notice
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