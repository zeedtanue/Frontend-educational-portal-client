<template>
    <v-container class="vuetify-layout">
        <div id="Login">
              
            <Notice-Carasoul/>
            
            <div class="image">
            <img src = "../../assets/school.jpg" class=image>
            </div>
            <div class="form">
               <v-card>

                   <v-card-title class="text-center justify-center py-6">
                       <h2 class="font-weight-bold display-2 basil--text">Log In </h2>
                   </v-card-title>
                   

                        <v-tabs
                        v-model="tab"
                        background-color="light-green accent-4"
                        centered
                        dark
                        icons-and-text
                        >
                        <v-tabs-slider></v-tabs-slider>

                        <v-tab href="#tab-1">
                            Students

                        </v-tab>

                        <v-tab href="#tab-2">
                            Teacher
                        </v-tab>

                        <v-tab href="#tab-3">
                            Parents
                        </v-tab>
                        
                        <v-tab href="#tab-4">
                            Admin
                        </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                        <v-tab-item
                            :value="'tab-1'"
                        >
                            <v-card flat>
                            <v-card-text><Student-Login/></v-card-text>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item
                            :value="'tab-2'"
                        >
                            <v-card flat>
                            <v-card-text><Teacher-Login/></v-card-text>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item
                            :value="'tab-3'"
                        >
                            <v-card flat>
                            <v-card-text><Parent-Login/></v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item
                            :value="'tab-4'"
                        >
                            <v-card flat>
                            <v-card-text><Admin-Login/></v-card-text>
                            </v-card>
                        </v-tab-item>
                        </v-tabs-items>
                    
                </v-card>
            </div>
        </div>
        
    </v-container>
</template>

<script>
import NoticeCarasoul from '../app/component/Notice/Anouncement.vue'
import StudentLogin from '../app/component/form/LoginFormStudent.vue';
import TeacherLogin from '../app/component/form/LoginFormTeacher.vue';
import ParentLogin from '../app/component/form/LoginFormParents.vue';

import AdminLogin from '../app/component/form/LoginFormAdmin.vue';


export default {

    name: "Login",
    components:{
        'Notice-Carasoul': NoticeCarasoul,
        'Student-Login':StudentLogin,
        'Teacher-Login':TeacherLogin,
        'Parent-Login':ParentLogin,

        'Admin-Login':AdminLogin,


    },

    beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    data(){
        return{
            tab: null,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      
            
        }
    },
    
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
        });
        },
         onChange(a, b, c) {
            console.log(a, b, c);
    },
    },
}
</script>

<style scoped>
    .vuetify-layout
    {
        background-color: #ffff;
    }
    .cor1
        {    
            
            height: 250px;
            border-radius: 50px;
            display: flex;
        }
    .ant-carousel
    {
        padding: 30px;
        max-width: 60%;
        display: block;
        margin: auto;
    }

    .ant-carousel >>> .slick  {
        color: black;
    }

    .image
    {
        
        height: 600px;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        position: static;
        z-index: 1;
        
    }

    .basil--text {
        color: #64dd17 !important;
    }

    .form
    {
        padding:30px;
        background: #fbfbfb;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        justify-content: center;
        position: absolute; 
        z-index: 10000;
        height: auto;
        top: 50% ;
        left: 30%; 
        max-width: 40%;
    }   

    @media (max-width: 992px){
        .form
        {
            padding:30px;
            background: #fbfbfb;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
            justify-content: center;
            position: absolute; 
            z-index: 1;
            height: auto;
            top: 70% ;
            left: 27%; 
        }
         .ant-carousel
        {
            padding: 30px;
            max-width: 80%;
            display: block;
            margin: auto;
        }
    }
    
    @media (max-width: 600px) {
         .form
        {
            background: #fbfbfb;
            z-index: 1;
            height: auto; 
            max-width: 50%;
        }
        .ant-carousel
        {
            padding: 30px;
            max-width: 100%;
            display: block;
            margin: auto;
        }
    }

    .ant-input-affix-wrapper
    {
        height: 50px;
        
    }
    #components-form-demo-normal-login .login-form 
    {
        max-width: 300px;
        height: 60px;
        background-color: white;
    }
    #components-form-demo-normal-login .login-form-forgot 
    {
        float: right;
        color: #A9F37F;
    }
    #components-form-demo-normal-login .login-form-button 
    {
    background-image: linear-gradient(to right, #A0E878, #77C64A);
    width: 100%;
    height: 50px;
    color: white;
    }
    .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 250px;
    line-height: 160px;
    background: #ffff;
    overflow: hidden;
    }
</style>