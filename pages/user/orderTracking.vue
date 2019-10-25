<template>
	<view>
		<view class="pd pt20 pm20 dx_row bgff">
			<view class="dx_col">
				<view class="fz30 z3">
					运单号：JDB00410911927
				</view>
				<view class="fz30 z3">
					国内承运人：京东快递
				</view>
			</view>
			<view class="tr pt10">
				<text class="sdfddf_deer">联系客服</text>
			</view>
		</view>

		<view class="mt20 sdfsf_deerrtwe"> 
			<van-steps :steps="steps" :active="active" direction="vertical" active-color="#ffc11c" />
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				active: 0,
				steps: [{
						text: '已签收',
						desc: '您的订单已签收，感谢您在京东购物，欢迎再次光临 \r\n2019-09-24'
					},
					{
						text: '步骤二',
						desc: '描述信息\r\n2019-09-24'
					},
					{
						text: '步骤三',
						desc: '描述信息\r\n2019-09-24'
					},
					{
						text: '步骤四',
						desc: '描述信息\r\n2019-09-24'
					}
				]
			}
		},
		components: {},
		methods: {},
		mounted() {}
	}
</script>
<style>
	.sdfsf_deerrtwe .van-icon-checked{
		font-size: 40upx !important;
		margin-left: 10upx;
	}
</style>
<style lang='scss' scoped>

</style>
