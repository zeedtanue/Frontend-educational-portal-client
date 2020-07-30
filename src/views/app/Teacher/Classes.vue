<template>
<v-container>
     <v-row>
           <Drawer/>
           <h1 class="title">Classes & Events</h1> 
        </v-row>
        <Class-List/>

</v-container>
</template>

<script>
import Drawer from '../component/Drawer/TeacherDrawer'
import ClassList from '../component/ClassListTeacher';
export default {
    components:{
        'Drawer':Drawer,
        'Class-List':ClassList
    }
}
</script>

<style lang="stylus" scoped>

</style>