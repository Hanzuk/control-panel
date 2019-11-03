export const namespaced = true;

export const state = {
	isOpen: false
};

export const actions = {
	open({ commit }) {
		commit('OPEN_SIDEBAR');
	},
	close({ commit }) {
		commit('CLOSE_SIDEBAR');
	}
};

export const mutations = {
	OPEN_SIDEBAR(state) {
		state.isOpen = true;
	},
	CLOSE_SIDEBAR(state) {
		state.isOpen = false;
	}
};
