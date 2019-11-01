<template>
	<view class="pd">
		<van-icon name="close" class="z6 df_deeeret" @tap="$emit('closese')" />
		<view class="dx_row">
			<view class="dnsg_sdd pd pt20 pm20">
				<image :src="sd.spt[0]" mode="widthFix"></image>
			</view>
			<view class="dx_col pl20 sdf_eertwwrr">
				<view class="red fz26">
					￥<text class="fz32">{{jiage*shuliang}}</text>
				</view>
				 <view class="fz26 z6" v-if="yuxuans">
					已选：{{yuxuans}} {{shuliang}} {{sd.scdanwei}}
				</view>
			</view>
		</view>
		<view class="mt20">
			<text v-for="(sdwe,idx) in sd.sd_drtyx" class="sdfdsf_dseer" :class="sdwe.cls" @tap="ssd_der(sdwe,idx)" :key="idx">{{sdwe.cls}}{{sdwe.sku_name}}</text>
		</view>
		
		<view class="fz30 z3">
			数量
		</view>
		<view class="mt20">
			<van-stepper v-model="shuliang"/>
		</view>
		<view class="pt20 pm20 dx_row sdfsdeerrtdee mt20">
			<view class="dx_col">
				<van-button type="info" class="aa" @tap="lisdsdr(0)">加入购物车</van-button>
			</view>
			<view class="dx_col">
				<van-button type="primary" class="ab" @tap="lisdsdr(1)">立即购买</van-button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props:{
			sd:""
		},
		data() {
			return {
				jiage:"",
				shuliang:1,//数量
				yuxuans:'' //已选
			}
		},
		components: {},
		methods: {
			ssd_der(sdwe,idx) {
				this.sd.sd_drtyx.map(a => {
					a.cls = ""
				})
				this.sd.sd_drtyx[idx].cls = "act"
				this.jiage =sdwe.cbjia 
				this.yuxuans = sdwe.sku_name
			},
			lisdsdr(ty){
				
				if(this.sd.sd_drtyx.length>0&&!this.yuxuans){
					uni.showToast({
						title:"请选择规则",
						icon:"none"
					})
					return
				}
				let xddreer = {}
				xddreer.urlfm = this.sd.spt[0]
				xddreer.yixuan = this.yuxuans 
				xddreer.numner = this.shuliang
				xddreer.spid = this.sd.id
				xddreer.userid = 2
				xddreer.jiagegm = ''+this.jiage*this.shuliang
				xddreer.isgouwuce = ty
				xddreer.name = this.sd.name
				xddreer.danjie=this.yuxuans?this.jiage:this.sd.jiage
				this.$emit('lijigmd',xddreer)
				
			}
		},
		mounted() {
			this.jiage = this.sd.jiage
			this.sd.sd_drtyx.map(a => {
				a.cls = ""
			})
		}
	}
</script>
<style>
	.sdfsdeerrtdee .aa button {
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}

	.sdfsdeerrtdee .ab button {
		border-top-left-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	/* #ifdef H5 */
		.sdfsdeerrtdee .aa  {
			border-top-right-radius: 0 !important;
			border-bottom-right-radius: 0 !important;
		}
		
		.sdfsdeerrtdee .ab  {
			border-top-left-radius: 0 !important;
			border-bottom-left-radius: 0 !important;
		}
	/* #endif */
</style>
<style scoped>
	.dnsg_sdd {
		background: #fff;
		border-radius: 10upx;
		margin-top: -100upx;
	}

	.dnsg_sdd image {
		width: 200upx;
		height: 200upx;
	}

	.sdf_eertwwrr {
		padding-top: 50upx;
	}

	.df_deeeret {
		font-size: 46upx;
		position: absolute;
		right: 15upx;
		top: 15upx;
	}

	.sdfdsf_dseer {
		background: #f8f8f8;
		color: #333;
		border-radius: 40upx;
		padding: 6upx 30upx;
		margin-right: 20upx;
		margin-bottom: 20upx;
		font-size: 26upx !important;
		display: inline-block;
		border: 1px solid #f8f8f8;
	}

	.sdfdsf_dseer.act {
		background: #fff !important;
		color: #ffc11c  !important;
		border-color: #ffc11c  !important;

	}
</style>
