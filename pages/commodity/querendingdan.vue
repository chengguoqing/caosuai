<template>
	<view>
		<view class="ssdh_swe mt20 yy pd pt20 pm20 pr">
			<view class="dx_row">
				<view class="ssd_deeler fz32">
					程国庆
				</view>
				<view class="dx_col fz32">
					13538190372
				</view>
				<view class="ssd_righte tr">
					<image src="../../static/img/rightsser.png" mode="widthFix" class="ssd_jh_deertxwe"></image>
				</view>
			</view>
			<view class="dianer fz30 z6 mt10">
				广东省深圳市南山区
			</view>
			<image src="../../static/img/address.png" class="diswexwwe" mode="widthFix"></image>
		</view>

		<view class="pd pt20 pm20 bgff yy mt20 dx_row">
			<view class="dx_col dsfs_deertxwwe">
				<view class="ssd_jjh_derx pr" v-for='sd in 4'>
					<view class="sdfdsf_eexs">
						4
					</view>
					<image src="../../static/img/gangcai.jpg" class="w100 h100"></image>
				</view>
			</view>
			<view class="sddsf_derxwe tr">
				共81件 <image src="../../static/img/rightsser.png" class="rightswewrxsw cz" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="dx_row bgff pd pt20 pm20 yy mt20">
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
		
		<view class="mt20 bgff yy">
			<van-cell-group>
			    <van-cell title="资质文件信息" value="不需要" is-link/>
				 <van-cell title="发票" value="不需要" is-link/>
				 <van-cell title="运费是否分摊" value="运费单开" is-link/>
				 <van-field class="beizeer" label="备注" type="textarea" placeholder="如有定制、加工、装卸等增值服务需求详询客服" clearable />
			</van-cell-group>
		</view>
		
		
		<view class="sd_jh_eerxwertx btm yy bgff dx_row pl20">
			<view class="dx_col fz26 z6">
				应付金额： <text class="ye">￥<text class="fz36">352</text>.50</text>
			</view>
			<view class="ddf_eebtne cf">
				提交订单
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {},
		mounted() {}
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
	.ssd_jjh_derx{
		height: 120upx;
		border: 1px solid #e0e0e0;
	}
	.sdfdsf_eexs{
		background:#FE9416;
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
	.sdfdf_dertxw{
		width: 30upx;
	}
	.sd_jh_eerxwertx{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100upx;
		
	}
	.sd_jh_eerxwertx view{
		line-height: 100upx;
	}
	.ddf_eebtne{
		width: 250upx;
		height: 100%;
		background: #FE9514;
		color: #fff;
		font-size: 32upx;
		text-align:center;
	}
</style>
