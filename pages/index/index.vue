<template>
	<view class="index_page">
		<top></top>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="lunudeerx"
		 indicator-active-color="#fff" :circular="true">
			<swiper-item v-for="sd in banners">
				<image :src="sd.imgurl" class="w100 h100"></image>
			</swiper-item>
		</swiper>
		<view class="pd pr">
			<view class="jinxuanfen yy">
				<view class="fz32 z3 cen jiswwexwe">
					精选分类
				</view>
				<view class=" parent">
					<view class="ssdd_deertx" v-for="sd in fenlei" @tap="hf('/pages/fenlei/shangping?fenleiname='+sd.name)">
						<image :src="sd.url" class="w100"></image>
						<view class="fz26 cen z3">
							{{sd.name}}
						</view>
					</view>
					<view class="ssdd_deertx" @tap="hf('/pages/fenlei/shangping?fenleiname=')">
						<view class="cen">
							<image src="../../static/img/gengduo.png" class="w100 gengduo"></image>
						</view>
						<view class="fz26 cen z3">
							全部分类
						</view>
					</view>
				</view>
			</view>
		</view>
		{{denghsd}}
		<view class="pd mt20 z9 fz26 cen pt20 pm20">
			© Copyright 2019
			<view class="">
				独行工匠工作室版权所有
			</view>
		</view>

	</view>
</template>
<script>
	import top from '../compon/top.vue'
	export default {
		data() {
			return {
				denghsd: "1",
				banners: [],
				fenlei: []
			}
		},
		components: {
			top
		},
		onShow() {

		},
		onHide: function() {

		},
		onPageScroll(e) {

		},
		onPullDownRefresh() {
			this.getdata()
		},
		onShareAppMessage: function(res) {
			// 来自页面内分享按钮
			return {
				title: "獨行工匠",
				path: "/pages/index/index"
			}
		},
		methods: {
			async getdata() {
				let data = await this.post("csscs/init")
				this.banners = data.banner
				this.fenlei = data.fenlei
				uni.stopPullDownRefresh();
			}
		},
		mounted() {
			this.loadapp()
			let th = this
			this.getdata()
		}
	}
</script>
