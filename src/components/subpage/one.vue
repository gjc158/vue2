<template>
	<div class="one">
		one page {{msg}}
		count: {{ $store.state.count }}
		<div>
		  <el-button type="primary" icon="el-icon-plus" @click='addOne()'>加1</el-button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'one',
		data () {
			return {
				msg: 'ddd',
				t2: this.$store.state.count
			} 
		},
		methods: {
			addOne() {
				this.$store.dispatch('addCount');
			}
		}
	}
</script>