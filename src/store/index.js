import Vue from 'vue';
import Vuex from 'vuex';

import * as sidebar from './modules/ux/sidebar';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { sidebar }
});
