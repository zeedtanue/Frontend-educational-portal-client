<template>
    <div>
        <v-container>
            <v-row justify="space-between">
                   <v-row>
                    <Drawer/>
                    <h1  class="title">All Books</h1>
                </v-row>
             
                <div>
                    <AddABook/>
                </div>
            </v-row>
        <BookList/>

       </v-container>
    </div>
</template>

<script>
import Drawer from '../../component/Drawer/AdminDrawer'
import BookList from '../../component/Books/BookList'
import AddABook from '../../component/DialogFormButton/AddABook'
export default {
    components:{
        'Drawer':Drawer,
        'BookList':BookList,
        'AddABook':AddABook
    }
    
}
</script>


<style  scoped>
.title{
    font-size: 30px;
    color: #77C64A;
}
</style>