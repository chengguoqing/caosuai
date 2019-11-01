<template>
	<view class="user_page pm20">
		<view class="pr sd_jh_deer pd">
			<view class="pd pt20 pm10 dx_row">
				<image :src="userinfo.headimgurl" class="user_iconr"></image>
				<view class="dx_col user_name_er pr">
					<view class="fz36 cf">

						账号：{{userinfo.nickname||''}}
					</view>
					<view class="z9 fz26 mt5 cf">
						会员等级：{{userinfo.dengji||''}}
						<view class="f_b sdf_errtt fz24 ml10">
							积分{{userinfo.jifen||''}}
						</view>
					</view>
				</view>
			</view>
			<!-- <image src="../../static/img/right.png" class="righyswweer" mode="widthFix"></image> -->
		</view>
		<view class="pd">

			<view class="bgff mt20 pd pt20 pm20 yy">
				<view class="dx_row">
					<view class="dx_col fz30 z3">
						我的订单
					</view>
					<!-- <view class="dx_col tr z9 fz28" @tap="hf('/pages/user/myOrder?idx=0')">
						<text class="cz">全部订单</text>
						<image src="../../static/img/right.png" mode="widthFix" class="cz right_iconeerr"></image>
					</view> -->
				</view>
				<view class="mt10 dx_row cen pm10 btm pt40">
					<view class="dx_col" @tap="hf('/pages/user/myOrder?idx=1')">
						<view class="dsfds_deertt f_b pr">
							<text class="ssddfdf3" v-if="sd.ddeefa>0">{{sd.ddeefa}}</text>
							<image src="../../static/img/dfsdf_a.png" mode="widthFix" class="sdsf_ser aa"></image>
						</view>
						<view class="fz24 z3">
							待付款
						</view>
					</view>
					<view class="dx_col" @tap="hf('/pages/user/myOrder?idx=2')">
						<view class="dsfds_deertt f_b pr">
							<text class="ssddfdf3" v-if="sd.ddeefb>0">{{sd.ddeefb}}</text>
							<image src="../../static/img/dfsdf_b.png" mode="widthFix" class="sdsf_ser ab"></image>
						</view>
						<view class="fz24 z3">
							待发货
						</view>
					</view>
					<view class="dx_col" @tap="hf('/pages/user/myOrder?idx=3')">
						<view class="dsfds_deertt f_b pr">
							<text class="ssddfdf3" v-if="sd.ddeefc>0">{{sd.ddeefc}}</text>
							<image src="../../static/img/dfsdf_c.png" mode="widthFix" class="sdsf_ser ac"></image>
						</view>
						<view class="fz24 z3">
							待收货
						</view>
					</view>

					<view class="dx_col" @tap="hf('/pages/user/myOrder?idx=4')">
						<view class="dsfds_deertt f_b pr">
							<text class="ssddfdf3" v-if="sd.ddeefd>0">{{sd.ddeefd}}</text>
							<image src="../../static/img/dfsdf_e.png" mode="widthFix" class="sdsf_ser ae"></image>
						</view>
						<view class="fz24 z3">
							退款/售后
						</view>
					</view>
				</view>
			</view>

			<van-cell-group class="mt20">
				<van-cell title="我的地址" is-link @tap="hf('/pages/user/addressManagement')" />
				<van-cell title="我的收藏" is-link @tap="hf('/pages/user/shouchang')" />
				<van-cell title="客服电话" is-link value="13538190372" />
				<van-cell title="退出" is-link @tap="oute" />
			</van-cell-group>

		</view>



	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				gsdf: [{
					name: "收藏商品",
					num: 0
				}, {
					name: "收藏店铺",
					num: 0
				}, {
					name: "关注",
					num: "0"
				}],
				sd: ""
			}
		},
		computed: {
			...mapState(["userinfo"])
		},
		onPullDownRefresh() {
			setTimeout(a => {
				this.getdaa()
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			...mapMutations(["logout"]),
			...mapActions(['getuserinfo']),
			oute() {
				uni.clearStorage();
				this.logout()
				// #ifdef H5
				window.location.href = 'http://www.duxinggj.com/www/phone/qm'
				// #endif
				// #ifdef APP-PLUS || MP-WEIXIN
				uni.switchTab({
					url: '/pages/index/index'
				});
				// #endif

			},
			async getsdsd() {
				
				this.sd = await this.post("csscs/dingdandj")
			}
		},
		onShow(e) {
			uni.showLoading({
				title:"加载中..."
			})
			if (!this.userinfo) {
				setTimeout(a=>{
					uni.hideLoading()
					this.getuserinfo()
				},1500)
			}else{
				this.getsdsd()
			}
			
		},
		mounted() {


		}
	}
</script>
<style scoped>
	.user_page {
		background: #F8F8F8;
	}

	.parent {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.user_iconr {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}

	.user_name_er {
		padding-left: 40upx;
	}

	.liuxianer {
		width: 50upx;
		height: auto;
		position: absolute;
		right: 0;
		top: 0upx;
	}

	.right_iconeerr {
		width: 30upx;
		margin-left: 10upx;
	}

	.dsfds_deertt {
		height: 65upx;
	}

	.sdsf_ser {
		width: 55upx;
	}


	.sdsf_ser.ae {
		width: 52upx;
	}

	.gongjuer {
		width: 70upx;
	}

	.sd_jh_deer {
		padding-top: 50upx;
		padding-bottom: 50upx;
		background: linear-gradient(to right, #F8C958, #F77A27);
	}



	.sdf_errtt {
		background: #fed466;
		color: #fff;
		border-radius: 20upx;
		padding: 0 10upx 0 20upx;
	}

	.sdf_errtt image {
		width: 30upx;
		height: auto;
	}

	.ssd_jjh_er {
		border-radius: 10upx;
		position: relative;
		z-index: 100;
		margin-top: -30upx;
	}

	.ssd_jjh_er view {

		line-height: 70upx !important;
	}

	.user_logo {
		width: 192upx;
	}

	.sdf_dertxe {
		margin-bottom: 40upx;
	}

	.righyswweer {
		position: absolute;
		right: 20upx;
		top: 110upx;
		width: 40upx;
	}

	.ssddfdf3 {
		position: absolute;
		right: -14upx;
		top: -14upx;
		background: #F8C757;
		color: #fff;
		border-radius: 50%;
		width: 36upx;
		height: 36upx;
		z-index: 100;
		line-height: 36upx;
		font-size: 26upx;
	}
</style>
