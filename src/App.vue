<template>
  <section id="main-wrapper" class="theme-default">
        <header id="header">
            <!--logo start-->
            <div class="brand">
                <a href="index.html" class="logo">
                    <i class="icon-layers"></i>
                    <span>NEU</span>BOARD</a>
            </div>
            <!--logo end-->
            <ul class="nav navbar-nav navbar-left">
                <li class="toggle-navigation toggle-left">
                    <button class="sidebar-toggle" id="toggle-left">
                        <i class="fa fa-bars"></i>
                    </button>
                </li>
                <li class="toggle-profile hidden-xs">
                    <button type="button" class="btn btn-default" id="toggle-profile">
                        <i class="icon-user"></i>
                    </button>
                </li>
                <li class="hidden-xs hidden-sm">
                    <input type="text" class="search" placeholder="Search project...">
                    <button type="submit" class="btn btn-sm btn-search"><i class="fa fa-search"></i>
                    </button>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown profile hidden-xs">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                        <span class="meta">
                            <span class="avatar">
                                <img src="assets/img/profile.jpg" class="img-circle" alt="">
                            </span>
                        <span class="text">Mike Adams</span>
                        <span class="caret"></span>
                        </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight" role="menu">
                        <li>
                            <span class="arrow top"></span>
                            <h5>
                                <span>80%</span>
                                <small class="text-muted">Profile complete</small>
                            </h5>
                            <div class="progress progress-xs">
                                <div class="progress-bar progress-bar" style="width: 80%">
                                </div>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="javascript:void(0);">
                                <span class="icon"><i class="fa fa-user"></i>
                                </span>My Account</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <span class="icon"><i class="fa fa-envelope"></i>
                                </span>Messages</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <span class="icon"><i class="fa fa-cog"></i>
                                </span>Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="javascript:void(0);">
                                <span class="icon"><i class="fa fa-sign-out"></i>
                                </span>Logout</a>
                        </li>
                    </ul>
                </li>
                 <li class="toggle-fullscreen hidden-xs">
                    <button type="button" class="btn btn-default expand" id="toggle-fullscreen">
                        <i class="fa fa-expand"></i>
                    </button>
                </li>
                <li class="toggle-navigation toggle-right">
                    <button class="sidebar-toggle" id="toggle-right">
                        <i class="fa fa-indent"></i>
                    </button>
                </li>
            </ul>
        </header>
        <!--sidebar left start-->
        <aside class="sidebar sidebar-left">
            <div class="sidebar-profile">
                <div class="avatar">
                    <img class="img-circle profile-image" src="assets/img/profile.jpg" alt="profile">
                    <i class="on border-dark animated bounceIn"></i>
                </div>
                <div class="profile-body dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><h4>Mike Adams <span class="caret"></span></h4></a>
                    <small class="title">Front-end Developer</small>
                    <ul class="dropdown-menu animated fadeInRight" role="menu">
                        <li class="profile-progress">
                            <h5>
                                <span>80%</span>
                                <small>Profile complete</small>
                            </h5>
                            <div class="progress progress-xs">
                                <div class="progress-bar progress-bar-primary" style="width: 80%">
                                </div>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="javascript:void(0);">
                                <span class="icon"><i class="fa fa-user"></i>
                                </span>My Account</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <span class="icon"><i class="fa fa-envelope"></i>
                                </span>Messages</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <span class="icon"><i class="fa fa-cog"></i>
                                </span>Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="javascript:void(0);">
                                <span class="icon"><i class="fa fa-sign-out"></i>
                                </span>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            <nav>
                <h5 class="sidebar-header">Navigation</h5>
                <ul class="nav nav-pills nav-stacked">
                    <li v-bind:class="{'active': ishome}">
                        <a href="#" v-on:click="loadpage" title="index" id="home">
                            <i class="fa  fa-fw fa-tachometer"></i> 首页
                        </a>
                    </li>
                    <li v-bind:class="{'active': false}">
                        <a href="#" v-on:click="loadpage" title="index" id="realmonitor">
                            <i class="fa  fa-fw fa-tachometer"></i> 实时监控
                        </a>
                    </li>
                    <li v-bind:class="{'active': false}">
                        <a href="#" v-on:click="loadpage" title="index" id="devices">
                            <i class="fa  fa-fw fa-tachometer"></i> 查看设备
                        </a>
                    </li>
                    <li v-bind:class="{'active': false}">
                        <a href="#" v-on:click="loadpage" title="index" id="remark">
                            <i class="fa  fa-fw fa-tachometer"></i> 反馈
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        <!--sidebar left end-->
        <!--main content start-->
        <section class="main-content-wrapper">
            <div class="pageheader">
                <!-- <h1>Dashboard</h1> -->
          <router-view></router-view>
                <p class="description">Welcome to NEUBOARD Responsive Admin Theme</p>
                <div class="breadcrumb-wrapper hidden-xs">
                    <span class="label">You are here:</span>
                    <ol class="breadcrumb">
                        <li class="active">Dashboard</li>
                    </ol>
                </div>
            </div>
            <section id="main-content" class="animated fadeInUp">
                <div class="row">
                    <div class="col-md-12 col-lg-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="panel panel-solid-success widget-mini">
                                    <div class="panel-body">
                                        <i class="icon-bar-chart"></i>
                                        <span class="total text-center">$3,200</span>
                                        <span class="title text-center">Earnings</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="panel widget-mini">
                                    <div class="panel-body">
                                        <i class="icon-support"></i>
                                        <span class="total text-center">1,230</span>
                                        <span class="title text-center">Support</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="panel widget-mini">
                                    <div class="panel-body">
                                        <i class="icon-envelope-open"></i>
                                        <span class="total text-center">1,680</span>
                                        <span class="title text-center">Messages</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="panel panel-solid-info widget-mini">
                                    <div class="panel-body">
                                        <i class="icon-user"></i>
                                        <span class="total text-center">12,680</span>
                                        <span class="title text-center">Signups</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div class="panel panel-default browser-chart">
                            <div class="panel-heading">
                                <h3 class="panel-title">BROWSER STATS</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <ul>
                                            <li><i class="fa fa-circle success-color"></i> Chrome</li>
                                            <li><i class="fa fa-circle primary-color"></i> IE</li>
                                            <li><i class="fa fa-circle warning-color"></i> Safari</li>
                                            <li><i class="fa fa-circle info-color"></i> Firefox</li>
                                            <li><i class="fa fa-circle default-color"></i> Other</li>
                                        </ul>
                                    </div>
                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div id="doughnut-canvas-holder">
                                            <canvas id="doughnut-chart-area" width="137" height="137"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Monthly Goal</h3>
                                <div class="actions pull-right">
                                    <i class="fa fa-expand"></i>
                                </div>
                            </div>
                            <div class="panel-body widget-gauge">
                                <canvas width="160" height="100" id="gauge" class=""></canvas>
                                <div class="goal-wrapper">
                                    <span class="gauge-value pull-left">$</span>
                                    <span id="gauge-text" class="gauge-value pull-left">3,200</span>
                                    <span id="goal-text" class="goal-value pull-right">$5,000</span>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
              <!--   <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">SERVER STATS</h3>
                                <div class="reportdate actions">
                                    <i class="fa fa-calendar-o"></i>
                                    <span>Jan 1 - June 30</span>
                                    <b class="caret"></b>
                                </div>
                            </div>
                            <div class="panel-body server-chart">
                                <div class="row">
                                    <div class="col-md-12 col-lg-4">
                                        <ul>
                                            <li>
                                                <span class="text-left">Network Usage</span>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%">
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="text-left">CPU Load</span>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                                    </div>
                                    <div class="col-md-12 col-lg-8">
                                        <div class="row">
                                            <div class="col-md-12 col-lg-6">
                                                <div class="line-chart">
                                                    <canvas id="canvas1" height="100"></canvas>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-lg-6">
                                                <div class="bar-chart">
                                                    <canvas id="canvas2" height="100"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div class="panel panel-default chat-widget">
                            <div class="panel-heading">
                                <h3 class="panel-title">chat</h3>
                                <div class="actions pull-right">
                                    <i class="fa fa-expand"></i>
                                    <i class="fa fa-chevron-down"></i>
                                    <i class="fa fa-times"></i>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row wrapper animated fadeInRight">
                                    <div class="col-xs-2 col-sm-2 col-md-2 ">
                                        <span class="avatar">
                                        <img src="assets/img/avatar3.png" class="img-circle" alt="">
                                        <i class="on animated bounceIn"></i>
                                    </span>
                                    </div>
                                    <div class="col-xs-10 col-sm-10 col-md-10">
                                        <div class="post default">
                                            <span class="arrow left"></span>
                                            <p>Hey Mike...Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibut</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row wrapper animated fadeInLeft">
                                    <div class="col-xs-10 col-sm-10 col-md-10">
                                        <div class="post primary">
                                            <span class="arrow right"></span>
                                            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et.</p>
                                        </div>
                                    </div>
                                    <div class="col-xs-2 col-sm-2 col-md-2">
                                        <span class="avatar">
                                        <img src="assets/img/profile.jpg" class="img-circle" alt="">
                                        <i class="on animated bounceIn"></i>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <form>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Say something">
                                        <span class="input-group-btn">
                                        <button class="btn btn-primary" type="button">SEND</button>
                                         </span>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="panel">
                            <div class="panel-body">
                                <div class="calendar-block ">
                                    <div class="cal1">

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="panel panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Weather</h3>
                                <div class="actions pull-right">
                                    <i class="fa fa-expand"></i>
                                    <i class="fa fa-chevron-down"></i>
                                    <i class="fa fa-times"></i>
                                </div>
                            </div>
                            <div class="panel-body widget-weather">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                        <h3 class="text-center title">Today</h3>
                                        <div class="text-center">
                                            <canvas id="clear-day" width="75" height="75"></canvas>
                                            <div class="temp">62°C</div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                        <h3 class="text-center title">Tonight</h3>
                                        <div class="text-center">
                                            <canvas id="partly-cloudy-night" width="75" height="75"></canvas>
                                            <div class="temp">44°C</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-6 col-md-2">
                                        <h6 class="text-center small-thin uppercase">Mon</h6>
                                        <div class="text-center">
                                            <canvas id="partly-cloudy-day" width="32" height="32"></canvas>
                                            <span>48°C</span>
                                        </div>
                                    </div>

                                    <div class="col-xs-6 col-sm-6 col-md-2">
                                        <h6 class="text-center small-thin uppercase">Tue</h6>
                                        <div class="text-center">
                                            <canvas id="rain" width="32" height="32"></canvas>
                                            <span>39°C</span>
                                        </div>
                                    </div>

                                    <div class="col-xs-6 col-sm-6 col-md-2">
                                        <h6 class="text-center small-thin uppercase">Wed</h6>
                                        <div class="text-center">
                                            <canvas id="sleet" width="32" height="32"></canvas>
                                            <span>32°C</span>
                                        </div>
                                    </div>

                                    <div class="col-xs-6 col-sm-6 col-md-2">
                                        <h6 class="text-center small-thin uppercase">Thu</h6>
                                        <div class="text-center">
                                            <canvas id="snow" width="32" height="32"></canvas>
                                            <span>28°C</span>
                                        </div>
                                    </div>

                                    <div class="col-xs-6 col-sm-6 col-md-2">
                                        <h6 class="text-center small-thin uppercase">Fri</h6>
                                        <div class="text-center">
                                            <canvas id="wind" width="32" height="32"></canvas>
                                            <span>40°C</span>
                                        </div>
                                    </div>

                                    <div class="col-xs-6 col-sm-6 col-md-2">
                                        <h6 class="text-center small-thin uppercase">Sat</h6>
                                        <div class="text-center">
                                            <canvas id="fog" width="32" height="32"></canvas>
                                            <span>42°C</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </section>
        </section>
        <!--main content end-->
    </section>
    <!--sidebar right start-->
    <aside id="sidebar-right">
        <h4 class="sidebar-title">contact List</h4>
        <div id="contact-list-wrapper">
            <div class="heading">
                <ul>
                    <li class="new-contact"><a href="javascript:void(0)"><i class="fa fa-plus"></i></a>
                    </li>
                    <li>
                        <input type="text" class="search" placeholder="Search">
                        <button type="submit" class="btn btn-sm btn-search"><i class="fa fa-search"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <div id="contact-list">
                <ul>
                    <li>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="avatar">
                        <img src="assets/img/avatar3.png" class="img-circle" alt="">
                          <i class="on animated bounceIn"></i>
                        </span>
                            </div>
                            <div class="col-md-9">
                                <div class="name">Ashley Bell </div>
                                <small class="location text-muted"><i class="icon-pointer"></i> Sarasota, FL</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="avatar">
                        <img src="assets/img/avatar1.png" class="img-circle" alt="">
                          <i class="on animated bounceIn"></i>
                        </span>
                            </div>
                            <div class="col-md-9">
                                <div class="name">Brian Johnson </div>
                                <small class="location text-muted"><i class="icon-pointer"></i> San Francisco, CA</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="avatar">
                        <img src="assets/img/avatar2.png" class="img-circle" alt="">
                          <i class="on animated bounceIn"></i>
                        </span>
                            </div>
                            <div class="col-md-9">
                                <div class="name">Chris Jones </div>
                                <small class="location text-muted"><i class="icon-pointer"></i> Brooklyn, NY</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="avatar">
                        <img src="assets/img/avatar4.jpg" class="img-circle" alt="">
                          <i class="on animated bounceIn"></i>
                        </span>
                            </div>
                            <div class="col-md-9">
                                <div class="name">Erica Hill </div>
                                <small class="location text-muted"><i class="icon-pointer"></i> Palo Alto, Ca</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="avatar">
                        <img src="assets/img/avatar5.png" class="img-circle" alt="">
                          <i class="away animated bounceIn"></i>
                        </span>
                            </div>
                            <div class="col-md-9">
                                <div class="name">Greg Smith </div>
                                <small class="location text-muted"><i class="icon-pointer"></i> London, UK</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="avatar">
                        <img src="assets/img/avatar6.png" class="img-circle" alt="">
                          <i class="on animated bounceIn"></i>
                        </span>
                            </div>
                            <div class="col-md-9">
                                <div class="name">Jason Kendall</div>
                                <small class="location text-muted"><i class="icon-pointer"></i> New York, NY </small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="avatar">
                        <img src="assets/img/avatar7.png" class="img-circle" alt="">
                          <i class="on animated bounceIn"></i>
                        </span>
                            </div>
                            <div class="col-md-9">
                                <div class="name">Kristen Davis </div>
                                <small class="location text-muted"><i class="icon-pointer"></i> Greenville, SC</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="avatar">
                        <img src="assets/img/avatar8.png" class="img-circle off" alt="">
                          <i class="off animated bounceIn"></i>
                        </span>
                            </div>
                            <div class="col-md-9">
                                <div class="name">Michael Shepard </div>
                                <small class="location text-muted"><i class="icon-pointer"></i> Vancouver, BC</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="avatar">
                        <img src="assets/img/avatar9.png" class="img-circle off" alt="">
                          <i class="off animated bounceIn"></i>
                        </span>
                            </div>
                            <div class="col-md-9">
                                <div class="name">Paul Allen</div>
                                <small class="location text-muted"><i class="icon-pointer"></i> Savannah, GA</small>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="contact-user">
                <div class="chat-user active"><span><i class="icon-bubble"></i></span>
                </div>
                <div class="email-user"><span><i class="icon-envelope-open"></i></span>
                </div>
                <div class="call-user"><span><i class="icon-call-out"></i></span>
                </div>
            </div>
        </div>
    </aside>
    <!--/sidebar right end-->
    <!--Config demo-->
    <div id="config" class="config hidden-xs">
        <h4>Settings<a href="javascript:void(0)" class="config-link closed"><i class="icon-settings"></i></a></h4>
        <div class="config-swatch-wrap">
            <div class="row">
                <div class="col-xs-6">
                    <ul class="options">
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-default">
                                <span class="header bg-white"></span>
                                <span class="header bg-white"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-dark">
                                <span class="header bg-dark"></span>
                                <span class="header bg-white"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-blue">
                                <span class="header bg-info"></span>
                                <span class="header bg-white"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-blue-full">
                                <span class="header bg-info"></span>
                                <span class="header bg-info"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-grey">
                                <span class="header bg-grey"></span>
                                <span class="header bg-white"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-grey-full">
                                <span class="header bg-grey"></span>
                                <span class="header bg-grey"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="col-xs-6">
                    <ul class="options">
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-dark-full">
                                <span class="header bg-dark"></span>
                                <span class="header bg-dark"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-green">
                                <span class="header bg-green"></span>
                                <span class="header bg-white"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-green-full">
                                <span class="header bg-green"></span>
                                <span class="header bg-green"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-red">
                                <span class="header bg-red"></span>
                                <span class="header bg-white"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-red-full">
                                <span class="header bg-red"></span>
                                <span class="header bg-red"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                        <li>
                            <div class="theme-style-wrapper" data-theme="theme-dark-blue-full">
                                <span class="header bg-dark-blue"></span>
                                <span class="header bg-dark-blue"></span>
                                <span class="nav bg-dark"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="./assets/plugins/bootstrap/css/bootstrap.min.css"></style>
<style src="./assets/css/simple-line-icons.css"></style>
<style src="./assets/css/animate.css"></style>
<style src="./assets/plugins/daterangepicker/daterangepicker-bs3.css"></style>
<style src="./assets/css/clndr.css"></style>
<style src="./assets/plugins/switchery/switchery.min.css"></style>
<style src="./assets/css/main.css"></style>

<script>
export default {

  // ready () {
  //   var ishome = true
  //   var isrealmonitor
  //   var isdevices
  //   var isremark
  // },
  data: {
    ishome: false,
    isrealmonitor: false,
    isdevices: false,
    isremark: false
  },
  methods: {
    loadpage: function (e) {
      switch (e.currentTarget.id) {
        case 'home':
          console.log('home')
          // ishome = true
          // isrealmonitor = false
          // isdevices = false
          // isremark = false
          break
        case 'realmonitor':
          this.$route.router.go('/fuck')
          console.log('realmonitor')
          // isrealmonitor = true
          // ishome = false
          // isdevices = false
          // isremark = false
          break
        case 'devices':
          console.log('devices')
          // isdevices = true
          // ishome = false
          // isrealmonitor = false
          // isremark = false
          break
        case 'remark':
          console.log('remark')
          // isremark = true
          // ishome = false
          // isrealmonitor = false
          // isdevices = false
          break
      }
    }
  }
}

</script>
<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
