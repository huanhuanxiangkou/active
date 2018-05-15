<template>
<div class="ghh_view">
  <div id="wp" class="wp mm cm-page">
     <div class="w1080 myhome cl clearfloat" style="position: relative;">
          <div class="myhome-sidebar" style="">
              <div class="myhome-avatar">
                  <div class="heading" style="background-image:url(template/hd3/img/profile_bg.jpg)">
                      <a href="javascript:void(0)" class="avatar">
                          <img src="../../../assets/tx.jpeg">
                      </a>
                  </div>
                  <div class="bodying">
                      <a href="javascript:void(0)"  class="name">{{user.name}}</a>
                                                      
                      <div class="follow">

                      </div>
                  </div>
              </div>
               <div class="myhome-sidebar-nav">
                  <ul>
                      <li><a href="javascript:void(0)" class="on"><router-link :to="{path:'/myactivity',query:{acType:'sign'}}">参加的活动</router-link></a></li>
                      <li><a href="javascript:void(0)"><router-link :to="{path:'/myactivity',query:{acType:'publish'}}">发布的活动</router-link></a></li>
                      <li><a href="javascript:void(0)"><router-link  :to="{path:'/myactivity',query:{acType:'collection'}}">收藏的活动</router-link></a></li>
                      <!-- <li><a href="javascript:void(0)"><router-link :to="{path:'/myactivity',query:{userId:$route.query.userId,acType:'tobeaudited'}}">待审核的活动</router-link></a></li>
                      <li><a href="javascript:void(0)"><router-link  :to="{path:'/myactivity',query:{userId:$route.query.userId,acType:'audited'}}">已审核的活动</router-link></a></li> -->
                      <li><a href="javascript:void(0)"><router-link  to="/person">个人资料</router-link></a></li>
                      <li><a href="javascript:void(0)"><router-link  to="/change">修改密码</router-link></a></li>
                  </ul>
                </div>
              </div>
              <div class="myhome-content">
              <!-- <div class="myhome-content-content" style="margin-right:0"> 
                    <div class="noContent">还没有参加过活动- -|||</div>      
                    <div style="margin:15px 0" class="cl"></div>
              </div> -->
              <router-view></router-view>
              
           </div>
          </div>
  </div>
  </div>
</template>
<script>
import { getUserById } from "@/api/getInfo";
export default {
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    let userId = parseInt(localStorage.getItem("ms_userid"));
    getUserById(userId)
      .then(res => {
        if (res.data.code == 200) {
          this.user = res.data.data;
        }
      })
      .catch();
  }
};
</script>
<style>
@import "../../../style/base/base_xss.css";

.ghh_view .cm-page {
  width: auto;
  background: #5e7aa1
    url(
      http: 4226632896&os=1067603837,1676129945&simid=0,
      0&pn=13&rn=1&di=53720198420&ln=1994&fr=&fmq=1526179216168_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,
      0&istype=2&ist=&jit=&bdtype=13&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21bb051f819861829ad39a040ed2e738bd4e628.jpg&rpstart=0&rpnum=0&adpicid=0
    )
    no-repeat center -110px;
  padding-top: 100px;
}
.ghh_view .myhome {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.ghh_view .myhome-sidebar {
  float: left;
  width: 220px;
  z-index: 3;
}
.cl {
  zoom: 1;
}
.ghh_view .myhome-avatar {
  margin-bottom: 15px;
}
.ghh_view .myhome-avatar .heading {
  background: #5e7aa1
    url(
      http: 4226632896&os=1067603837,
      1676129945&simid=0,
      0&pn=13&rn=1&di=53720198420&ln=1994&fr=&fmq=1526179216168_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,
      0&istype=2&ist=&jit=&bdtype=13&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21bb051f819861829ad39a040ed2e738bd4e628.jpg&rpstart=0&rpnum=0&adpicid=0
    )
    no-repeat center;
  /* background: url(http://dl.bizhi.sogou.com/images/2012/03/01/118481.jpg) no-repeat center center / cover; */
  position: relative;
  height: 75px;
}
.ghh_view .myhome-avatar .avatar {
  position: absolute;
  bottom: -25px;
  left: 50%;
  margin-left: -30px;
}
.ghh_view .myhome-avatar .avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.ghh_view .myhome img {
  max-width: 100%;
}
.ghh_view .myhome-avatar .bodying {
  background-color: #fff;
  padding: 25px 20px 20px 20px;
  text-align: center;
  border-radius: 0 0 3px 3px;
}
.ghh_view .myhome-avatar .bodying .name {
  font-size: 16px;
}
.ghh_view .myhome-avatar .bodying .follow {
  margin-top: 15px;
}
.ghh_view .myhome .btn {
  display: inline-block;
  background-color: #5eb95e;
  border: 1px solid #5eb95e;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
}
.ghh_view .myhome .btn-2 {
  color: #5eb95e;
  background-color: #fff;
}
.ghh_view .myhome-sidebar-nav {
  width: 220px;
}
.ghh_view .myhome-sidebar-nav li {
  line-height: 40px;
  text-align: center;
}
.ghh_view .myhome-sidebar-nav li a.on,
.ghh_view .myhome-sidebar-nav li a:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.ghh_view .myhome-sidebar-nav li a {
  padding: 0 15px;
  display: block;
  color: #fff;
}
.ghh_view .myhome-content,
.ghh_view .myhome-content-content {
  overflow: hidden;
}
.ghh_view .myhome-content {
  padding-left: 15px;
}
.ghh_view .noContent {
  padding: 50px 15px;
  text-align: center;
  background-color: #fff;
}
.ghh_view .myhome-article {
  padding: 15px;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 15px;
  position: relative;
}
.ghh_view .myhome-article .img {
  float: left;
  background: no-repeat center center / cover;
  width: 150px;
  height: 110px;
  margin-right: 15px;
}
.ghh_view .myhome-article .info {
  overflow: hidden;
  min-height: 110px;
}
.ghh_view .myhome-article .info h2 {
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 10px;
}
.ghh_view .myhome-article .info p {
  margin-top: 10px;
}
.ghh_view .myhome-article .info .state {
  padding-left: 15px;
}
.ghh_view .myhome-article .info p {
  margin-top: 10px;
}
.ghh_view .myhome-article .info p {
  margin-top: 10px;
}
.ghh_view .myhome .btn-danger {
  background-color: #dd514c;
  border-color: #dd514c;
}
.ghh_view .myhome .btn {
  display: inline-block;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>


