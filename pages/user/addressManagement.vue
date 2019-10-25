<template>
	<view class="pt20 pageshouhuer">
		<van-cell-group>
			<van-cell v-for="sd in 10">
				<view class="pr">
					<view class="dx_row tl">
						<view class="fz30 z3 user_nameert">
							小明
						</view>
						<view class="dx_col z3 fz30">
							13538190372
						</view>
					</view>
					<view class="z9 fz26 tl">
						地址地址地址地址地址地址地址地址地址地址
					</view>
					<van-icon name="edit" class="z9 fz40 bainjiwer" @tap="hf('/pages/user/AddAddress')"/>
				</view>
			</van-cell>
		</van-cell-group>
		<view class="pd bssderrtx">
			<van-button type="primary" @tap="hf('/pages/user/AddAddress')">添加收货地址</van-button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {},
		mounted() {}
	}
</script>
<style scoped>
	.user_nameert {
		width: 140upx;
	}

	.bainjiwer {
		position: absolute;
		right: 0upx;
		top: 20upx;
	}

	.pageshouhuer {
		padding-bottom: 160upx;
	}
	.bssderrtx{
		background: #FAFAFA;
		z-index: 1000;
		bottom: 0;
		padding-bottom: 40upx;
		padding-top: 20upx;
	}
</style>
