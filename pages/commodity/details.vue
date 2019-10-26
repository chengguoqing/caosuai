<template>
	<view class="sdfdd_deert">
		<!-- <image src="../../static/img/fenxiangqw.png" class="fenxisdert" @click="showds=true"></image> -->
		<luBarTabNav :tabList="tabList" :barFixed="barFixed" :barHeight="barHeight" :barTop="barTop" :barId="barId" ref="barTabNav">
			<view id="item1" class="tabbody">

				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true" class="ssd_jh_dertxe pr">
					<swiper-item v-for="sd in sd.spt">
						<image :src="sd" class="w100 h100"></image>
					</swiper-item>
				</swiper>
				<view class="pt20 pm20 bgff pd">

					<view class="fz32 z3">
						{{sd.name}}
					</view>
					<view class="fz28 z6">
						{{sd.spmd}}
					</view>

					<view class="fz26 z9">
						售价：<text class="ye">￥<text class="fz30">{{sd.jiage}}</text> /{{sd.scdanwei}}</text>
					</view>

				</view>
				<van-cell-group>
					<van-cell title="别名" :value="sd.bieming" />
				</van-cell-group>
				<!-- <view class="mt20">
					<van-cell-group>
						<van-cell title="已选" value="60MM,76mm,89mm" is-link />
						<van-cell title="配送" is-link @click="$refs.ssd_eert_b.open()">
							<view class="dsfds_deeert fz24">
								至{{dizhisd}}
							</view>
						</van-cell>
					</van-cell-group>
				</view> -->
			</view>
			<!-- 			<view id="item2" class="tabbody">

				<view class="mt20 bgff  " @tap="hf('/pages/commodity/pingjia')">
					<view class=" dx_row pt20 pm20 pd">
						<view class="dx_col">
							<text class="fz32">商品评价</text>
							<text class="z9 fz26">(143)</text>
						</view>
						<view class="dx_col tr red fz26 pt10">
							查看全部
							<van-icon name="arrow" class="cz" />
						</view>
					</view>
					<van-cell-group>
						<van-cell v-for="(sd,idx) in 2" :key="idx">
							<view>
								<view class="dx_row tl">
									<image src="http://iph.href.lu/80x80" class="user_iconswwr"></image>
									<view class="dx_col pl20 dsf_deerttxer">
										<view class="z6 fz30 mt10">
											神秘用户
										</view>
										<view class="">
											<van-rate value="4" readonly size="14" />
										</view>
									</view>
								</view>
								<view class="fz26 z3 tl mt10 dfd_deeettwr">
									評價的內容評價的內容評
								</view>
							</view>
						</van-cell>
					</van-cell-group>
				</view>

				<view class="mt20 bgff pd pt20 pm20 dx_row dsf_eeerttxe" @tap="hf('/pages/commodity/shopIndex')">
					<image src="http://iph.href.lu/90x90" class="dialksd_logo"></image>
					<view class="dx_col pl20">
						<text style="color: #033333">vivo旗舰店</text>
					</view>
					<view class="tr red fz26">
						进店逛逛
					</view>
				</view>

			</view>
			 -->

			<view id="item3" class="tabbody">

				<view class="mt20 bgff">
					<view class="fz30 pd pt20 ">
						商品详情
					</view>
					<view class="mt20" v-html="sd.xiqngqing">

					</view>
				</view>
			</view>
		</luBarTabNav>





		<dxpup ref="ssd_eert_c">
			<view class="pd pt20 pm20 gegsd_deer cen">
				<view class="ssd_seert">
					<image src="../../static/img/fengxsd_a.png" mode="widthFix" class="fengxsd_a cz"></image>
					<view class="fz26 z3">
						素材海报
					</view>
				</view>
				<view class="ssd_seert">
					<image src="../../static/img/fengxsd_b.png" mode="widthFix" class="fengxsd_a cz"></image>
					<view class="fz26 z3">
						微信好友
					</view>
					<button open-type="share" class="fehxiaeer"></button>
				</view>
				<view class="ssd_seert">
					<image src="../../static/img/fengxsd_c.png" mode="widthFix" class="fengxsd_a cz"></image>
					<view class="fz26 z3">
						朋友圈
					</view>
					<button open-type="share" class="fehxiaeer"></button>
				</view>
				<!-- #ifdef APP-PLUS || MP-WEIXIN -->
				<view class="ssd_seert" @click="fuzhi">
					<image src="../../static/img/fengxsd_d.png" mode="widthFix" class="fengxsd_a cz"></image>
					<view class="fz26 z3">
						复制链接
					</view>
				</view>
				<!-- #endif -->
				<!-- #ifdef H5 -->


				<view class="ssd_seert" v-clipboard:copy="message" v-clipboard:success="onCopy">
					<image src="../../static/img/fengxsd_d.png" mode="widthFix" class="fengxsd_a cz"></image>
					<view class="fz26 z3">
						复制链接
					</view>
				</view>
				<!-- #endif -->

			</view>
			<view class=" mt20 cen">
				<van-button class="w100" @click="$refs.ssd_eert_c.close()">取消</van-button>
			</view>
		</dxpup>





		<dxpup ref="ssd_eert_b">
			<view class="bgff">
				<view class="fz32 z3 pt20 pd pm20">
					配送至
				</view>
				<view class="pr dsfds_deerrtty">
					<dxarea @closew="closew"></dxarea>
				</view>
			</view>
		</dxpup>


		<fenxiang :scrollTop="scrollTop" :ieerss="true" @ssddfeer="$refs.ssd_eert_c.open()"></fenxiang>
		<dxpup ref="ssd_eert">
			<sku @closese="lijisd" :sd="sd" @lijigmd="lijigmd"></sku>
		</dxpup>



		<view class="sdsad_deeer btm dx_row">
			<view class="dx_col cen pt10" @tap="shouchas(sd.issc==1?2:1)">
				<van-icon name="like-o" class="fz40" v-if="sd.issc==1" />
				<van-icon name="like" class="fz40 ye" v-if="sd.issc==2" />
				<view class="fz24 z6">
					收藏
				</view>
			</view>

			<view class="dx_col cen pt10" @tap="hf('/pages/gwc/index',2)">
				<van-icon name="bag-o" class="fz40" />
				<view class="fz24 z6">
					购物车
				</view>
			</view>
			<view class="dx_row  sdfds_deertwe">
				<view class="dx_col ">
					<van-button class="dfsdfd_se aa" @click="shwiwe">加入采购单</van-button>
				</view>
			</view>
		</view>






	</view>




</template>
<script>
	import sku from "@/components/sku"
	import dxarea from "@/components/dxarea"
	import luBarTabNav from "@/components/lu-bar-tab-nav/lu-bar-tab-nav.vue";
	import dxpup from "@/components/dxpup"
	export default {
		data() {
			return {
				sd: "",
				idwwe: 0,
				scrollTop: "",
				showes: false,
				showCs: false,
				showds: false,
				barFixed: true,
				barHeight: "44",
				barTop: 0,
				iconShow: true,
				barId: "0",
				dizhisd: "广东省深圳市南山区",
				message: "复制成功",
				tabList: [{
					text: "商品",
					navTarget: "#item1"
				}, {
					text: "详情",
					navTarget: "#item3"
				}]
			}
		},
		onPageScroll: function(e) {
			this.$refs.barTabNav._selectedTab(e.scrollTop);
			this.scrollTop = e.scrollTop
			let dfdf = this.sd_deer
		},
		components: {
			sku,
			luBarTabNav,
			dxarea,
			dxpup
		},
		onPullDownRefresh() {
			this.getdata()
		},

		onLoad(e) {
			this.load()
			this.idwwe = e.id
			this.getdata()
		},
		methods: {
			async shouchas(sce) { //收藏按钮触发
				uni.showLoading({
					title:"加载中。。。"
				})
				var ssde = await this.post("csscs/shouchang", {
					shopid: this.sd.id,
					issc: sce
				})
				this.sd.issc = sce
			},
			async lijisd() {
				this.$refs.ssd_eert.close()
			},
			async lijigmd(data) {
				uni.showLoading({
					title: "操作中。。。"
				})
				var ssde = await this.post("csscs/lijigoumai", data)
				this.$refs.ssd_eert.close()
				if (data.isgouwuce == 1) {
					this.hf('querendingdan?oderid=' + ssde.oderid)
				}

			},
			async getdata(id) {
				let data = await this.post("csscs/getspxq", {
					id: this.idwwe
				})
				this.sd = data
				uni.stopPullDownRefresh();
			},
			async shwiwe() {
				this.load()
				this.$refs.ssd_eert.open()
			},
			closew(e) {
				this.dizhisd = e[0].name + e[1].name + e[2].name
				this.showes = false
				this.$refs.ssd_eert_b.close()
			}
		}
	}
</script>
<style>
	.dfsdfd_se button {
		height: 70upx !important;
		line-height: 65upx !important;
		font-size: 28upx !important;
		position: relative;
		top: 15upx !important;

	}



	.dfsdfd_se.ab button {
		border-top-right-radius: 40upx !important;
		border-bottom-right-radius: 40upx !important;
		background: #ffc21c !important;
		border-color: #ffc21c !important;
	}

	/* #ifdef H5 */
	.dfsdfd_se {
		height: 100upx !important;
		line-height: 65upx !important;
		font-size: 28upx !important;
		position: relative;

	}

	.dfsdfd_se.aa {
		color: #fff !important;
		background: #FE9514 !important;
	}

	.dfsdfd_se.ab {
		border-top-right-radius: 40upx !important;
		border-bottom-right-radius: 40upx !important;
		background: #ffc21c !important;
		border-color: #ffc21c !important;
	}

	/* #endif */

	.sdsad_deeer * {
		border: 0 !important;
	}
</style>
<style scoped>
	.dsfds_deerrtty {}

	.sdfdd_deert {
		padding-bottom: 120upx;
	}

	.ssd_jh_dertxe {
		height: 755upx;
	}

	.fenxisdert {
		width: 60upx;
		height: 60upx;
		position: fixed;
		right: 20upx;
		top: 100upx;
		z-index: 10000 !important;
	}

	.ssd_seert {
		position: relative;
	}

	.fehxiaeer {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
