<template>
	<view v-if="ssderder">
		<view class="ssdh_swe mt20 yy pd pt20 pm20 pr" v-if="dizhi" @tap="hf('/pages/user/addressManagement?isquerr=1')">
			<view class="dx_row">
				<view class="ssd_deeler fz32">
					{{dizhi.user_name}}
				</view>
				<view class="dx_col fz32">
					{{dizhi.user_phone}}
				</view>
				<view class="ssd_righte tr">
					<image src="../../static/img/rightsser.png" mode="widthFix" class="ssd_jh_deertxwe"></image>
				</view>
			</view>
			<view class="dianer fz30 z6 mt10">
				{{dizhi.ssq + dizhi.xxdz}}
			</view>
			<image src="../../static/img/address.png" class="diswexwwe" mode="widthFix"></image>
		</view>

		<view class="ssdh_swe mt20 yy pd pt10 pm20 pr cen" v-else @tap="hf('/pages/user/addressManagement?isquerr=1')">
			<view class="dx_row">
				<view class="dx_col">
					<image src="../../static/img/map.png" class="mapseere cz" mode="widthFix"></image>
					<view class="z9 fz26">
						暂无默认地址，点击添加
					</view>
				</view>

				<view class="ssd_righte tr ab">
					<image src="../../static/img/rightsser.png" mode="widthFix" class="ssd_jh_deertxwe"></image>
				</view>
			</view>


			<image src="../../static/img/address.png" class="diswexwwe" mode="widthFix"></image>
		</view>

		<view class="pd pt20 pm20 bgff yy mt20 dx_row">
			<view class="dx_col dsfs_deertxwwe">
				<view class="ssd_jjh_derx pr" v-for='sd in sd'>
					<view class="sdfdsf_eexs">
						{{sd.numner}}
					</view>
					<image :src="sd.urlfm" class="w100 h100"></image>
				</view>
			</view>
			<view class="sddsf_derxwe tr">
				共{{zgds}}件 <image src="../../static/img/rightsser.png" class="rightswewrxsw cz" mode="widthFix"></image>
			</view>
		</view>

		<!-- <view class="dx_row bgff pd pt20 pm20 yy mt20">
			<view class="dx_col fz30 z3">
				支付配送
			</view>
			<view class="dx_col fz28 z3 tr ">
				在线支付 <image src="../../static/img/rightsser.png" class="sdfdf_dertxw cz" mode="widthFix"></image>
				<view class="">
					顺丰快递
				</view>
				<view class="ye fz24">
					预计 2019年10月24日送达
				</view>

			</view>
		</view>
 -->
		<view class="mt20 bgff yy">
			<van-cell-group>
				<van-cell title="资质文件信息" value="不需要" is-link />
				<van-cell title="发票" value="不需要" is-link />
				<!-- <van-cell title="运费是否分摊" value="运费单开" is-link /> -->
				<van-field v-model="beizhu" class="beizeer" label="备注" type="textarea" placeholder="如有定制、加工、装卸等增值服务需求详询客服"
				 clearable />
			</van-cell-group>
		</view>


		<view class="sd_jh_eerxwertx btm yy bgff dx_row pl20">
			<view class="dx_col fz26 z6">
				应付金额： <text class="ye">￥<text class="fz36">{{zongjia}}</text></text>
			</view>
			<view class="ddf_eebtne cf" @tap="zhifusd">
				提交订单
			</view>
		</view>
	</view>
</template>
<script>
	var wx = require('weixin-js-sdk');
	export default {
		data() {
			return {
				ssderder: false,
				oderid: "",
				sd: '',
				zongjia: "",
				zgds: 0,
				dizhi: "",
				beizhu: ""
			}
		},
		components: {},
		onPullDownRefresh() {
			this.getdaer()
		},
		onLoad(e) {
			this.oderid = e.oderid

		},
		onShow() {
			this.getdaer()
		},
		methods: {
			async getdaer() {
				let dasew = await this.post("csscs/qurendingxx", {
					oderid: this.oderid
				})
				this.ssderder = true
				this.zgds = dasew.zgds
				this.zongjia = dasew.zongjia
				this.sd = dasew.spinfo
				this.dizhi = dasew.dizhi
				uni.stopPullDownRefresh();
			},
			async goynsd() {
				let dase = await this.post("csscs/xiadan", {
					oderid: this.oderid,
					zftypecode: 2,
					beizhu: this.beizhu,
					zongjia: this.zongjia,
					shouhuodiz: JSON.stringify(this.dizhi)
				})
				uni.showLoading({
					title:"操作中..."
				})
				setTimeout(a => {
					uni.hideLoading()
					uni.redirectTo({
						url: '/pages/commodity/zhifuzt?zfzt=' + dase
					});
				}, 1000)

			},
			async zhifusd() {
				if (!this.dizhi) {
					uni.showToast({
						title: "请选择收货地址",
						icon: "none"
					})
					return
				}
				uni.showLoading({
					title: '加载中....'
				});
				let wx_cd = await this.get("weixin/zhifu", {
					jiner: this.zongjia
				})
				wx_cd = wx_cd.data
				uni.hideLoading();
				let th = this
				wx.chooseWXPay({
					timestamp: wx_cd.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
					nonceStr: wx_cd.nonceStr, // 支付签名随机串，不长于 32 位
					package: wx_cd.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
					signType: wx_cd.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
					paySign: wx_cd.paySign, // 支付签名
					success: function(res) {
						th.goynsd()
					}
				});
			}
		}
	}
</script>
<style lang='scss' scoped>
	.ssdh_swe {
		height: 160upx;
		background: #fff;
	}

	.ssd_deeler {
		width: 270upx;
	}

	.ssd_righte {
		width: 40upx;
	}

	.ssd_righte.ab {
		margin-top: 40upx;
	}

	.ssd_jh_deertxwe {
		width: 26upx;
		position: relative;
		top: 6upx;
	}

	.diswexwwe {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
	}

	.sddsf_derxwe {
		width: 150upx;
		line-height: 120upx;
	}

	.rightswewrxsw {
		width: 26upx;
		position: relative;
		top: -2upx;
	}

	.dsfs_deertxwwe {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 30upx;
		grid-row-gap: 0px;
	}

	.ssd_jjh_derx {
		height: 120upx;
		border: 1px solid #e0e0e0;
	}

	.sdfdsf_eexs {
		background: #FE9416;
		color: #fff;
		border-radius: 20upx;
		font-size: 24upx;
		position: absolute;
		right: -16upx;
		top: -16upx;
		z-index: 1000;
		line-height: 1;
		padding: 6upx 10upx;
	}

	.sdfdf_dertxw {
		width: 30upx;
	}

	.sd_jh_eerxwertx {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100upx;

	}

	.sd_jh_eerxwertx view {
		line-height: 100upx;
	}

	.ddf_eebtne {
		width: 250upx;
		height: 100%;
		background: #FE9514;
		color: #fff;
		font-size: 32upx;
		text-align: center;
	}

	.mapseere {
		width: 80upx;
	}
</style>
