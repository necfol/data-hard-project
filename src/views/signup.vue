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
                           Sign Up
                        </h3>  
                    </div>
                    <div class="panel-body">
                        <p >Already a member? <a href="pages-login.html"><strong>Sign In</strong></a></p>
                        <form role="form">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Email</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your email">
                            </div>
                             <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">Retype Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Retype your password">
                            </div>
                       
                           <a href="index.html" class="btn btn-primary btn-block">Sign Up</a>
                        </form>

                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style src="./assets/plugins/bootstrap/css/bootstrap.min.css"></style>
<style src="./assets/css/simple-line-icons.css"></style>
<style src="./assets/css/animate.css"></style>
<style src="./assets/css/main.css"></style>
<script>
export default {
  data () {
    return {
      msg: 'Hello Worlddddd!'
    }
  }
}
</script>
