<template>
	<view class="page dx_row">
		<image src="../../static/img/close.png" class="close_ideet" @tap="ht"></image>
		<image src="../../static/img/zandhe.png" class="zasdeerxc" v-if="!iszanting"></image>
		<view class="ssd_ddf_rige cen" v-for="(sd,idx) in videoList" v-if="idx == idssd">
			<image src="../../static/img/neiku.jpg" class="useer_dersew"></image>
			<view class="mt40">
				<image src="../../static/img/aixin.png" mode="widthFix" class="aixinwerr cz"></image>
				<view class="fz26 cf">
					{{idx+1}}.3W
				</view>
			</view>
			<view class="mt30">
				<image src="../../static/img/xiaoxi.png" mode="widthFix" class="aixinwerr cz"></image>
				<view class="fz26 cf">
					{{idx+1}}.3W
				</view>
			</view>
			<view class="mt30">
				<image src="../../static/img/share-fill.png" mode="widthFix" class="aixinwerr cz"></image>
				<view class="fz26 cf">
					{{idx+1}}.3W
				</view>
			</view>
			<view class="dsff_deertd">
				<view class="fz30 cf dian">
					标题标题标题标题标题标题
				</view>
				<view class="fz26 cf dier mt15">
					内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
				</view>
			</view>
		</view>

		<swiper class="swiper" :circular="circular" :vertical="true" @change="onSwiperChange">
			<swiper-item v-for="item in videoList" :key="item.id">
				<video class="video" :id="item.id" :ref="item.id" :src="item.src" :controls="false" :loop="true"
				 :show-center-play-btn="false" @tap="ddfrwet(item.id)">
				</video>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	const videoData = [{
			src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4'
		},
		{
			src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4'
		},
		{
			src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4'
		},
		{
			src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4'
		},
		{
			src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4'
		},
		{
			src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4'
		}
	];

	export default {
		data() {
			return {
				circular: true,
				iszanting: true,
				idssd:0,
				videoList: [{
						id: "video0",
						act:"",
						src: "",
						img: ""
					},
					{
						id: "video1",
						src: "",
						act:"",
						img: ""
					},
					{
						id: "video2",
						src: "",
						act:"",
						img: ""
					}
				],
				videoDataList: []
			}
		},
		onLoad(e) {},
		onReady() {
			this.init();
			this.getData();
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			ddfrwet (e) {
				if(this.iszanting){
					this.iszanting=false
					uni.createVideoContext(e).pause()
				}else{
					this.iszanting=true
					uni.createVideoContext(e).play()
				}
				
				console.log(e)
			},
			init() {
				this._videoIndex = 0;
				this._videoContextList = [];
				for (var i = 0; i < this.videoList.length; i++) {
					this._videoContextList.push(uni.createVideoContext('video' + i, this));
				}
				this._videoDataIndex = 0;
			},
			getData(e) {
				this.videoDataList = videoData;
				setTimeout(() => {
					this.updateVideo(true);
				}, 200)
			},
			onSwiperChange(e) { 
				this.iszanting = true
				let currentIndex = e.detail.current;
				if (currentIndex === this._videoIndex) {
					return;
				}
				this.idssd = currentIndex

				let isNext = false;
				if (currentIndex === 0 && this._videoIndex === this.videoList.length - 1) {
					isNext = true;
				} else if (currentIndex === this.videoList.length - 1 && this._videoIndex === 0) {
					isNext = false;
				} else if (currentIndex > this._videoIndex) {
					isNext = true;
				}

				if (isNext) {
					this._videoDataIndex++;
				} else {
					this._videoDataIndex--;
				}

				if (this._videoDataIndex < 0) {
					this._videoDataIndex = this.videoDataList.length - 1;
				} else if (this._videoDataIndex >= this.videoDataList.length) {
					this._videoDataIndex = 0;
				}

				this.circular = (this._videoDataIndex != 0);

				if (this._videoIndex >= 0) {
					this._videoContextList[this._videoIndex].pause();
					this._videoContextList[this._videoIndex].seek(0);
				}

				this._videoIndex = currentIndex;

				setTimeout(() => {
					this.updateVideo(isNext);
				}, 200);
			},
			getNextIndex(isNext) {
				let index = this._videoIndex + (isNext ? 1 : -1);
				if (index < 0) {
					return this.videoList.length - 1;
				} else if (index >= this.videoList.length) {
					return 0;
				}
				return index;
			},
			getNextDataIndex(isNext) {
				let index = this._videoDataIndex + (isNext ? 1 : -1);
				if (index < 0) {
					return this.videoDataList.length - 1;
				} else if (index >= this.videoDataList.length) {
					return 0;
				}
				return index;
			},
			updateVideo(isNext) {
				this.$set(this.videoList[this._videoIndex], 'src', this.videoDataList[this._videoDataIndex].src);
				this.$set(this.videoList[this.getNextIndex(isNext)], 'src', this.videoDataList[this.getNextDataIndex(isNext)].src);
				setTimeout(() => {
					this._videoContextList[this._videoIndex].play();
				}, 200);
				console.log("v:" + this._videoIndex + " d:" + this._videoDataIndex + "; next v:" + this.getNextIndex(
					isNext) + " next d:" + this.getNextDataIndex(isNext));
			}
		}
	}
</script>

<style>
	.close_ideet{
			position: fixed;
			left: 20upx;
			top: 70upx;
			z-index: 10001;
			width: 40upx;
			height: 40upx;
		}
		.dsf_erdrerer{
			position: fixed;
			left: 0;
			top: 120upx;
			width: 100%;
			text-align: center;
			font-size: 28upx;
			z-index: 1000;
			line-height: 1;
		}
		.dsf_erdrerer text{
			padding-left: 20upx;
			padding-right: 20upx;
			color: #fff;
			display: inline-block;
			line-height: 1;
			
			
		}
		.dsf_erdrerer text.aa{
			border-right: 1px solid #fff;
		}
		.dsf_erdrerer text.act{
			font-size: 30upx;
		}
		.ssd_ddf_rige{
			position: fixed;
			right: 20upx;
			bottom: 100upx;
			z-index: 1000;
		}
		.useer_dersew{
			width: 94upx;
			height: 94upx;
			border: 4upx solid #fff;
			border-radius: 50%;
		}
	    .aixinwerr{
			width: 70upx;
		}
		.dsff_deertd{
			position: fixed;
			left: 20upx;
			bottom: 40upx;
			width: 80%;
			text-align: left;
		}


	.page {
		width: 750rpx;
		height: 100vh;
	}

	.swiper {
		flex: 1;
		height: 100%;
	}

	.swiper-item {
		flex: 1;
		height: 100%;
	}

	.video {
		flex: 1;
		height: 100%;
		/* #ifndef APP-PLUS */
		width: 100%;
		/* #endif */
	}
	.zasdeerxc{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100upx;
		height: 100upx;
		margin: auto;
		z-index: 10000;
	}
</style>
