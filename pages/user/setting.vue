<template>
	<view class="pt20">
		<van-cell-group>
			<van-cell title="个人资料" is-link url="/pages/user/information"></van-cell>
			<van-cell title="账户和安全" is-link></van-cell>
			<van-cell title="认证银行卡" is-link></van-cell>
			<van-cell title="清理缓存" value="224.32M"></van-cell>
			<van-cell title="关于我们" is-link></van-cell>
			<van-cell title="软件版本" value="1.3.0"></van-cell>
			<van-cell title="给我打分" is-link></van-cell>
		</van-cell-group>
		<view class=" bssderrtx bgff red">
		退出登录
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		components: {

		},
		methods: {

		},
		mounted() {

		}
	}
</script>
<style scoped>
	.bssderrtx{
		height: 90upx;
		line-height: 90upx;
		font-size: 30upx;
		text-align: center;
	}
</style>
