<template>
<v-container>
    <div>
        <v-row>
        <Drawer/>
        <h1 class="title">Home</h1>
        </v-row>
    <v-card >
        <Notice-Anaouncement/>
        </v-card>
        
        <!-- timeline-->
        <h3>Timeline</h3>
        
        <!-- class-->
        <h3>Class List</h3>
        <Class-List/>
        <!-- books-->
        <h3>Books</h3>
        <Book/>

        
        
    </div>
    </v-container>
</template>


<script>
import Drawer from '../component/Drawer/TeacherDrawer'
import NoticeCarasoul from '../component/Notice/Anouncement.vue'
import ClassList from '../component/ClassListTeacher.vue'
import Books from '../component/Books/BookList.vue'

export default {
    components:{
        'Drawer':Drawer,
        'Notice-Anaouncement':NoticeCarasoul,
        'Class-List':ClassList,
        'Book':Books
    }
}
</script>

<style>
.title{
    font-size: 30px;
    
    color: #77C64A;
}
    
</style>