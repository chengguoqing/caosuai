<!-- 支付状态 -->
<template>
	<view class=" pt20">
		<view class="bgff btm bbm pt40 pm40 pd cen">
			<van-icon name="checked" class="ls dsfdsf_eer cz" />
			<text class="fz40 z6 b cz ml20">支付成功</text>
		</view>
		<van-cell-group class="mt20">
			<van-cell title="交易方式" value="微信支付" />
			<van-cell title="下单时间" :value="sd.addtime" />
			<van-cell title="交易单号" :value="sd.jydh" />
		</van-cell-group>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				jydh: "",
				sd: ""
			}
		},
		components: {

		},
		methods: {
			async geizhs() {
				this.sd = await this.post("csscs/huoquzhifu", {
					jydh: this.jydh
				})
			}
		},
		onLoad(e) {
			this.jydh = e.zfzt
			this.geizhs()
		}
	}
</script>
<style scoped>
	.dsfdsf_eer {
		font-size: 100upx;
	}
</style>
