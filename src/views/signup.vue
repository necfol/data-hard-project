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
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">邮箱</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入邮箱">
                            </div>
                             <div class="form-group">
                                <label for="exampleInputPassword1">密码</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码">
                            </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">重复密码</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请重复密码">
                            </div>
                       
                           <a href="index.html" class="btn btn-primary btn-block">注册</a>
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
      msg: 'Hello Worlddddd!'
    }
  }
}
</script>
