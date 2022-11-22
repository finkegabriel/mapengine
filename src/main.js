import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import API_KEY from '../config.json';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY.API_KEY,
    libraries: 'places',
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
