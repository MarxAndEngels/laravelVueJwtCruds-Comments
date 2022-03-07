import Vue from 'vue';
import router from './router';
require('./bootstrap');
import Index from './components/Index';

import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
Vue.use(VueTelInput, [{allCountries: ['ru']}]);

//цветной код
import VueCodeHighlight from 'vue-code-highlight';

Vue.use(VueCodeHighlight) //registers the v-highlight directive
//цветной код

const app = new Vue({
    el: '#app',
    components:{
        Index
    },
    router
});



