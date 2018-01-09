<template>
	<div class="notfound">
		<img src="../assets/notfound.png" alt="">
		<div class="error-msg">{{msg}}</div>
		<el-button class='back-btn' type='text' @click='goLogin()'>返回登录</el-button>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'notfound',
		data () {
			return {
				msg: '页面不存在'
			}
		},
		methods: {
			goLogin () {
				this.$router.push('/login');
			}
		}
	}
</script>
<style scoped>
	.notfound{
		width: 100%;
		text-align: center;
		padding-top: 100px;
	}
	.error-msg{
		margin-top: 10px;
		font-size: 16px;
	}
	.back-btn {
		margin-top: 10px;
	}
</style>