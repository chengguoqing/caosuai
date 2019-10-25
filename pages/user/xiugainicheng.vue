<template>
	<view class="pt20">
		<van-cell-group>
			<van-field label="昵称" placeholder="请输入用户名" />
		</van-cell-group>
		<view class="pd z9 fz24 mt10">
			限1-16个字符
		</view>
		<view class="pd bssderrtx">
			<van-button type="primary" @tap="fanhui">确定</van-button>
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
			fanhui(){
				uni.navigateBack();
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>

</style>
