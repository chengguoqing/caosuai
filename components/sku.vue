<template>
	<view class="pd">
		<van-icon name="close" class="z6 df_deeeret" @tap="$emit('closese')" />
		<view class="dx_row">
			<view class="dnsg_sdd pd pt20 pm20">
				<image src="https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/63e5087d-cc8e-4756-a686-841010a0fc8d.png" mode="widthFix"></image>
			</view>
			<view class="dx_col pl20 sdf_eertwwrr">
				<view class="red fz26">
					￥<text class="fz32">1298.00</text>
				</view>
				<view class="fz26 z6">
					已选：4GB+64GB 极夜黑 1件
				</view>
			</view>
		</view>
		<view class="mt20">
			<text v-for="sd in guges" class="sdfdsf_dseer" :class="sd.cls" @tap="ssd_der(sd)">{{sd.name}}</text>
		</view>
		<view class="fz30 z3">
			颜色
		</view>
		<view class="mt20">
			<text v-for="sd in guges_b" class="sdfdsf_dseer" :class="sd.cls" @tap="ssd_der_b(sd)">{{sd.name}}</text>
		</view>
		<view class="fz30 z3">
			数量
		</view>
		<view class="mt20">
			<van-stepper />
		</view>
		<view class="pt20 pm20 dx_row sdfsdeerrtdee mt20">
			<view class="dx_col">
				<van-button type="info" class="aa" @tap="$emit('closese')">加入集市袋</van-button>
			</view>
			<view class="dx_col">
				<van-button type="primary" class="ab" @tap="$emit('closese')">立即购买</van-button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				guges: [{
					name: "4GB+64GB",
					cls: "act"
				}, {
					name: "64GB+128GB",
					cls: ""
				}, {
					name: "128GB+256GB",
					cls: ""
				}],
				guges_b: [{
					name: "极夜黑",
					cls: "act"
				}, {
					name: "极光色",
					cls: ""
				}]
			}
		},
		components: {},
		methods: {
			ssd_der(sd) {
				this.guges.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
			},
			ssd_der_b(sd) {
				this.guges_b.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
			},
		},
		mounted() {}
	}
</script>
<style>
	.sdfsdeerrtdee .aa button {
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}

	.sdfsdeerrtdee .ab button {
		border-top-left-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	/* #ifdef H5 */
		.sdfsdeerrtdee .aa  {
			border-top-right-radius: 0 !important;
			border-bottom-right-radius: 0 !important;
		}
		
		.sdfsdeerrtdee .ab  {
			border-top-left-radius: 0 !important;
			border-bottom-left-radius: 0 !important;
		}
	/* #endif */
</style>
<style scoped>
	.dnsg_sdd {
		background: #fff;
		border-radius: 10upx;
		margin-top: -100upx;
	}

	.dnsg_sdd image {
		width: 200upx;
		height: 200upx;
	}

	.sdf_eertwwrr {
		padding-top: 50upx;
	}

	.df_deeeret {
		font-size: 46upx;
		position: absolute;
		right: 15upx;
		top: 15upx;
	}

	.sdfdsf_dseer {
		background: #f8f8f8;
		color: #333;
		border-radius: 40upx;
		padding: 6upx 30upx;
		margin-right: 20upx;
		margin-bottom: 20upx;
		font-size: 26upx !important;
		display: inline-block;
		border: 1px solid #f8f8f8;
	}

	.sdfdsf_dseer.act {
		background: #fff;
		color: #ffc11c;
		border-color: #ffc11c;

	}
</style>
