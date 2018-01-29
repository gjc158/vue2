<template>
  <div class="hello">
    <el-menu mode="horizontal" 
        @select="handleSelect" 
        class="el-menu-login-top"
        background-color="#3e99f4"
        text-color="#fff"
        active-text-color="#ffd04b">
      <img src="../assets/logo.png" alt=""/>
      <el-submenu index="1">
          <template slot="title">{{ $t('login.language')}}</template>
          <el-menu-item index="2-1" @click="changeLocale('zh')">中文</el-menu-item>
          <el-menu-item index="2-2" @click="changeLocale('en')">English</el-menu-item>
        </el-submenu>
    </el-menu>
    <el-card class="box-card">
      <div slot="header" class="card-header clearfix">
        <span>{{ $t('login.back_system') }}</span>
        <el-button style="float: right; padding: 3px 0; width: 80px;" type="text" @click="changeType()">
          <span v-if='is_login'>{{ $t('login.code_login') }}</span><span v-else>{{ $t('login.back') }}</span></el-button>
      </div>
      <div class="login-div" v-show="is_login">
        <el-form ref="form" label-position="left" label-width="70px" :model="ruleForm" :rules="rules">
            <el-form-item label="登录名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
             <el-input type="password" v-model="ruleForm.pwd"></el-input>
           </el-form-item>
            <!-- <el-form-item :label="$t('login.login_name')" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item> -->
           <!--  <el-form-item :label="$t('login.password')" prop="pwd">
             <el-input type="password" v-model="ruleForm.pwd"></el-input>
           </el-form-item> -->
            <el-form-item>
              <el-button type="primary" class='login-btn' round @click="gologin()">{{ $t('login.login') }}</el-button>
              <!-- <el-button type="primary" @click="gologin()">登录</el-button> -->
              <!-- <el-button type="primary" @click="changeType(1)">注册</el-button> -->
            </el-form-item>
        </el-form>
      </div>
      <div class="register-div" v-show="!is_login">
        <el-form ref="phone_form" label-position="left" label-width="80px" :model='phoneForm' :rules="rules2">
            <el-form-item label="手机号" prop='phone'>
              <el-input v-model="phoneForm.phone"></el-input>
            </el-form-item>
            <!-- <el-form-item :label="$t('login.phone')" prop='phone'>
              <el-input v-model="phoneForm.phone"></el-input>
            </el-form-item> -->
            <el-form-item label="验证码" prop='code'>
              <el-input v-model="phoneForm.code" class="input-with-button">
                <template slot="append">
                  <el-button v-if='!is_send' @click='sendMsg()'>{{ $t('login.send') }}</el-button>
                  <el-button v-else disabled ><span :model='time_dec'>{{ time_dec }}</span>s</el-button>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="gologin()">{{ $t('login.login') }}</el-button>
              <el-button type='default' @click="changeType()">{{ $t('login.cancel') }}</el-button>
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
      is_send: false,
      time_dec: 30,
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
        phone: [{ required: true, trigger: 'blur', validator: validPhone }],
        code: [{required: true, trigger: 'blur', message: '请输入验证码'}]
      }
    }
  },
  methods: {
    changeType () {
      if(this.is_login == true){
        this.is_login = false
      }else{
        this.is_login = true
      }
    },
    handleSelect () {

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
      if(this.is_login){
        this.$refs.form.validate(function (result) {
          if(result){
              // 验证通过,调用module里的setUserInfo方法
              //this.$store.dispatch("setUserInfo");
              if(this.ruleForm.name == 'admin' && this.ruleForm.pwd == '123456'){
                this.$store.state.token = this.ruleForm.name + '-'+this.ruleForm.pwd;
                this.$router.push('main');
              }else{
                 this.$message('不正确的用户名或者密码');
              }
          }else{
            //this.$message('不正确的用户名或者密码');
          }
        }.bind(this));
      }else{
        this.$refs.phone_form.validate(function (result) {
          if(result){
              // 验证通过,调用module里的setUserInfo方法
              //this.$store.dispatch("setUserInfo");
              if(this.phoneForm.phone == '13348296753' && this.phoneForm.code == '123456'){
                this.$store.state.token = this.phoneForm.phone + '-'+this.phoneForm.code;
                this.$router.push('main');
              }else{
                 this.$message('不正确的手机号码或验证码');
              }
          }else{
            //this.$message('不正确的用户名或者密码');
          }
        }.bind(this));
      }
    },
    sendMsg () {
      this.is_send = true;
      this.timekey = setInterval(()=>{
        this.time_dec -= 1;
        if(this.time_dec == 0) {
          clearInterval(this.timekey);
          this.time_dec = 30;
          this.is_send = false;
        } 
      }, 1000);
    },
    changeLocale (type) {
      this.$confirm(this.$t('layer.toggle'), this.$t('layer.tips'), {
        confirmButtonText: this.$t('button.ok'),
        cancelButtonText: this.$t('button.cancel'),
        type: 'warning'
        }).then(() => {
           let locale = this.$i18n.locale
           console.info(locale);
           this.$i18n.locale = type;

        }).catch(() => {
          this.$message({
            type: 'info',
          })      
        })
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
  .el-menu-login-top{
    .el-submenu{
      color: #fff;
      .el-submenu__title i{
        color: #fff;
      }
    }
  }
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