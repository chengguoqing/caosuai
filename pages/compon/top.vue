<template>
	<view class="dxtttop dx_row pd yy">
		<!-- <view class="ssddeleft fz26 dian pr">
			<image src="../../static/img/map.png" mode="widthFix" class="mansedert cz"></image> 深圳市 <image src="../../static/img/down.png"
			 class="downiconde" mode="widthFix"></image>
		</view> -->
		<view class="dx_col pd">
			<view class="ssouidwxe" @tap="hf('search')">
				<image src="../../static/img/sousuo.png" class="sserrtxe cz" mode="widthFix"></image>
				请输入商品名称、型号
			</view>
		</view>
		<view class="dssd_eergx cen" @tap="saoma">
			<image src="../../static/img/saoyisao.png" mode="widthFix" class="saoyieerr cz"></image>
			<view class="fz24 z6">
				扫一扫
			</view>
		</view>
	</view>
</template>
<script>
	// #ifdef H5
	var wx = require('weixin-js-sdk');
	// #endif

	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			saoma() {
				// #ifdef H5
				wx.scanQRCode({
					success: function(res) {
						var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
					}
				});
				// #endif
				// #ifdef APP-PLUS || MP-WEIXIN
					uni.scanCode({
					    success: function (res) {
					    }
					});
				// #endif

			}
		},
		mounted() {}
	}
</script>
<style lang='scss' scoped>

</style>
