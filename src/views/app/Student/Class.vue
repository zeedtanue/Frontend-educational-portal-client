<template>
    <div>
        <v-container>
            <v-row>
                <Drawer/>
                <h1>Classes</h1>
            </v-row>
            <Class-List/>
            
            </v-container>        
    </div>
</template>

<script>
import ClassList from '../component/ClassList.vue'
import StudentDrawer from '../component/Drawer/StudentDrawer'

export default {
    components:{
        'Drawer':StudentDrawer,

        'Class-List':ClassList,

    }
}
</script>
