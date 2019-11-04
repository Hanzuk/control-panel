import Vue from 'vue';
import Vuex from 'vuex';

import * as ux from './modules/ux';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { ux }
});
