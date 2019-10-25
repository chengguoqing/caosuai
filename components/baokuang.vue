<template>
	<view>
		<view class="mb20 bgff pr pd pt20 pm20 baokuanglist dx_row" v-for="sd in 10" @tap="hf('/pages/commodity/details')">
			<image src="/static/img/neiku.jpg" class="case_kjder cz" mode="widthFix"></image>
			<view class="dx_col pl20">
				<view class="dianer fz30 z3 biaotiser">
					标题标题标题标题标题标题标题标题标题标题标题标题标题标题
				</view>
				<view class="dfds_deeert">
					<view class="fz26 z3 del mt5">
						49.90
					</view>
					<view class="fz28 z9 mt5">
						月销 6538
					</view>
					<view class="fz30 z3 mt10">
						<view class="red f_b">
							￥<text class="fz36 ">29.00</text>
						</view>
						<text class="ml10">抢购价</text>
					</view>
				</view>
			</view>
			<image src="../static/img/qianggou.png" mode="widthFix" class="qiangggoue"></image>
			<image src="../static/img/baokuang.png" mode="widthFix" class="qiangggoue ab"></image>
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
	.baokuanglist {
		border-radius: 10upx;
	}

	.case_kjder {
		width: 220upx;
		height: 220upx;
		border-radius: 10upx;
	}

	.biaotiser {
		line-height: 1.3;
		height: 76upx;
	}

	.dfds_deeert view {
		line-height: 1.4 !important;
	}
	.qiangggoue{
		position: absolute;
		right: 0;
		bottom: 20upx;
		width: 143upx;
	}
	.qiangggoue.ab{
		width: 88upx;
		right:none;
		bottom: none;
		left: 20upx;
		top: 0;
		width: ;
	}
</style>
