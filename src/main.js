import Vue from "vue";
import { Tabs, Tab } from "vue-tabs-component";
import vmodal from "vue-js-modal";
import Vuelidate from "vuelidate";
import VueCarousel from "vue-carousel";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component("tabs", Tabs);
Vue.component("tab", Tab);
Vue.use(vmodal);
Vue.use(Vuelidate);
Vue.use(VueCarousel);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
