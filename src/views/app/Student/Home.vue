<template>
    <div>
        <v-container>
            <v-row>
                <Drawer/>
                <h1>Home</h1>
            </v-row>
    <v-card >
        <Notice-Anaouncement/>
        </v-card>
        
        <!-- timeline-->
        
        <!-- class-->
        <h3>Class List</h3>
        <Class-List/>
        <!-- books-->
        <h3>Books</h3>
        <Book/>

        
        </v-container>
    </div>
</template>


<script>
import StudentDrawer from '../component/Drawer/StudentDrawer'
import NoticeCarasoul from '../component/Notice/Anouncement.vue'
import ClassList from '../component/ClassList.vue'
import Books from '../component/Books/BookList.vue'

export default {
    components:{
        'Drawer':StudentDrawer,
        'Notice-Anaouncement':NoticeCarasoul,
        'Class-List':ClassList,
        'Book':Books
    }
}
</script>

<style>
    
</style>