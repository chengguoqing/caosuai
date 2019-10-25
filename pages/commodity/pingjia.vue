<template>
	<view>
		<van-cell-group>
			<van-cell v-for="(sd,idx) in 10" :key="idx">
				<view>
					<view class="dx_row tl">
						<image src="http://iph.href.lu/80x80" class="user_iconswwr"></image>
						<view class="dx_col pl20 dsf_deerttxer">
							<view class="z6 fz30 mt10">
								神秘用户
							</view>
							<view class="">
								<van-rate value="4" readonly size="14" />
							</view>
						</view>
					</view>
					<view class="fz26 z3 tl mt10 dfd_deeettwr">
						評價的內容評價的內容評
					</view>
				</view>
			</van-cell>
		</van-cell-group>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {},
		mounted() {}
	}
</script>
<style lang='scss' scoped>

</style>
