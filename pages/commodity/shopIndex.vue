<template>
	<view>
		<!-- #ifdef MP-WEIXIN || APP-PLUS -->
		<view class="sdfsdf_deert" v-if="scrollTop>=180"></view>
		<!-- #endif -->
		<image src="../../static/img/left_b.png" @tap="ht()" class="kefyseeerrtx" mode="widthFix" v-if="scrollTop>=180"></image>
		<image src="../../static/img/left.png" @tap="ht()" class="kefyseeerrtx" mode="widthFix" v-else></image>
		<image src="../../static/img/libasee.jpg" class="libasee" mode="widthFix"></image>
		<view class="ssd_deertswe">
			<view class="hhgd_deert pd pt20 pm20 dx_row">
				<image src="../../static/img/neiku.jpg" class="user_iconseer"></image>
				<view class="dx_col pl20">
					<view class="dx_row">
						<view class="dx_col">
							<view class="fz30 z3 dian mt20">
								独行工匠
							</view>
							<view class="z9 fz24 ">
								折扣码：kfdffggg 
								<!-- #ifdef APP-PLUS || MP-WEIXIN -->
									<text class="dx_fuzhieer cz" @click="fuzhi" >复制</text>
								<!-- #endif -->
							
								<!-- #ifdef H5 -->
									<text class="dx_fuzhieer cz"  v-clipboard:copy="message" v-clipboard:success="onCopy">复制</text>
								<!-- #endif -->
							</view>
						</view>
						<view class="f_b mt40">
							<text class="dx_fuzhieer cz ab">+ 关注</text>
						</view>
					</view>
				</view>
			</view>

			<view class="dx_row dfg_deertxw bgff cen">
				<view class="dx_col">
					<view class="fz34 z3">
						32
					</view>
					<view class="fz26 z9">
						关注
					</view>
				</view>
				<view class="dx_col">
					<view class="fz34 z3">
						32
					</view>
					<view class="fz26 z9">
						粉丝
					</view>
				</view>
				<view class="dx_col">
					<view class="fz34 z3">
						32
					</view>
					<view class="fz26 z9">
						赞与收藏
					</view>
				</view>
			</view>
			<scroll-view scroll-x="true" class="ddf_jhj_eet pt20">
				<view class="dx_jz">
					<view class="f_b sdfds_jj_dr pr" :class="sd.cls" v-for="(sd,idx) in caidan" @tap="qiehuan(sd,idx)">
						{{sd.name}}
					</view>
				</view>
			</scroll-view>

			<view class="mt20 pd dsf_deeerwertx">
				<wntj :istou="true"></wntj>
			</view>
		</view>
	</view>
</template>
<script>
	import wntj from "@/components/wntj"
	export default {
		data() {
			return {
					message:"复制成功",
				idx_e: 0,
				scrollTop: "",
				caidan: [{
					cls: "act",
					name: "超级爆款"
				}, {
					cls: "",
					name: "为你精选"
				}, {
					cls: "",
					name: "五谷稻香"
				}, {
					cls: "",
					name: "瀑布流"
				}]
			}
		},
		components: {
			wntj
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
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
	.libasee {
		position: fixed;
		left: 0;
		width: 100%;
		top: 0;
		height: 300upx !important;
	}

	.ssd_deertswe {
		padding-top: 200upx;
		position: relative;
	}

	.hhgd_deert {
		background: #fff;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
	}

	.user_iconseer {
		width: 140upx;
		height: 140upx;
		border-radius: 50%;
	}

	.dx_fuzhieer {
		border-radius: 40upx;
		padding: 5upx 30upx;
		margin-left: 10upx;
		color: #999;
		border: 1px solid #999;
	}

	.dx_fuzhieer.ab {
		color: #FF384F;
		border-color: #FF384F;
		font-size: 30upx;
		padding: 8upx 30upx;
	}

	.dfg_deertxw view {
		line-height: 1.4 !important;
	}

	.ddf_jhj_eet {
		background: #fff !important;
		top: 120upx;
		/* #ifdef H5 */
		top: 0upx;
		padding-top: 100upx;
		/* #endif */
		/* #ifdef APP-PLUS */
		top: 100upx;
		/* #endif */
	}
	.dsf_deeerwertx{
		background: #FAFAFA;
	}
	.sdfds_jj_dr {
		color: #333;
	}

	.sdfds_jj_dr.act {
		color: #ffc11c;
	}

	.sdfds_jj_dr.act:after {
		background: #ffc11c;
	}

	.sdfsdf_deert {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 120upx;
		background: #fff;
		z-index: 1000;
		/* #ifdef APP-PLUS */
			height: 100upx;
		/* #endif */
	}
	.kefyseeerrtx{
		position: fixed;
		left: 20upx;
		width: 40upx;
		top: 60upx;
		z-index: 10000;
	}
</style>
