<template>
	<view class="pl10 pr10  jhg_dertt pr">
	<!-- 	<view class="ssd_jhj_der bbm tr   z9 pd">
			编辑
		</view> --> 
		
		<view class="dx_gwc_boxw pd tui-checkbox mt20">
			<view class="bgff sd_jj_dert">
				
				<van-swipe-cell right-width="60" v-for="(sd,idx) in 3" :key="idx">
					<view class="dx_gwc_box dx_row ">
						<view class="gouxuansd">
							<checkbox color="#fff" />
						</view>
						<image src="../../static/img/gangcai.jpg" mode="widthFix" class="fengmianer cz"></image>
						<view class="dx_col pl20">
							<view class="dian fz30 z3 titleerte">
								标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
							</view>
							<view class="fz24 z9">
								预计出货日：8天
							</view>
							<view class="fz24 z9">
								规格：10MM*2Cm
							</view>
							<view class="red fz24 pr">
								￥ <text class="fz30">599.00</text>
								<view class="dfds_eer">
									<van-stepper />
								</view>
							</view>
						</view>
					</view>
					<view slot="right" class="sanduswwer">删除</view>
				</van-swipe-cell>
			</view>
		</view>
	<view class="pd">
		<wntj></wntj>
	</view>
	
		
		<view class="dx_ddf_er btm pl20 dx_row bbm">
			<view class="dx_col tui-checkbox dfddsfrewetrx">
				<view class="sdf_der f_b cz">
					<checkbox color="#fff" />
				</view>
				<text class="fz28 cz z3 ml5">全选</text>
			</view>
			<view class="dx_col fz26 tr red dx_jz">
				<view class="f_b cz fz24 dfxwweerrx">
					￥233.50 <text class="z9 ml10">不含运费</text>
					<view class="fz22 z9">
						总额：￥233.50 立减：￥0.00
					</view>
				</view>
				<view class="dsf_jh_dert ">
					结算 
				</view>
			</view>
		
		</view>
	
	</view>
</template>
<script>

	export default {
		data() {
			return {}
		},
		components: {
		},
		methods: {
			onChange(e) {
				console.log(e)
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		mounted() {
			this.load()
		}
	}
</script>
<style>
	/* #ifdef APP-PLUS || MP */
	/*checkbox 选项框大小  */
	.tui-checkbox .wx-checkbox-input {
		width: 46rpx;
		margin-right: 0 !important;
		height: 46rpx;
		border-radius: 50%;
		transform: scale(0.8);
	}

	/*checkbox选中后样式  */
	.tui-checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #FFC11C;
		width: 48rpx !important;
		height: 48rpx !important;
		border: none;
	}

	/*checkbox选中后图标样式  */
	/* #endif */
	/* #ifdef H5 */
	>>>.tui-checkbox .uni-checkbox-input {
		width: 46rpx;
		height: 46rpx;
		margin-right: 0 !important;
		border-radius: 50% !important;
		transform: scale(0.8);
	}

	>>>.tui-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		background: #FFC11C;
		width: 48rpx !important;
		height: 48rpx !important;
		border: none;
	}

	/* #endif */
</style>

<style scoped>
	.red{
		color:#F39F3A !important
	}
	.sdf_der{
		width: 50upx;
	}
	.jhg_dertt {
		padding-top: 40upx;
		padding-bottom: 150upx;
	}

	.ssd_jhj_der {
		position: sticky;
		width: 100%;
		background: #f8f8f8;
		line-height: 60upx;
		top: 0;
		font-size: 28upx;
		z-index: 1000;
		padding-right: 30upx !important;
		/* #ifdef H5 */
			top: 88upx;
		/* #endif */
	}

	.dx_gwc_boxw {
		border-radius: 8upx;
	}

	.dx_gwc_box {

		background: #fff;
		padding: 20upx;
		padding-left: 0;
	}

	.gouxuansd {
		width: 70upx;
		text-align: center;
		line-height: 200upx;
	}

	.dx_gouxuane {
		width: 38upx;
		height: 38upx;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #e0e0e0;
	}

	.fengmianer {
		width: 180upx;
		height: 180upx !important;
		border: 1px solid #FAFAFA;
	}

	.titleerte {
		line-height: 1.4 !important;
	}

	.dfds_eer {
		position: absolute;
		right: 0;
		bottom: 0;
	}

	

	.sdfdf_eetreert {
		line-height: 1.4 !important;
		margin-top: 10upx;
		width: 100% !important;
	}

	.sanduswwer {
		background: #E24047;
		height: 240upx;
		text-align: center;
		line-height: 240upx;
		color: #fff;
		width: 120upx;
	}

	.dx_ddf_er {
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 1000;
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		/* #ifdef H5 */
		bottom: 100upx;
		/* #endif */
	}

	.dx_ddf_er .dx_col {
	}

	.dsf_jh_dert {
		display: inline-block;
		margin-left: 20upx;
		width: 170upx;
		height: 100%;
		line-height: 100upx;
		text-align: center;
		color: #fff;
		font-size: 30upx;
		background: #F77A27;
	}

	.sd_jj_dert {
		border-radius: 20upx;
		overflow: hidden;
		box-shadow: 0 0 20upx rgba(229, 229, 229, 0.5);
	}

	.djhh {
		width: 40upx;
		height: 40upx;
	}

	.linghquane {
		width: 70upx;
	}

	.dsf_deertxc {
		line-height: 40upx !important;
	}

	.gouxuansd.ab {
		line-height: 60upx;
	}
	.dfxwweerrx{
		line-height: 1.5;
	}
	.dfddsfrewetrx{
		line-height: 100upx;
	}

</style>
