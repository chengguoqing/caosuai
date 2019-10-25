<template>
	<view class="pt20">
		<van-cell-group>
			<van-cell title="头像" is-link class="uliu_eer" @tap="uptouxiang">
				<image src="../../static/img/neiku.jpg" class="user_icone cz" mode="widthFix"></image>
			</van-cell>
			<van-cell title="ID" value="26685298"></van-cell>
			<van-cell title="昵称" value="独行工匠" is-link url="/pages/user/xiugainicheng"/>
			<van-cell title="性别" value="男" is-link @tap="setsex" />
			<van-cell title="个性签名" is-link url="/pages/user/gexingqianming"/>
			<van-cell title="生日" is-link class="pr">
				<picker mode="date" :start="startDate" :end="endDate" class="der_deeret">
					<view class="uni-input">{{date}}</view>
				</picker>
			</van-cell>
		</van-cell-group>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				date: ""
			}
		},
		components: {

		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			uptouxiang() { //头像
				uni.chooseImage({
					count: 1
				});
			},
			setsex() { //设置性别
				uni.showActionSheet({
					itemList: ['男', '女'],
					success: function(res) {
						console.log(res);
					}
				});
			},
			shengri() { //生日点击

			}
		},
		mounted() {

		}
	}
</script>
<style>
	.uliu_eer view {
		line-height: 84upx;
	}

	.uliu_eer .van-icon-arrow {
		position: relative;
		top: 20upx;
	}
	.der_deeret{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
</style>
<style scoped>
	.user_icone {
		width: 84upx;
		height: 84upx;
		border-radius: 50%;
	}
	
</style>
