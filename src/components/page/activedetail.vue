<template>
<div id="wp" class="wp mm cm-page">
    <div class="act-recent act-article cl clearfloat">
      <div class="act-content-header cl clearfloat">
        <div class="thumbnail">
            <img src="@/assets/lunbotu0.jpg" alt="【小马户外·4月21-22日】国色天香洛阳牡丹·千年古刹河南少林·周末火车赏花行">
        </div>
        <div class="y">
              <h1>【南工活动·4月21-22日】南工梦溪湖·梦里尤溪尤有湖·浅行湖边踏歌声</h1>
              <p class="hd-time">
                    <i class="el-icon-view"></i>
                     2018-04-21 07:00 ～ 2018-04-22 18:00
              </p>
              <p class="hd-didian">
                  <i class="el-icon-location-outline iconfont"></i> 
                  南阳理工学院：新图书馆
              </p>
              <p class="hd-renshu">
                   <i class="el-icon-edit-outline"></i> 
                   50人
              </p>
              <p class="hd-touxiang">
                   <i class="el-icon-service"></i>
                    <a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=8543&amp;do=profile&amp;op=huodong&amp;type=post">
                         <img src="@/assets/logomain.png"> 南工游园
                    </a>
             </p>
             <div class="func  clearfloat">
                <button id="btn_register_main" class="btn btn-sign-up1" onclick="">我要报名</button>
                <button class="btn btn-like" name="eventFollowBtn" onclick="">收藏 <span class="num"><em id="shoucangnums">0</em></span></button>
            </div>
        </div>
      </div>   
      <div class="content-wrap">
          <div class="act-content">
            <div id="cnyinglan_baoming" class="baoming hd-cost clearfloat">
                <h2 id="home_register_title_tickets" class="home_register_title_tickets mgb_15">活动票种</h2>
                <div id="cnyinglan_bmis clearfloat">
                      <input id="piaotype" type="hidden" value="free">
                      <input name="piaozhong_type" id="piaozhong_type" type="hidden" value="f-24734">
                      <input id="piaozhong_nums" type="hidden" value="1">
                      <input id="piaozhong_price" type="hidden" value="0">
                      <div id="home_register_group_base">
                      <ul name="event_tickets_thumbs" class=" clearfloat cl piao-list">
                              <li class="pzo cur" title="免费票 - 报名期：活动开始前 " data-value="f-0" onclick="selectEventTicket('91281',this,'f-24734','free');">
                                  <div id="f-24734" class="thumbnail_cn et_selected">
                                   <div><i class=" el-icon-question"></i> 免费</div>
                                   <div class="caption">免费票[剩:50]</div>
                                  </div>
                             </li>               
                      </ul>
                      <div id="event_ticket_select_details " style="display: block;">免费票 - 报名期：活动开始前 </div>
                       <div id="event_ticket_order_number" class="mgt_10 mgb_10" style="display:none">订购数量：
                              <select id="event_ticket_order_number_sel" onchange="event_ticket_order_number()" class="input form-control"><option value="1">1 张</option></select>
                          </div>
                          <button id="reg_event_btn_enabled" href="javascript:;" class="btn btn-primary" onclick="startRegisterEvent();" style="display:none">我要参加</button>
                    </div>
                </div>
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
.act-recent {
    padding-top: 30px;
    padding-bottom: 30px;
}
.cl {
    zoom: 1;
}
.act-article .act-content-header {
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
}
.act-article .thumbnail {
    float: left;
    margin-right: 20px;
    width: 420px;
    height: 269px;
    overflow: hidden;
}
.act-article .thumbnail img {
    width: 100%;
    min-height: 100%;
}
img {
    border: none;
    max-width: 100%;
    height: auto;
}
.act-content-header .y {
    width: 640px;
    position: relative;
    margin-bottom: 60px;
}
/* .y {
    float: right;
} */
.act-article .act-content-header p {
    color: #444;
    margin-bottom: 10px;
}
/* .iconfont {
    display: inline-block;
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
} */
.act-article .jiathis_style_32x32 {
    text-align: center;
}
.act-content-header .jiathis_style_32x32 {
    position: absolute;
    top: 220px;
    right: 0;
}
.iconfont {
    font-family: "iconfont";
    font-size: 20px;
    font-style: normal;
    margin-right: 5px;
}
.iconfont {
    display: inline-block;
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}
.act-article h1 {
    margin: 0 0 10px 0;
    font-size: 20px;
    color: #000;
    font-weight: normal;
}
.hd-touxiang img{
  width: 20px;
  height: 20px;
} 
.content-wrap {
    width: 100%;
    float: left;
}
.act-content {
    position: relative;
    margin-right: 320px;
    margin-bottom: 15px;
}
#btn_register_main {
    /* text-indent: -200px; */
    overflow: hidden;
}
.btn-sign-up1 {
    /* background-position: -181px -131px; */
}
.btn-sign-up1, .charge, .btn-sign-up4, .btn-sign-up1.disabled {
    /* background-image: url(../images/details_bg.png); */
    width: 116px;
    height: 40px;
}
.btn {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
    -moz-user-select: none;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    border: 0;
    border-radius: 3px;
}
.baoming {
    position: relative;
}
.hd-cost {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px dashed #ccc;
}
.home_register_title_tickets {
    font-weight: 400;
    font-size: 18px;
    margin-top: 15px;
}
.mgb_15 {
    margin-bottom: 15px;
}
.piao-list li {
    margin-right: 1%;
    margin-bottom: 10px;
    cursor: pointer;
    width: 49%;
    float: left;
}
.piao-list .thumbnail_cn:hover, .piao-list .cur .et_selected {
    border-color: #5eb95e;
}
.piao-list .thumbnail_cn {
    padding: 6px;
    border: 2px solid #ccc;
    border-radius: 3px;
}
.piao-list .thumbnail_cn {
    padding: 6px;
    border: 2px solid #ccc;
    border-radius: 3px;
}
#event_ticket_select_details {
    color: red;
    font-size: 14px;
}
#event_ticket_select_details {
    color: #ff664f;
    font-size: 12px;
    display: none;
}
.hd-cost ul, .act-article .lists ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

</style>

