<template>
	<div class="first">
		<div>
			welcome to first page!
			{{ msg }}
		</div>
	</div>
</template>
<script>
export default {
  name: 'First',
  data () {
    return {
      msg: '',
    }
  },
  mounted () {
  	this.msg = this.$store.state.user;
  }
}	
</script>