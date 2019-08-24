/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueFuse from 'vue-fuse'

Vue.use(VueMaterial)
Vue.use(VueFuse)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('index-persona', require('./components/IndexPersona.vue').default);
Vue.component('card-persona', require('./components/CardPersona.vue').default);
Vue.component('agregar-persona', require('./components/AgregarPersona.vue').default);
Vue.component('empty-persona', require('./components/EmptyPersona.vue').default);

window.EventBus = new Vue();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
