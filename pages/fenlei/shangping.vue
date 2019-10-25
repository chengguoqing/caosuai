<template>
	<view>
		<view class="ssd_jhderte bbm dx_row">
			<view class="dx_col fz30 fdgdfg_dert" :class="idx==1?'act':''" @click="ssdfid(1)">
				销量
			</view>
			<view class="dx_col fz30 fdgdfg_dert" :class="idx==2?'act':''" @click="ssdfid(2)">
				价格
				<image src="../../static/img/sdfsdf_b.png" mode="widthFix" class="sdfdsf_eeer ml5 ab cz" v-if="jiaged==0"></image>
				<image src="../../static/img/sdfsdf_a.png" mode="widthFix" class="sdfdsf_eeer ml5 ab cz" v-if="jiaged==1"></image>
				<image src="../../static/img/sdfsdf_c.png" mode="widthFix" class="sdfdsf_eeer ml5 ab cz" v-if="jiaged==2"></image>
			</view>
			
		</view>
		
		<view class="pt100">
			<zhaungchanger idx_e="ab" :datas="ddf_ddr" v-if="iseeerxeer"></zhaungchanger>
		</view>
		<view class="" v-if="issd_a">
			<view class="ngsd_ertt"></view>
			<view class="dfdsf_deefwee">
				<view class="bbm pd sdf_deerttxwe fz28" :class="sd.cls" v-for="(sd,idx) in ssd_deert" @tap="dsf_deexwr(idx)">
					{{sd.name}}
					<image src="../../static/img/goiuxuanwe.png" class="hiusweerwer ml10" mode="widthFix" v-if="sd.cls"></image>
				</view>
			</view>
		</view>
		
		
		<view class="" v-if="issd_b">
			<view class="ngsd_ertt"></view>
			<view class="dfdsf_deefwee">
				<view class="bbm pd sdf_deerttxwe fz28" :class="sd.cls" v-for="(sd,idx) in ssd_deert_b" @tap="dsf_deexwrer(idx)">
					{{sd.name}}
					<image src="../../static/img/goiuxuanwe.png" class="hiusweerwer ml10" mode="widthFix" v-if="sd.cls"></image>
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	import zhaungchanger from "@/components/zhaungchanger"
	export default {
		data() {
			return {
				idx: 0,
				jiaged: 0,
				issd_a: false,
				issd_b: false,
				iseeerxeer:false,
				ddf_ddr:[],
				fenleiname:"",
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
			this.getlist()
		},
		methods: {
			ssdfid(idx) {
				this.idx = idx
				
				if (idx == 0) {
					this.issd_a ? this.issd_a = false : this.issd_a = true
				}else{
					this.issd_a = false
				}
				if (idx == 2) {
					this.jiaged++
					this.ddf_ddr = []
					this.getlist()
				}
				if (this.jiaged > 2) {
					this.jiaged = 1
				}
				if (idx == 3) {
					this.issd_b ? this.issd_b = false : this.issd_b = true
				}else{
					this.issd_b = false
				}
			},
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
				let data = await this.post("csscs/getsp",{jiage:this.jiaged,fenleiname:this.fenleiname})
				this.iseeerxeer=true
				data.map(a=>{
					this.ddf_ddr.push(a)
				})
				uni.stopPullDownRefresh();
			}
		},
		onLoad(e) {
			this.fenleiname = e.fenleiname||''
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
