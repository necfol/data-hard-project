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
                           登录
                        </h3>
                        </div>
                        <div class="panel-body">
                            <p>登录系统</p>
                            <form class="form-horizontal" role="form">
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="name" id="name" style="padding-left: 32px" placeholder="请输入登录名" minlength="11" maxlength="11">
                                        <i class="fa fa-user"></i>
                                        <span v-show="namee" class="err">{{nameError}}</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input type="password" class="form-control" v-model="password" id="password" placeholder="请输入登录密码（只能输入6-20个字母、数字、下划线）">
                                        <i class="fa fa-lock"></i>
                                        <span v-show="passworde" class="err">{{passwordError}}</span>
                                        <a href="javascript:void(0)" class="help-block">忘记密码？</a>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <a href="#" v-on:click.stop.prevent="signinbutton" class="btn btn-primary btn-block">登录</a>
                                        <hr />
                                        <a href="#" v-link="{path: '/signup'}" class="btn btn-default btn-block">去注册</a>
                                    </div>
                                </div>
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
      nameError: '',
      namee: false,
      passwordError: '',
      passworde: false
    }
  },
  methods: {
    signinbutton: function (e) {
      var pwdr = reg.exec(/^(\w){6,20}$/, this.password)
      if (!pwdr) {
        this.passworde = true
        this.passwordError = '密码格式不对'
      }
      var username = this.name
      var password = crypto.createHmac('sha256', this.password).update('data').digest('hex')
      this.$http.post('http://127.0.0.1' + '/signin', {
        username: striptags(username),
        password: password
      }, function (r) {
        if (r > 0) {
          this.$router.go('/home')
        } else {
          this.nameError = '登录名或密码错误'
          this.namee = true
        }
      })
    }
  },
  watch: {
    name: function (val, oldval) {
      if (val !== oldval) {
        this.nameError = ''
        this.namee = false
      }
    },
    password: function (val, oldval) {
      if (val !== oldval) {
        this.passwordError = ''
        this.passworde = false
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