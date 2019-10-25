<template>
	<view class="">
		<view class="fengxiangweer" v-if="ieerss" @tap="$emit('ssddfeer')">
			<image src="/static/img/fengxiangweer.png"></image>
		</view>
		<view class="fengxiangweer" v-if="!ieerss">
			<image src="/static/img/fengxiangweer.png"></image>
			<button open-type="share"></button>
		</view>
		<image class="dingbudd" src="/static/img/dingbudd.png" v-if="scrollTop>=300" @tap="goTop"></image>
	</view>
</template>

<script>
	export default {
		props: {
			scrollTop: '',
			ieerss:""
		},
		data() {
			return {}
		},
		components: {},
		methods: {
			goTop: function() {
				uni.pageScrollTo({
					scrollTop: 0
				})
			}
		},
		mounted() {}
	}
</script>

<style>
</style>
