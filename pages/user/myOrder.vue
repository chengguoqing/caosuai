<template>
	<view>
		<view class="dx_row cen bgff dsd_dfd_seer yy">
			<view class="dx_col  pr pt20 pm20 dsf_deeertwe" :class="sd.cls" v-for="(sd,idx) in caidan" @tap="qiehuan(sd,idx)">
				{{sd.name}}
			</view>
		</view>
		<view v-if="ssde_dert">
			<view class="mt20 bgff pd pt20 pm20 yy" v-for="(sd,idx) in listde">
				<view class="pm20 fz26 dx_row">
					<view class="dx_col ">
						订单编号:{{sd.oderid}}
					</view>
					<view class="tr">
						<van-icon name="delete" class="fz40 z9" @tap="delwuwud(sd.id,idx)" />
					</view>
				</view>
				<view class="dx_row">
					<image :src="sd.urlfm" class="neuhgg_deer" mode="widthFix"></image>
					<view class="dx_col pl20">
						<view class="">
							<view class=" dianer fz28 z3 dsfdsf_deeer">
								{{sd.name}}
							</view>
							<view class="z9 fz24 " v-if="sd.yixuan">
								规格:{{sd.yixuan}}
							</view>
							<view class="pl20  fz28 ye"><text class="fz32">￥{{sd.jiagegm}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="mt20 tr">
					<text class="sdfddf_deer ab" v-if="sd.zftypecode == 1" @tap="quzifu(sd.oderid)">去支付</text>
				</view>
			</view>
			<view class="" v-if="listde.length>10">
				<view class="cen z9 btm mt20 pt20 pm20" v-if="iseer">
					<image src="../../static/img/loading.gif" class="lossderrf cz" mode="widthFix"></image>
					<text class="cz">加载中。。。</text>
				</view>
				<view class="cen z9 btm mt20 pt20 pm20" v-if="jiadser">
					<text class="cz">我是有底线的</text>
				</view>
			</view>

			<view class="cen dsfdsfdedwwe mt100" v-if="listde.length<=0">
				<image src="/static/img/no_msg.png" class="no_msg" mode="widthFix"></image>
				<view class="fz28 z9">
					暂无数据
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				iseer: false,
				jiadser: false,
				ssde_dert: false,
				totalPages: 0,
				page: 1,
				idx_e: 0,
				listde: [],
				zftypecode: '',
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
					name: "退款/售后"
				}]
			}
		},
		components: {},
		onPullDownRefresh() {
			this.listde = []
			this.page = 1
			this.getlist()
		},
		onReachBottom() {
			this.iseer = true
			this.page++
			if (this.page > this.totalPages) {
				this.iseer = false
				this.jiadser = true
				return
			}
			this.getlist()
		},
		onLoad(e) {
			this.caidan.map(a => {
				a.cls = ""
			})
			try {
				this.caidan[e.idx].cls = "act"
				this.idx_e = e.idx
				this.zftypecode = e.idx
			} catch (e) {

			}
			this.getlist()
		},
		methods: {
			qiehuan(e, idx) {
				this.caidan.map(a => {
					a.cls = ""
				})
				this.zftypecode = idx == 0 ? '' : idx
				e.cls = "act"
				this.idx_e = idx
				this.listde = []
				this.page = 1
				this.ssde_dert=false
				uni.showLoading({
					title:"操作中..."
				})
				this.getlist()
			},
			quzifu(oderid) {
				this.hf('/pages/commodity/querendingdan?oderid=' + oderid)
			},
			async delwuwud(id, idx) {
				uni.showLoading({
					title: "操作中"
				})
				await this.post("csscs/delwuwud", {
					id: id
				})
				this.listde.splice(idx, 1);
				uni.showToast({
					title: "删除成功"
				})
			},
			async getlist() {
				let sddee = await this.post("csscs/getdingdan", {
					page: this.page,
					zftypecode: this.zftypecode
				})
				this.ssde_dert = true
				this.totalPages = sddee.totalPages
				sddee.data.map(a => {
					this.listde.push(a)
				})
				uni.stopPullDownRefresh();
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
	}
</style>
