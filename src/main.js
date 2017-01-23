import Vue from "vue";
import {sync} from "vuex-router-sync";
import store from "./store";
import router from "./router";

import Navigator from "./Navigator.vue";

// Sync the store and the URL + parameters
// https://github.com/vuejs/vuex-router-sync
sync(store, router)

// store and router are automatically passed down to all children.
// So more components does not mean more boiler plate function passing
const navigator = new Vue({
    el: '#navigator',
    store,
    router,
    components: { Navigator },
    template: '<Navigator/>'
});
