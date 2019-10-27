<template>
	<view>
		<view class="parent" :class="idx_e">
			<view class="bgff mb20 w100 dfdsf_eert" v-for="sd in datas" @tap="hf('/pages/commodity/details?id='+sd.id)">
				<image :src="sd.fm" class="ssd_dedd cz"></image>
				<view class="sddf_deert">
					<view class="fz30 z3 dianer sdfdf_eetreert pd">
						{{sd.name}}
					</view>
					<view class="fz26 z9 pd dian">
						{{sd.spmd}}
					</view>
					<view class="fz26    pd dx_row mt30 dfdf_xeert ye">
						<text class="cz">￥</text>
						<text class="fz36 cz dfdfxeerxw">{{sd.jiage}}</text>
					</view>
				</view>
			</view>
			<view class="cen dsfdsfdedwwe " v-if="datas.length<=0">
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
		props: {
			datas:'',
			idx_e: ''
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
		height: 220upx !important;
		border: 1px solid #FAFAFA;
		background: #F8F8F8;
	}


	.sdfdf_eetreert {
		line-height: 1.4 !important;
		margin-top: 10upx;
		width: 100% !important;
	}


	.parent.ab {
		display: block;
	}

	.parent.ab .dfdsf_eert {
		padding: 20upx;
		display: flex;
		box-sizing: border-box;
	}

	.parent.ab .ssd_dedd {
		width: 240upx;
		height: 240upx;
	}

	.parent.ab .sddf_deert{
		flex: 1;
	}
	.parent.ab .dfdf_xeert{
		
	}
	.dfdfxeerxw{
		position: relative;
		top: -10upx;
	}
	.dsfdfdrxwer{
		margin-top: -20upx;
	}
</style>
