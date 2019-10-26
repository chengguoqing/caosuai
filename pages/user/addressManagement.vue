<template>
	<view class="pt20 pageshouhuer" v-if="issere">
		<van-cell-group>
			<van-cell v-for="(sd,idx) in dsizs">
				<view class="pr">
					<view class="" @tap="ssdder">
						<view class="dx_row tl">
							<view class="fz30 z3 user_nameert">
								{{sd.user_name}}
							</view>
							<view class="dx_col z3 fz30">
								{{sd.user_phone}} <text class="morendewer cz ml10" v-if="sd.morens">默认</text>
							</view>
						</view>
						<view class="z9 fz26 tl">
							{{sd.ssq}} {{sd.xxdz}}
						</view>
					</view>
					<van-icon name="delete" class="z9 fz40 bainjiwer " @tap="delect(sd.id,idx)" />
					<van-icon name="edit" class="z9 fz40 bainjiwer ab" @tap="hf('/pages/user/AddAddress?id='+sd.id)" />
				</view>
			</van-cell>
		</van-cell-group>


		<view class="cen dsfdsfdedwwe " v-if="dsizs.length<=0">
			<image src="/static/img/no_msg.png" class="no_msg" mode="widthFix"></image>
			<view class="fz28 z9">
				暂无数据
			</view>
		</view>
		<view class="pd bssderrtx">
			<van-button type="primary" @tap="hf('/pages/user/AddAddress')">添加收货地址</van-button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				dsizs: [],
				issere: false,
				isquerr: 0 //1为确认订单点击的
			}
		},
		components: {},
		methods: {
			async getdata() {
				this.dsizs = await this.post("csscs/getdizi")
				this.issere = true
			},
			async delect(id, idx) {
				let th = this
				uni.showModal({
					title: "确认删除吗",
					async success(res) {
						if (res.confirm) {
							await th.post("csscs/delectdizi", {
								id: id
							})
							th.dsizs.splice(idx, 1)
						}
					}
				})
			},
			ssdder() {
				if (this.isquerr == 1) {
					uni.navigateBack({
						delta: 1
					});
				}
			}
		},
		onShow() {
			this.getdata()
		},
		onLoad(e) {
			this.isquerr = e.isquerr
		}
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

	.bainjiwer.ab {
		right: 80upx;
	}

	.pageshouhuer {
		padding-bottom: 160upx;
	}

	.bssderrtx {
		background: #FAFAFA;
		z-index: 100;
		bottom: 0;
		padding-bottom: 40upx;
		padding-top: 20upx;
	}

	.morendewer {
		font-size: 24upx;
		background: #FFC120;
		color: #fff;
		border-radius: 4upx;
		position: relative;
		bottom: 2upx;
		padding: 2upx 10upx;
	}
</style>
