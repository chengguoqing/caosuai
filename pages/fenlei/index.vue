<template>
	<view class="fenlei_page">
		<top></top>

		<view class="dx_row ddf_xeertx">
			<view class="dx_left_ert yy" :style="{height:fleer+'px'}">
				<view class="dian fz26 z3 cen pt20 pm20 uyg_dseert" v-for="(sd,idx) in ddf_ddr" :class="sd.cls" @tap="qiehuan(sd,idx)">
					<text class="pr">{{sd.name}}</text>
				</view>
			</view>
			<view class="dx_col pl20 pr20">
				<view class="" v-for="sd in erjie"  v-if="sd.children.length>0">
					<view class="fz26 z3 pt20 pm20 dsfdfdst">
						{{sd.name}}
					</view>
					<view class="dx_row bgff sdsf_deret   yy" >
						<view class="case_deertt cen" v-for="sf in sd.children" @tap="hf('/pages/fenlei/shangping?fenleiname='+sf.name)">
							{{sf.name}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import top from '../compon/top.vue'
	export default {
		data() {
			return {
				fleer: 0, //左边的菜单的高度
				ddf_ddr: [],
				erjie:[],
				szsd:0
			}
		},
		components: {
			top
		},
		onPullDownRefresh() {
			this.getdata()
		},
		onShow() {
			uni.setBackgroundColor({
				backgroundColor: "#ffffff",
				backgroundColorTop: "#ffffff"
			});
		},
		onLoad() {
			//  高度自适应
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
					let calc = res.windowHeight - uni.upx2px(80);
					this.fleer = calc + 34
					console.log(calc)
				}
			});
		},
		methods: {
			qiehuan(sd,idx) { //左边的菜单点击事件
				this.ddf_ddr.map(a => {
					a.cls = ''
				})
				sd.cls = "act"
				this.szsd = idx
				this.chushie()
			},
			async getdata() {
				let data = await this.post("csscs/fenlei")
				this.ddf_ddr = data
				this.chushie()
				uni.stopPullDownRefresh();
			},
			chushie (){
				this.erjie = this.ddf_ddr[this.szsd].children
			}
		},
		mounted() {
			this.getdata()
		}
	}
</script>
<style scoped>
	.ssd_jhh_der {
		background: #fafafa;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 100;
	}

	.fenlei_page {}

	.ddf_xeertx {
		padding-left: 170upx !important;
	}

	.ssd_jhh_der image {
		left: 40upx;
		top: 35upx;
	}

	.dx_left_ert {
		width: 170upx;
		background: #fff;
		position: fixed;
		left: 0;
		top: 90upx;

	}

	.sdsf_deret {
		border-radius: 10upx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 20upx;
		grid-row-gap: 10upx;
	}


	.uyg_dseert {
		position: relative;
		line-height: 1.6 !important;
	}

	.uyg_dseert.act {
		background: #FAFAFA;
		color: #F39F3A !important;
	}

	.uyg_dseert.act:after {
		content: ' ';
		position: absolute;
		left: 0;
		top: 24upx;
		height: 30upx;
		width: 6upx;
		background: #F39F3A;
	}

	.dsfdfdst {
		line-height: 1.4 !important;
	}

	.case_deertt {
		border-top: 1px solid #f8f8f8;
		border-right: 1px solid #f8f8f8;
		line-height: 60upx;
	}
</style>
