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
                           注册
                        </h3>  
                    </div>
                    <div class="panel-body">
                        <p >已经注册过啦？ <a href="pages-login.html"><strong>登录</strong></a></p>
                        <form role="form">
                            <div class="form-group">
                                <label for="exampleInputEmail1">用户名</label>
                                <input type="text" v-model="username" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
                                <span v-show="namee" class="err">{{usernameError}}</span>
                                <!-- <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名"> -->
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">邮箱</label>
                                <input type="email" class="form-control" v-model="email" id="exampleInputPassword1" placeholder="请输入邮箱">
                                <span v-show="emaile" class="err">{{emailError}}</span>
                            </div>
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
export default {
  data () {
    return {
      usernameError: '',
      emailError: '',
      passwordError: '',
      rpasswordError: '',
      namee: false,
      emaile: false,
      passworde: false,
      rpassworde: false
    }
  },
  methods: {
    signupbutton: function (e) {
      this.$http.post('http://127.0.0.1' + '/signup', {
        'name': '星星',
        'email': 'necfoll@gmail.com'
      }, function (projects) {
        console.error(projects)
      })
      this.usernameError = '1'
      this.emailError = '2'
      this.passwordError = '3'
      this.rpasswordError = '4'
      this.namee = true
      this.emaile = true
      this.passworde = true
      this.rpassworde = true
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