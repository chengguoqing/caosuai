<template>
	<view>
		<view class="">
			<zhaungchanger idx_e="ab" :datas="ddf_ddr" v-if="iseeerxeer"></zhaungchanger>
		</view>
		
		<view class="cen z9 btm mt20 pt20 pm20" v-if="iseer">
			<image src="../../static/img/loading.gif" class="lossderrf cz" mode="widthFix"></image>
			<text class="cz">加载中。。。</text>
		</view>
		<view class="cen z9 btm mt20 pt20 pm20" v-if="jiadser">
			<text class="cz">我是有底线的</text>
		</view>
		
	

	</view>
</template>
<script>
	import zhaungchanger from "@/components/zhaungchanger"
	export default {
		data() {
			return {
				iseer:false,
				jiadser:false,
				totalPages:1,
				page:1,
				idx: 0,
				jiaged: 0,
				issd_a: false,
				issd_b: false,
				iseeerxeer:false,
				ddf_ddr:[],
				fenleiname:"",
				sousou:"",
				ssd_deert: [{
					name: "综合",
					cls: "act"
				}, {
					name: "自营",
					cls: ""
				}, {
					name: "店铺街",
					cls: ""
				}],
				ssd_deert_b: [{
					name: "品牌",
					cls: "act"
				}, {
					name: "品牌1",
					cls: ""
				}, {
					name: "品牌2",
					cls: ""
				}]
			}
		},
		components: {
			zhaungchanger
		},
		onPullDownRefresh() {
			this.ddf_ddr = []
			this.page = 1
			this.getlist()
		},
		onReachBottom(){
			this.iseer = true
			this.page ++
			if(this.page > this.totalPages){
				this.iseer = false
				this.jiadser = true
				return
			}
			this.getlist()
		},
		methods: {
			dsf_deexwr(idx) {
				this.ssd_deert.map(a => {
					a.cls = ''
				})
				this.ssd_deert[idx].cls = "act"
				this.issd_a = false
			},
			dsf_deexwrer(idx) {
				this.ssd_deert_b.map(a => {
					a.cls = ''
				})
				this.ssd_deert_b[idx].cls = "act"
				this.issd_b = false
			},
			async getlist (){
				let data = await this.post("csscs/getshouce",{page:this.page,jiage:this.jiaged,fenleiname:this.fenleiname,sousou:this.sousou})
				this.iseeerxeer=true
				this.totalPages = data.totalPages
				data.data.map(a=>{
					this.ddf_ddr.push(a)
				})
				this.iseer = ''
				uni.stopPullDownRefresh();
			}
		},
		onLoad(e) {
			this.fenleiname = e.fenleiname||''
			this.sousou = e.sousou || ''
			this.getlist()
		}
	}
</script>
<style scoped>
	.ssd_jhderte {
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		height: 80upx;
		line-height: 80upx;
		background: #fff;
		z-index: 10000;
	}

	.ssd_jhderte view {
		line-height: 80upx;
		text-align: center;
	}

	.sdfdsf_eeer {
		width: 16upx;
	}

	.sdfdsf_eeer.ab {
		width: 12upx;
		position: relative;
		bottom: 2upx;
	}

	.sdfdsf_eeer.bb,
	.fdgdfg_dert.act .sdfdsf_eeer.aa {
		display: none;
	}

	.fdgdfg_dert.act {
		color: #ffc21c;
	}

	.fdgdfg_dert.act .sdfdsf_eeer.bb {
		display: inline-block;
	}

	.ngsd_ertt {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 99;
	}

	.dfdsf_deefwee {
		position: fixed;
		left: 0;
		top: 80upx;
		width: 100%;
		height: 400upx;
		overflow: auto;
		background: #fff;
		z-index: 1000;
	}

	.sdf_deerttxwe {
		line-height: 80upx;
	}

	.sdf_deerttxwe.act {
		color: #ffc21c;
	}

	.hiusweerwer {
		width: 26upx;
	}

</style>
