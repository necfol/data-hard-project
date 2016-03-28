<template>
    <section class="container animated fadeInUp">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div id="login-wrapper">
                    <header>
                        <div class="brand">
                            <a href="index.html" class="logo">
                                <i class="icon-layers"></i>
                                <span>管理</span>测试</a>
                        </div>
                    </header>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                          <h3 class="panel-title">     
                           注册
                        </h3>  
                    </div>
                    <div class="panel-body">
                        <p >已经注册过啦？ <a href="#" v-link="{path: '/signin'}"><strong>登录</strong></a></p>
                        <form role="form">
                            <div class="form-group">
                                <label for="exampleInputEmail1">用户名</label>
                                <input type="text" v-model="username" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
                                <span v-show="usernamee" class="err">{{usernameError}}</span>
                            </div>
                           <!--  <div class="form-group">
                                <label for="exampleInputPassword1">邮箱</label>
                                <input type="email" class="form-control" v-model="email" id="exampleInputPassword1" placeholder="请输入邮箱">
                                <span v-show="emaile" class="err">{{emailError}}</span>
                            </div> -->
                             <div class="form-group">
                                <label for="exampleInputPassword1">密码</label>
                                <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="密码">
                                <span v-show="passworde" class="err">{{passwordError}}</span>
                            </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">重复密码</label>
                                <input type="password" class="form-control" v-model="rpassword" id="exampleInputPassword1" placeholder="请重复密码">
                                <span v-show="rpassworde" class="err">{{rpasswordError}}</span>
                            </div>
                       
                           <a href="#" id="signup" class="btn btn-primary btn-block" v-on:click.stop.prevent="signupbutton">注册</a>
                        </form>

                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style src="../assets/plugins/bootstrap/css/bootstrap.min.css"></style>
<style src="../assets/css/simple-line-icons.css"></style>
<style src="../assets/css/animate.css"></style>
<style src="../assets/css/main.css"></style>
<script>
var reg = require('../utils/regexp')
var crypto = require('crypto')
var striptags = require('striptags')
export default {
  data () {
    return {
      usernameError: '',
      // emailError: '',
      passwordError: '',
      rpasswordError: '',
      usernamee: false,
      // emaile: false,
      passworde: false,
      rpassworde: false
    }
  },
  methods: {
    signupbutton: function (e) {
      var pwdr = reg.exec(/^(\w){6,20}$/, this.password)
      if (!pwdr) {
        this.passworde = true
        this.passwordError = '密码格式不对'
        return
      }
      if (this.password !== this.rpassword) {
        this.rpassworde = true
        this.rpasswordError = '密码不一致'
        return
      }
      var username = this.username
      var password = crypto.createHmac('sha256', this.password).update('data').digest('hex')
      this.$http.post('http://127.0.0.1' + '/signup', {
        username: striptags(username),
        password: password
      }, function (err, result) {
        console.error(err, result)
      })
    }
  },
  watch: {
    username: function (val, oldval) {
      if (val !== oldval) {
        this.usernameError = ''
        this.usernamee = false
      }
    },
    password: function (val, oldval) {
      if (val !== oldval) {
        this.passwordError = ''
        this.passworde = false
      }
    },
    rpassword: function (val, oldval) {
      if (val !== oldval) {
        this.rpasswordError = ''
        this.rpassworde = false
      }
    }
  }
}
</script>
<style>
  .err {
    font-size: 14px;
    color: red;
  }
</style>