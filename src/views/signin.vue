<template>
<section class="container animated fadeInUp">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div id="login-wrapper">
                    <header>
                        <div class="brand">
                            <a href="index.html" class="logo">
                                <i class="icon-layers"></i>
                                <span>NEU</span>BOARD</a>
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
                                        <input type="email" class="form-control" v-model="email" id="email" placeholder="请输入登录邮箱">
                                        <i class="fa fa-user"></i>
                                        <span v-show="emaile" class="err">{{emailError}}</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input type="password" class="form-control" v-model="password" id="password" placeholder="请输入登录密码">
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
export default {
  data () {
    return {
      emailError: '',
      passwordError: '',
      emaile: false,
      passworde: false
    }
  },
  methods: {
    signinbutton: function (e) {
      this.$http.post('http://127.0.0.1' + '/signin', {
        name: 'necfol',
        mail: 'yo@gmail.com'
      }, function (projects) {
        console.error(projects)
      })
      this.emailError = '2'
      this.passwordError = '3'
      this.emaile = true
      this.passworde = true
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