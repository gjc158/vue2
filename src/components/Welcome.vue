<template>
	<div class="notfound">
		<div class="error-msg">{{msg}}</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'welcome',
		data () {
			return {
				msg: '欢迎使用后台管理系统'
			}
		}
	}
</script>
<style scoped>
	.error-msg{
		margin-top: 10px;
		font-size: 16px;
	}
</style>