<template>
	<div class="first">
		<el-container>
		  <el-header>
		  	<el-menu
		  	  :default-active="activeIndex2"
		  	  class="el-menu-main-top"
		  	  mode="horizontal"
		  	  @select="handleSelect"
		  	  background-color="#545c64"
		  	  text-color="#fff"
		  	  active-text-color="#ffd04b">
		  	  <img src="../assets/logo.png" class="brand-png">
		  	  <span class='count-span'>
		  	  	总数：{{ $store.state.count }}; message:<span v-model='message' @click='changeMsg'> {{message}}</span>
		  	  </span>
		  	  <el-menu-item index="1">处理中心</el-menu-item>
		  	  <el-submenu index="2">
		  	    <template slot="title">我的工作台</template>
		  	    <el-menu-item index="2-1">选项1</el-menu-item>
		  	    <el-menu-item index="2-2">选项2</el-menu-item>
		  	    <el-menu-item index="2-3">选项3</el-menu-item>
		  	  </el-submenu>
		  	  <el-menu-item index="3"><a href="javascript: void(0);">订单管理</a></el-menu-item>
		  	</el-menu>
		  </el-header>
		  <el-container>
		    <el-aside width="200px">
		    	<el-menu :default-openeds="['1']">
		    	  <el-submenu index="1">
		    	    <template slot="title"><i class="el-icon-message"></i>导航一</template>
	    	        <el-menu-item index="1-1" @click='goSubpage("/one")' >选项1</el-menu-item>
	    	        <el-menu-item index="1-2" @click='goSubpage("/two")'>选项2</el-menu-item>
		    	    <el-menu-item index="1-3">选项3</el-menu-item>
		    	    <el-submenu index="1-4">
		    	      <template slot="title">选项4</template>
		    	      <el-menu-item index="1-4-1">选项4-1</el-menu-item>
		    	    </el-submenu>
		    	  </el-submenu>
		    	  <el-submenu index="2">
		    	    <template slot="title"><i class="el-icon-menu"></i>导航二</template>
		    	    <el-menu-item-group>
		    	      <template slot="title">分组一</template>
		    	      <el-menu-item index="2-1">选项1</el-menu-item>
		    	      <el-menu-item index="2-2">选项2</el-menu-item>
		    	    </el-menu-item-group>
		    	    <el-menu-item-group title="分组2">
		    	      <el-menu-item index="2-3">选项3</el-menu-item>
		    	    </el-menu-item-group>
		    	    <el-submenu index="2-4">
		    	      <template slot="title">选项4</template>
		    	      <el-menu-item index="2-4-1">选项4-1</el-menu-item>
		    	    </el-submenu>
		    	  </el-submenu>
		    	  <el-submenu index="3">
		    	    <template slot="title"><i class="el-icon-setting"></i>导航三</template>
		    	    <el-menu-item-group>
		    	      <template slot="title">分组一</template>
		    	      <el-menu-item index="3-1">选项1</el-menu-item>
		    	      <el-menu-item index="3-2">选项2</el-menu-item>
		    	    </el-menu-item-group>
		    	    <el-menu-item-group title="分组2">
		    	      <el-menu-item index="3-3">选项3</el-menu-item>
		    	    </el-menu-item-group>
		    	    <el-submenu index="3-4">
		    	      <template slot="title">选项4</template>
		    	      <el-menu-item index="3-4-1">选项4-1</el-menu-item>
		    	    </el-submenu>
		    	  </el-submenu>
		    	</el-menu>
		    </el-aside>
		    <el-container>
		      <el-main><router-view></router-view>
		      	<!-- <el-table :data="tableData">
		      	  <el-table-column prop="date" label="日期" width="140">
		      	  </el-table-column>
		      	  <el-table-column prop="name" label="姓名" width="120">
		      	  </el-table-column>
		      	  <el-table-column prop="address" label="地址">
		      	  </el-table-column>
		      	</el-table> -->
		      </el-main>
		      <el-footer>Footer</el-footer>
		    </el-container>
		  </el-container>
		</el-container>
	</div>
</template>
<style scoped lang='less'>
.first{
	height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-main-top {
	.brand-png{
	    height: 40px;
    	padding: 6px 15px;
	}
	.el-menu-item, .el-submenu{
	  float: right;
	}
}
.count-span{
	color: #fff;
}
.el-container.is-vertical{
	height: 100%;
}
.el-header{
	padding: 0;
}
.el-aside > ul{
	height: 100%;
}
.el-footer{
	line-height: 60px;
	text-align: center;
	font-size: 12px;
	color: #ccc;
}
</style>
<script>
export default {
  name: 'First',
  data () {
    return {
      msg: '',
      isCollapse: false,
      activeIndex: '1',
      activeIndex2: '1',
      tableData: [],
    }
  },
  computed: {
    message: {
      get () {
        return this.$store.state.obj.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goSubpage (_href) {
      this.$router.push(_href);
    },
    changeMsg () {
      this.message == 'hello' ? this.message = 'olleh' : this.message = 'hello'
    }
  },
  mounted () {
  	this.$router.push('/welcome');
  }
}	
</script>