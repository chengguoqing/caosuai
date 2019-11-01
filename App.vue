<script>
	// #ifdef H5
		var wx = require('weixin-js-sdk');
	// #endif
	
	export default {
		methods: {
			async getconfig() {
				var sd_us = window.location.href
				let data = await this.get("weixin/init", {
					sd_us: sd_us
				})
				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: data.appId, // 必填，公众号的唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature, // 必填，签名，见附录1
					jsApiList: [
						'checkJsApi',
						'onMenuShareTimeline',
						'onMenuShareAppMessage',
						'onMenuShareQQ',
						'onMenuShareWeibo',
						'onMenuShareQZone',
						'hideMenuItems',
						'showMenuItems',
						'hideAllNonBaseMenuItem',
						'showAllNonBaseMenuItem',
						'translateVoice',
						'startRecord',
						'stopRecord',
						'onVoiceRecordEnd',
						'playVoice',
						'onVoicePlayEnd',
						'pauseVoice',
						'stopVoice',
						'uploadVoice',
						'downloadVoice',
						'chooseImage',
						'previewImage',
						'uploadImage',
						'downloadImage',
						'getNetworkType',
						'openLocation',
						'getLocation',
						'hideOptionMenu',
						'showOptionMenu',
						'closeWindow',
						'scanQRCode',
						'chooseWXPay',
						'openProductSpecificView',
						'addCard',
						'chooseCard',
						'openCard'
					]
				});
			}
		},
		mounted() {
			// this.load()
			// #ifdef H5
				this.getconfig()
			// #endif
			

		}
	}
</script>

<style>
	@import"static/css/base.css";
	@import"static/css/index.css";
	@import"static/css/uni.css";
	@import"static/css/iconfont.css";
	@import"static/css/style.css";
</style>
