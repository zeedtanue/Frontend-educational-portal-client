import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import ReadMore from 'vue-read-more';
import axios from 'axios'
import Vuetify from 'vuetify';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
window.axios=axios
Vue.use(ReadMore);
Vue.use(Antd);
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,
  components: { App }
}).$mount('#app')

