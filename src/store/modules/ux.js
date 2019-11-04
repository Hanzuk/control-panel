export const namespaced = true;

export const state = {
	sidebarIsOpen: false
};

export const actions = {
	openSidebar({ commit }) {
		commit('OPEN_SIDEBAR');
	},
	closeSidebar({ commit }) {
		commit('CLOSE_SIDEBAR');
	}
};

export const mutations = {
	OPEN_SIDEBAR(state) {
		state.sidebarIsOpen = true;
	},
	CLOSE_SIDEBAR(state) {
		state.sidebarIsOpen = false;
	}
};
