<template>
  <div class="hello">
    <div class="login-title">
      <img src="../assets/logo.png" alt=""/>
    </div>
    <el-card class="box-card">
      <div slot="header" class="card-header clearfix">
        <span>后台管理系统</span>
        <el-button style="float: right; padding: 3px 0; width: 80px;" type="text" @click="changeType(1)">
          <span v-if='is_login'>验证码登录</span><span v-else>返回</span></el-button>
      </div>
      <div class="login-div" v-show="is_login">
        <el-form ref="form" label-position="left" label-width="70px" :model="ruleForm" :rules="rules">
            <el-form-item label="登录名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
              <el-input type="password" v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class='login-btn' round @click="gologin()">登录</el-button>
              <!-- <el-button type="primary" @click="gologin()">登录</el-button> -->
              <!-- <el-button type="primary" @click="changeType(1)">注册</el-button> -->
            </el-form-item>
        </el-form>
      </div>
      <div class="register-div" v-show="!is_login">
        <el-form ref="phone_form" label-position="left" label-width="80px" :model='phoneForm' :rules="rules2">
            <el-form-item label="手机号码">
              <el-input v-model="phoneForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input v-model="phoneForm.code"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="gologin()">登录</el-button>
              <el-button type='default' @click="changeType(2)">取消</el-button>
            </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
//这里要俺需要引入，我不是一个对象
 import {isvalidPhone} from '../config/validate'
//定义一个全局的变量，谁用谁知道
var validPhone=(rule, value,callback)=>{
  if (!value){
    callback(new Error('请输入电话号码'))
  }else  if (!isvalidPhone(value)){
    callback(new Error('请输入正确的11位手机号码'))
  }else {
    callback()
  }
}
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      is_login: true,
      ruleForm: {
        name: '',
        pwd: '',
      },
      phoneForm: {
        phone: '',
        code: '',
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
      },
      rules2: {
        phone: [{ required: true, trigger: 'blur', validator: validPhone }]
      }
    }
  },
  methods: {
    changeType (type) {
      if(this.is_login == true){
        this.is_login = false
      }else{
        this.is_login = true
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
      this.$refs.form.validate(function (result) {
        if(result){
            // 验证通过,调用module里的setUserInfo方法
            //this.$store.dispatch("setUserInfo");
            if(this.ruleForm.name == 'admin' && this.ruleForm.pwd == '123456'){
              this.$router.push('main');
            }else{
               this.$message('不正确的用户名或者密码');
            }
        }else{
          //this.$message('不正确的用户名或者密码');
        }
      }.bind(this));

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