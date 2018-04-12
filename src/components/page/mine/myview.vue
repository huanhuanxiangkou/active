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
                      <li><a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=17775&amp;do=profile&amp;op=huodong&amp;type=post">待审核的活动</a></li>
                      <li><a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=17775&amp;do=profile&amp;op=huodong&amp;type=post">已审核的活动</a></li>
                      <li><a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=17775&amp;do=profile">个人资料</a></li>
                  </ul>
                </div>
              </div>
              <div class="myhome-content">
              <!-- <div class="myhome-content-content" style="margin-right:0"> 
                    <div class="noContent">还没有参加过活动- -|||</div>      
                    <div style="margin:15px 0" class="cl"></div>
              </div> -->
              <div class="myhome-article cl">
                <a href="http://bj.huodongwang.com/article-91114-1.html" class="img" style="background-image:url(data/attachment/data/attachment/cnyinglan_huodongs/2018/043/104531vwsmmokwonwm6siz.jpg_252_189_2_0.jpg)"></a>
                <div class="info">
                    <h2><a href="http://bj.huodongwang.com/article-91114-1.html" target="_blank">[4.7周六]欢 乐 狼 人 杀—蒙面涛涛复活指刀|友行友派</a></h2>
                    <p>发布者：<a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=17320&amp;do=profile&amp;op=huodong">友行友派</a><span class="state">状态：已收藏</span></p>
                    <p>活动时间：2018-04-07 13:00-2018-04-07 19:00</p>
                    <p><a href="javascript:;" class="btn btn-danger" onclick="deleshoucang('1067')">删除收藏</a></p>
                </div>
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

.myhome-article {
    padding: 15px;
    background-color: #fff;
    border-radius: 3px;
    margin-bottom: 15px;
    position: relative;
}

.myhome-article .img {
    float: left;
    background: no-repeat center center / cover;
    width: 150px;
    height: 110px;
    margin-right: 15px;
}

.myhome-article .info {
    overflow: hidden;
    min-height: 110px;
}

.myhome-article .info h2 {
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 10px;
}

.myhome-article .info p {
    margin-top: 10px;
}

.myhome-article .info .state {
    padding-left: 15px;
}

.myhome-article .info p {
    margin-top: 10px;
}

.myhome-article .info p {
    margin-top: 10px;
}

.myhome .btn-danger {
    background-color: #dd514c;
    border-color: #dd514c;
}

.myhome .btn {
    display: inline-block;
    color: #fff;
    padding: 5px 10px;
    border-radius: 3px;
}
</style>


