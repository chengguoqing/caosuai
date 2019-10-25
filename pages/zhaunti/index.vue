<template>
	<view class="zhuancbh">
		<image src="../../static/img/huodong.jpg" mode="widthFix" class="w100 cz"></image>
		<scroll-view scroll-x="true" class="ddf_jhj_eet">
			<view class="dx_jz">
				<view class="f_b sdfds_jj_dr pr" :class="sd.cls" v-for="(sd,idx) in caidan" @tap="qiehuan(sd,idx)">
						{{sd.name}}
				</view>
			</view>
		</scroll-view>
		<view class="pd pt10">
			<baokuang v-if="idx_e==0"></baokuang>
			<zhaungchanger v-if="idx_e==1"></zhaungchanger>
			<zhaungchanger v-if="idx_e==2" idx_e="ab"></zhaungchanger>
			<pubu v-if="idx_e==3" :istou="true"></pubu>
			
		</view>
	</view>
</template>
<script>
	import baokuang from "@/components/baokuang"
	import zhaungchanger from "@/components/zhaungchanger"
	import pubu from "@/components/pubu"
	export default {
		data() {
			return {
				idx_e:0,
				caidan:[
					{
						cls:"act",
						name:"超级爆款"
					},{
						cls:"",
						name:"为你精选"
					},{
						cls:"",
						name:"五谷稻香"
					},{
						cls:"",
						name:"瀑布流"
					}
				]
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		components: {
			baokuang,
			zhaungchanger,
			pubu
		},
		methods: {
			qiehuan(e,idx){
				this.caidan.map(a=>{
					a.cls=""
				})
				e.cls="act"
				this.idx_e=idx
			}
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	.zhuancbh{
		background: #CAEFFF;
	}
	
	
</style>
