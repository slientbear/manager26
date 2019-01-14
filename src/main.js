import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/base.css';

import VueAxios from './lib/vue-axios';
Vue.use(VueAxios);

import router from './lib/router';

import myBreadcrumb from './components/myBreadcrumb.vue';
Vue.component('myBreadcrumb',myBreadcrumb)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

new Vue({
  el:'#app',
  router,
  render: h => h(App),
});
