 <template>
<div>
    <a-form
                        id="components-form-demo-normal-login"
                        :form="form"
                        class="login-form"
                        width="50%"
                        @submit="handleSubmit"
                    >
                        
                        <a-col>
                            <a-form-item>
                                <v-text-field
                                    v-model="login.userid"
                                    :counter="15"
                                    label="User ID"
                                    required
                                    ></v-text-field>
                                </a-form-item>
                        </a-col>
                        <a-col>
                            <a-form-item>
                                <v-text-field
                                    v-model="login.password"
                                    :counter="15"
                                    label="Password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show1 ? 'text' : 'password'"
                                    @click:append="show1 = !show1"
                                    required
                                    ></v-text-field>
                            </a-form-item>
                        </a-col>
                        <a-col>
                            <a-form-item>
                                <a-checkbox
                                    v-decorator="[
                                    'remember',
                                    {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    },
                                    ]"
                                >
                                    Remember me
                                </a-checkbox>
                            <a class="login-form-forgot" href="">
                                Forgot password
                            </a>
                            
                        
                            </a-form-item>
                            <v-btn class="mb-3 register-button" success @click='logIn'>Register</v-btn>
                        </a-col>
                    </a-form>
</div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                show1: false,
                show2: true,
                show3: false,
                show4: false,
                login:{
                    userid:"",
                    password:""
                }
            }
        },
        methods: {
            logIn(){
                let formData=new FormData()
                formData.append('userid', this.login.userid);
                formData.append('password', this.login.password);
                axios.post('https://creatixa-student-portal.herokuapp.com/api/parent/login', formData,
                    {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then((response)=>{
                        let token= response.data.token;
                        localStorage.setItem('token',token);
                        this.$router.push('parent/home')
                    }).catch((err)=>{
                        console.log(err);
                    });
            }
        },
    }
</script>

<style scoped>
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
    .register-button
 {
    background-image: linear-gradient(to right, #64dd17 , #77C64A );
    margin: 10px;
    width:360px;
    height: 50px;
    color: white;
    }

</style>
