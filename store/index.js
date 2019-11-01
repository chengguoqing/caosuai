import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		userinfo: uni.getStorageSync("userinfo") || ''
	},
	mutations: {
		logout(state) {
			state.userinfo = ""
		},
		setuserinfo(state, userinfo) {
			state.userinfo = userinfo
		},
	},
	actions: {
		getuserinfo: async function({
			commit,
			state
		}) {
			//获取openid
			return await new Promise((resolve, reject) => {
				if (state.userinfo) {
					resolve(state.userinfo)
				} else {
					uni.getProvider({
						service: 'oauth',
						success: function(res) {
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									uni.getUserInfo({
										provider: 'weixin',
										lang: "zh_CN",
										success: function(infoRes) {
											let ssdee = infoRes.userInfo
											ssdee.nickname = ssdee.nickName
											ssdee.headimgurl = ssdee.avatarUrl
											ssdee.dengji = 0
											ssdee.jifen = 0
											uni.setStorageSync('userinfo', ssdee)
											commit('setuserinfo', ssdee)
											resolve(ssdee);
										}
									});
								}
							});
						},
					})
				}
			})
		}
	}
})

export default store
