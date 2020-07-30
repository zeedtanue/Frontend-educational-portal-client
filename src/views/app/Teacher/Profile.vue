<template>
        <v-container>
            <v-row>
                <Drawer/>
            <h1 class="title">Teacher Profile</h1> 
</v-row>
    <div>
       
       <Profile-Card/>
       <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>
       <Change-Passowrd/>
       <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>
       <Class-List/>
    </div>
    </v-container>
</template>


<script>
import Drawer from '../component/Drawer/TeacherDrawer'
import ClassList from '../component/ClassListTeacher';
import ProfileCard from '../component/teacher/ProfileCard';
import ChangePassword from '../component/teacher/ChangePassword';
export default {
    components:{
        'Drawer':Drawer,
        'Change-Passowrd':ChangePassword,
        'Profile-Card': ProfileCard,
        'Class-List':ClassList
    }
}
</script>

<style >
.title{
    font-size: 30px;
    color: #77C64A;
}
    
</style>