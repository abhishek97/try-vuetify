/**
 * Created by championswimmer on 09/05/17.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import sidebar from './modules/sidebar';

Vue.use(Vuex);


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    sidebar
  }
});
