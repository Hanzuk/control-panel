export const namespaced = true;

export const state = {
	open: false
};

export const actions = {
	toggleSidebar({ commit }) {
		commit('CHANGE_OPEN');
	}
};

export const mutations = {
	CHANGE_OPEN(state) {
		state.open = !state.open;
	}
};
