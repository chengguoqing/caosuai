<!-- 个性签名 -->
<template>
	<view class="pt20"> 
		 <view class="bgff pd pt20 pm20" >
		 	<textarea class="ssd_deeett fz28"  placeholder="添加您的个性签名" />
			<view class="tr z9 fz26">
				0/30
			</view>
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
	.ssd_deeett{
		line-height: 1.4 !important;
	}
</style>
