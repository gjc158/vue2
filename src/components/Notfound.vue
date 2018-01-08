<template>
	<div class="notfound">
		404 - not found
		<div>{{msg}}</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'notfound',
		data () {
			return {
				msg: '页面不存在'
			}
		}
	}
</script>