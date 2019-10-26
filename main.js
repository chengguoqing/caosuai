import Vue from 'vue'
import App from './App'
import tongzhi from './components/tongzhi.vue'
import fenxiang from './components/fenxiang.vue'
import upopup from './components/uni-popup/uni-popup.vue'
import {
	base
} from '@/static/js/base.js'
// #ifdef H5
import Vant from 'vant';
Vue.use(Vant);
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
// #endif
Vue.use(upopup)
import store from './store'
Vue.prototype.$store = store
Vue.prototype.hf = function(url,ty) {
	if(ty==2){
		uni.switchTab({
		    url: url
		});
		return
	}
	uni.navigateTo({
		url: url
	});
}
Vue.prototype.ht = function() {
	uni.navigateBack()
}
Vue.prototype.fuzhi = function() {
	uni.setClipboardData({
		data: '复制成功',
		success: function() {
			uni.showToast({
				title: "复制成功"
			})
		}
	});
}
Vue.prototype.onCopy = function() {
	uni.showToast({
		title: "复制成功"
	})
}
Vue.config.productionTip = false

Vue.component('tongzhi', tongzhi)
Vue.component('fenxiang', fenxiang)


App.mpType = 'app'
Vue.use(base)
const app = new Vue({
	store,
	...App
})
app.$mount()
