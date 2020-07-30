<template>

    <div>
        <v-container>
            <div style="float:left">
            <Drawer/></div>
        <Profile/>
        <div style="padding:30px">

        </div>
        <Change-Password/>
        </v-container>
    </div>
</template>

<script>
import Profile from '../component/student/ProfileCard'
import ChangePassword from '../component/student/ChangePassword'
import StudentDrawer from '../component/Drawer/StudentDrawer'

export default {
    components:{
        'Profile':Profile,
        'Change-Password':ChangePassword,
        'Drawer':StudentDrawer,

    }
}
</script>

<style  scoped>

</style>