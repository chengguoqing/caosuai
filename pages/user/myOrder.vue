<template>
	<view>
		<view class="dx_row cen bgff dsd_dfd_seer yy">
			<view class="dx_col  pr pt20 pm20 dsf_deeertwe" :class="sd.cls" v-for="(sd,idx) in caidan" @tap="qiehuan(sd,idx)">
				{{sd.name}}
			</view>
		</view>
		<view class="mt20 bgff pd pt20 pm20 yy" v-for="sd in 10" @tap="hf('pages/user/orderTracking')">
			<view class="dx_row">
				<view class="dx_col">
					<van-icon name="shop-o" class="fz32 z3 cz" />
					<text class="fz28 z3 cz shope_name">独行工匠</text>
					<van-icon name="arrow" class="fz28 z6 cz" />
				</view>
				<view class="tr">
					<van-icon name="delete" class="fz32 z9" />
				</view>
			</view>
			<view class="dx_row">
				<image src="../../static/img/gangcai.jpg" class="neuhgg_deer" mode="widthFix"></image>
				<view class="dx_col pl20">
					<view class="dx_row">
						<view class="dx_col dianer fz28 z3 dsfdsf_deeer">
							标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
						</view>
						<view class="pl20 pt50 fz28 tr">
							￥<text class="fz32">29</text>
						</view>
					</view>
				</view>
			</view>
			<view class="mt20 tr">
				<text class="sdfddf_deer">评价服务</text>
				<text class="sdfddf_deer ab">再次购买</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				idx_e: 0,
				caidan: [{
					cls: "act",
					name: "全部订单"
				}, {
					cls: "",
					name: "待付款"
				}, {
					cls: "",
					name: "待发货"
				}, {
					cls: "",
					name: "待收货"
				}, {
					cls: "",
					name: "待评价"
				}]
			}
		},
		components: {},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onLoad(e) {
			this.caidan.map(a => {
				a.cls = ""
			})
			this.caidan[e.idx].cls = "act"
			this.idx_e = e.idx
		},
		methods: {
			qiehuan(e, idx) {
				this.caidan.map(a => {
					a.cls = ""
				})
				e.cls = "act"
				this.idx_e = idx
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.dsf_deeertwe.act {
		color: #333;
	}

	.dsf_deeertwe.act:after {
		content: ' ';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 50upx;
		height: 4upx;
		background: #ffc11c;
	}

	.dsd_dfd_seer {
		position: sticky;
		left: 0;
		top: 0;
		z-index: 1000;
	}

	.shope_name {
		margin-left: 10upx;
		position: relative;
		top: -5upx;
		margin-right: 5upx;
	}

	.neuhgg_deer {
		width: 160upx;
		height: 160upx !important;
		border-radius: 10upx;
		border: 1px solid #FAFAFA;
	}

	.dsfdsf_deeer {
		line-height: 1.4;
		padding-top: 40upx;
	}


</style>
