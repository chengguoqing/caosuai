<!-- 搜索结果 -->
<template>
	<view>
		<view class="ss_deertyxew">
			<van-search placeholder="请输入搜索关键词"  @search="onSearch"></van-search>
		</view>
		
		<view class="pd mt20">
			<wntj :istou="true"></wntj>
		</view>
	</view>
</template>
<script>
	import wntj from "@/components/wntj"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			wntj
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	.ss_deertyxew{
		position: sticky;
		left: 0;
		top: 0;
		z-index: 1000;
	}
</style>
