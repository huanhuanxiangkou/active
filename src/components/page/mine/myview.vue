<template>
  <div id="wp" class="wp mm cm-page">
     <div class="w1080 myhome cl clearfloat" style="position: relative;">
          <div class="myhome-sidebar" style="">
              <div class="myhome-avatar">
                  <div class="heading" style="background-image:url(template/hd3/img/profile_bg.jpg)">
                      <a href="http://www.huodongwang.com/home.php?mod=space&amp;do=profile&amp;op=huodong" class="avatar">
                          <img src="uc/avatar.php?uid=17775&amp;size=middle">
                      </a>
                  </div>
                  <div class="bodying">
                      <a href="http://www.huodongwang.com/home.php?mod=space&amp;do=profile&amp;op=huodong" class="name">环环</a>
                                                      
                      <div class="follow">
                          <a href="http://www.huodongwang.com/home.php?mod=spacecp&amp;ac=follow&amp;op=add&amp;hash=7a04e5b6&amp;fuid=17775" id="followmod" onclick="showWindow(this.id,this.href, 'get',0);" class="btn">关注TA</a>
                          <a href="http://www.huodongwang.com/home.php?mod=spacecp&amp;ac=pm&amp;op=showmsg&amp;handlekey=showmsg_17775&amp;touid=17775&amp;pmid=0&amp;daterange=17775" id="a_sendpm_17775" onclick="showWindow('showMsgBox', this.href, 'get', 0)" title="私信TA" class="btn btn-2">私信</a>
                      </div>
                  </div>
              </div>
               <div class="myhome-sidebar-nav">
                  <ul>
                    <li><a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=17775&amp;do=profile&amp;op=huodong" class="on">参加的活动</a></li>
                      <li><a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=17775&amp;do=profile&amp;op=huodong&amp;type=post">发布的活动</a></li>
                      <li><a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=17775&amp;do=profile&amp;op=huodong&amp;type=shoucang">收藏的活动</a></li>
                      <li><a href="http://www.huodongwang.com/home.php?mod=spacecp&amp;ac=profile">账户设置</a></li>
                      <li><a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=17775&amp;do=profile">个人资料</a></li>
                  </ul>
                </div>
              </div>
              <div class="myhome-content">
              <div class="myhome-content-content" style="margin-right:0"> 
                    <div class="noContent">还没有参加过活动- -|||</div>      
                    <div style="margin:15px 0" class="cl"></div>
              </div>
           </div>
          </div>
          
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style>
@import "../../../style/base/base_xss.css";  
.w1080, .wp {
    margin: 0 auto;
    width: 1080px;
}
.w1080 *, .w1080 *:before, .w1080 *:after, .box-sizing *, .box-sizing *:before, .box-sizing *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.cm-page {
    width: auto;
    background: #5e7aa1 url(http://dl.bizhi.sogou.com/images/2012/03/01/118481.jpg) no-repeat center -110px;
    padding-top: 100px;
}


.myhome {
    background-color: rgba(0,0,0,0.2);
    padding: 10px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.myhome-sidebar {
    float: left;
    width: 220px;
    z-index: 3;
}
.cl {
    zoom: 1;
}
.myhome-avatar {
    margin-bottom: 15px;
}
.myhome-avatar .heading {
    background: #5e7aa1 url(http://dl.bizhi.sogou.com/images/2012/03/01/118481.jpg) no-repeat center ;
    /* background: url(http://dl.bizhi.sogou.com/images/2012/03/01/118481.jpg) no-repeat center center / cover; */
    position: relative;
    height: 75px;
}
.myhome-avatar .avatar {
    position: absolute;
    bottom: -25px;
    left: 50%;
    margin-left: -30px;
}
.myhome-avatar .avatar img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.myhome img {
    max-width: 100%;
}
.myhome-avatar .bodying {
    background-color: #fff;
    padding: 25px 20px 20px 20px;
    text-align: center;
    border-radius: 0 0 3px 3px;
}
.myhome-avatar .bodying .name {
    font-size: 16px;
}
.myhome-avatar .bodying .follow {
    margin-top: 15px;
}
.myhome .btn {
    display: inline-block;
    background-color: #5eb95e;
    border: 1px solid #5eb95e;
    color: #fff;
    padding: 5px 10px;
    border-radius: 3px;
}
.myhome .btn-2 {
    color: #5eb95e;
    background-color: #fff;
}
.myhome-sidebar-nav {
    width: 220px;
}
.myhome-sidebar-nav li {
    line-height: 40px;
    text-align: center;
}
.myhome-sidebar-nav li a.on, .myhome-sidebar-nav li a:hover {
    background-color: rgba(0,0,0,0.2);
}
.myhome-sidebar-nav li a {
    padding: 0 15px;
    display: block;
    color: #fff;
}
.myhome-content, .myhome-content-content {
    overflow: hidden;
}
.myhome-content {
    padding-left: 15px;
}
.noContent {
    padding: 50px 15px;
    text-align: center;
    background-color: #fff;
}
</style>


