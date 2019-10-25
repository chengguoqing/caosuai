<template>
	<view>
		<view class="cen sdfsd_wer" v-if="!istou">
			<image src="/static/img/weinitj.png" mode="widthFix" class="cz"></image>
		</view>
		<van-row :gutter="10">
			<van-col  span="12">
				<view class="bgff mb20 w100 dfdsf_eert"  @tap="hf('/pages/commodity/details')"  v-for="(sd,idx) in 5">
					<image :src="idx%2==0?'https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/fe6a07e2-bbce-49a7-ab9b-826b4ac5d540.jpg':'https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/1b1ab675-9055-4148-8553-523fb65309a9.jpg'" class="ssd_dedd cz" mode="widthFix"></image>
					<view class="fz28 z3 dian sdfdf_eetreert pd">是大夫第三方的身份时代发生的发生的是对方的手方式
					</view>
					<view class="fz26 red  pm10 pd">
						￥ <text class="fz32">588.00</text>
						<text class="fz24 z9 del">￥268.00</text>
					</view>
				</view>
			</van-col>
			<van-col span="12">
				<view class="bgff mb20 w100 dfdsf_eert"  @tap="hf('/pages/commodity/details')" :span="12" v-for="(sd,idx) in 5">
					<image :src="idx%2==0?'https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/1b1ab675-9055-4148-8553-523fb65309a9.jpg':'https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/fe6a07e2-bbce-49a7-ab9b-826b4ac5d540.jpg'" class="ssd_dedd cz" mode="widthFix"></image>
					<view class="fz28 z3 dian sdfdf_eetreert pd">是大夫第三方的身份时代发生的发生的是对方的手方式
					</view>
					<view class="fz26 red  pm10 pd">
						￥ <text class="fz32">588.00</text>
						<text class="fz24 z9 del">￥268.00</text>
					</view>
				</view>
			</van-col>
		</van-row>

		<!-- <view class="parent">
			
		</view> -->

	</view>
</template>
<script>
	export default {
		props: {
			istou: ''
		},
		data() {
			return {

			}
		},
		components: {

		},
		methods: {

		},
		mounted() {

		}
	}
</script>
<style scoped>
	.sdfsd_wer {
		line-height: 140upx;

	}

	.sdfsd_wer image {
		width: 270upx;
	}

	.parent {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 0px;
		grid-column-gap: 20upx;
	}

	.dfdsf_eert {
		border-radius: 10upx;
		overflow: hidden;
	}


	.ssd_dedd {
		width: 100%;
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
		line-height: 100upx !important;
	}

	.dsf_jh_dert {
		display: inline-block;
		margin-left: 20upx;
		width: 200upx;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		border-radius: 70upx;
		color: #fff;
		font-size: 30upx;
		background: #FFC11C;
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
</style>
