<template>
  <div class="hello">
    <div class="login-title">
      <img src="../assets/login-brand.png" alt=""/>
    </div>
    <el-card class="box-card">
      <div slot="header" class="card-header clearfix">
        <span>城停信息后台管理系统</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="login-div" v-if="is_login">
        <el-form ref="form" label-position="left" label-width="70px" :model="ruleForm" :rules="rules" ref='ruleForm'>
            <el-form-item label="登录名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
              <el-input v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" round @click="gologin()">登录</el-button>
              <!-- <el-button type="primary" @click="gologin()">登录</el-button> -->
              <!-- <el-button type="primary" @click="changeType(1)">注册</el-button> -->
            </el-form-item>
        </el-form>
      </div>
      <div class="register-div" v-else>
        <el-form ref="form" label-position="left" label-width="180px">
            <el-form-item label="登录名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">注册</el-button>
              <el-button type="primary" @click="changeType(2)">取消</el-button>
            </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      is_login: true,
      ruleForm: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { max: 50, message: '名称太长', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 20, message: '密码长度应在6到20位之间', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    changeType (type) {
      if(type == 2){
        this.is_login = true
      }else{
        this.is_login = false
      }
    },
    gologin () {
      //this.$router.push('/first');
      /*var param = {}
      param.name = this.login_user;
      param.password = this.pwd;
      param.type = 0;
      this.$http.post('/p1/admin/user/login', this.$qs.stringify(param))
      .then(function(data){

      }).catch(function(data){

      });*/
      this.$refs.userForm.validate();
    },
  },
  mounted () {
      let name = this.$store.state.user;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../css/login.less';
</style>
<style lang='less'>
  @media screen and (max-width: 425px) {
  .hello{
    .el-card.box-card{
      border: none;
      background-color: transparent;
      box-shadow: none;
    }
  }
}
</style>