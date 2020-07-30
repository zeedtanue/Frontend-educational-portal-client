<template>
    <div>
        <v-container>
             <v-row>
                <Drawer/>
                <h1 class="title">Books</h1>
            </v-row>  
            <Books/>
        </v-container>
    </div>
</template>

<script>
import StudentDrawer from '../component/Drawer/StudentDrawer'
import Books from '../component/Books/BookList'
export default {
    
    components:{
        'Drawer':StudentDrawer,
        'Books':Books
    },
}
</script>