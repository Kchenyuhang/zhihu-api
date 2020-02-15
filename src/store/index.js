import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: '999',
		baseUrl: 'http://localhost:8080/api',
		user: {
			id: 1,
			url: 'xingchen9',
			nickname: '星辰',
			avatar: 'https://student-manage99.oss-cn-hangzhou.aliyuncs.com/avatar/K.jpg'
		}
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
		},
		setUser(state, data) {
			state.user = data;
		}
	},
	getters: {
	},
	actions: {
	},
	modules: {}
})
