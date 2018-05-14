<template>
<div class="ghh_detail">
<div id="wp" class="wp mm cm-page">
    <div class="act-recent act-article cl clearfloat">
      <div class="act-content-header cl clearfloat">
        <div class="thumbnail">
            <img :src="activity.activity.photoUrl" :alt="activity.activity.name">
        </div>
        <div class="y">
              <h1>{{activity.activity.name}}</h1>
              <p class="hd-time">
                    <i class="el-icon-view"></i>
                     {{activity.activity.dateStart}} ～ {{activity.activity.dateEnd}}
              </p>
              <p class="hd-didian">
                  <i class="el-icon-location-outline iconfont"></i> 
                  南阳理工学院：{{activity.activity.address}}
              </p>
              <p class="hd-renshu">
                   <i class="el-icon-edit-outline"></i> 
                   {{activity.activity.count}}人
              </p>
              <p class="hd-touxiang">
                   <i class="el-icon-service"></i>
                    <a href="javascript:void(0);">
                         <img :src="activity.activity.photoUrl"> {{activity.user.name}}
                    </a>
             </p>
             <div class="func  clearfloat">
                <button id="btn_register_main" class="btn btn-sign-up1" @click="signUp()" :disabled="isSignupB" >{{isSignUp}}</button>
                <button class="btn btn-like" name="eventFollowBtn" @click="collection()" :disabled="isCollectionB" >{{isCollection}} <span class="num"><em id="shoucangnums"></em></span></button>
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
                              <li class="pzo cur" title="免费票 - 报名期：活动开始前 " data-value="f-0">
                                  <div id="f-24734" class="thumbnail_cn et_selected">
                                   <div><i class=" el-icon-question"></i> 免费</div>
                                   <div class="caption">免费票[剩:{{activity.activity.count}}]</div>
                                  </div>
                             </li>               
                      </ul>
                      <div id="event_ticket_select_details " style="display: block;">免费票 - 报名期：活动开始前 </div>
                       <div id="event_ticket_order_number" class="mgt_10 mgb_10" style="display:none">订购数量：
                              <select id="event_ticket_order_number_sel" class="input form-control"><option value="1">1 张</option></select>
                          </div>
                          <button id="reg_event_btn_enabled" href="javascript:;" class="btn btn-primary"  style="display:none">我要参加</button>
                          <div v-html="activity.activity.detail">
                            <!-- {{activity.activity.detail}} -->
                          </div>
                    </div>
                </div>
             </div>                
          </div>
      </div>
    </div>

    <el-dialog title="用户信息" :visible.sync="userDialog">
        <el-form :model="user">
            <el-form-item label="真实姓名：" label-width="120px">
            <el-input v-model="user.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号：" label-width="120px">
            <el-input v-model="user.phone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="QQ或微信号：" label-width="120px">
            <el-input v-model="user.line" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel()">取 消</el-button>
            <el-button type="primary" @click="confirmSign()">确 定</el-button>
        </div>
    </el-dialog>
</div>
</div>
</template>
<script>
import {
  findOne,
  activitySignup,
  collectionActivity,
  getCollectionActivitys,
  getSignupActivitys
} from "@/api/getInfo";
export default {
  data() {
    return {
      isSignUp: "我要报名",
      isSignupB:false,
      isCollection: "收藏",
      isCollectionB:false,
      activity: {
        activity: {},
        user: {},
        list: []
      },
      userId:"",
      user: {
        name: "",
        phone: "",
        line: ""
      },
      userDialog: false
    };
  },
  mounted() {
    this.userId= parseInt(localStorage.getItem("ms_userid"));
    findOne(this.$route.query.activityId)
      .then(result => {
        if (result.data.code === 200) {
          this.activity = result.data.data;
          getSignupActivitys(this.userId)
            .then(res => {
              if (res.data.code == 200) {
                let isSignupT = res.data.data.some(active => {
                  return active.activity.id == this.activity.activity.id;
                });
                if (isSignupT) {
                  this.isSignupB =true;
                  this.isSignUp = "已报名";
                }
              }
            })
            .catch();
          getCollectionActivitys(this.userId)
            .then(res => {
              if (res.data.code == 200) {
                let isCollectionT = res.data.data.some(active => {
                  return active.activity.id == this.activity.activity.id;
                });
                if (isCollectionT) {
                  this.isCollectionB = true;
                  this.isCollection = "已收藏";
                }
              }
            })
            .catch();
        }
      })
      .catch(err => {});
  },
  methods: {
    signUp() {
      this.userDialog = true;
    },
    collection() {
      collectionActivity({
        user_id: this.userId,
        activity_id: this.activity.activity.id
      })
        .then(res => {
          if (res.data.code == 200) {
            this.isCollectionB = true;
            this.isCollection = "已收藏";
            this.$message({
              type: "success",
              message: "收藏成功!"
            });
          }
        })
        .catch();
    },
    cancel() {
      this.userDialog = false;
    },
    confirmSign() {
      this.$confirm("是否确定报名此活动？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(action => {
          if (action == "confirm") {
            activitySignup({
              user_id: this.userId,
              activity_id: this.activity.activity.id,
              phone_number: this.user.phone,
              wechat: this.user.line,
              name: this.user.name
            })
              .then(result => {
                if (result.data.code === 200) {
                  this.userDialog = false;
                  this.isSignupB =true;
                  this.isSignUp = "已报名";
                  this.$message({
                    type: "success",
                    message: "报名成功!"
                  });
                }
              })
              .catch(err => {});
          }
        })
        .catch(() => {});
    }
  }
};
</script>
<style>
.ghh_detail .act-recent {
  padding-top: 30px;
  padding-bottom: 30px;
}
.cl {
  zoom: 1;
}
.ghh_detail .act-article .act-content-header {
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}
.ghh_detail .act-article .thumbnail {
  float: left;
  margin-right: 20px;
  width: 420px;
  height: 269px;
  overflow: hidden;
}
.ghh_detail .act-article .thumbnail img {
  width: 100%;
  min-height: 100%;
}
.ghh_detail img {
  border: none;
  max-width: 100%;
  height: auto;
}
.ghh_detail .act-content-header .y {
  width: 640px;
  position: relative;
  margin-bottom: 60px;
}
/* .y {
    float: right;
} */
.ghh_detail .act-article .act-content-header p {
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
.ghh_detail .act-article .jiathis_style_32x32 {
  text-align: center;
}
.ghh_detail .act-content-header .jiathis_style_32x32 {
  position: absolute;
  top: 220px;
  right: 0;
}
.ghh_detail .iconfont {
  font-family: "iconfont";
  font-size: 20px;
  font-style: normal;
  margin-right: 5px;
}
.ghh_detail .iconfont {
  display: inline-block;
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.ghh_detail h1 {
  display: block;
  font-size: 2em;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}
.ghh_detail .act-article h1 {
  margin: 0 0 10px 0;
  font-size: 20px;
  color: #000;
  font-weight: normal;
}
.ghh_detail .hd-touxiang img {
  width: 20px;
  height: 20px;
}
.ghh_detail .content-wrap {
  width: 100%;
  float: left;
}
.ghh_detail .act-content {
  position: relative;
  margin-right: 320px;
  margin-bottom: 15px;
}
.ghh_detail #btn_register_main {
  /* text-indent: -200px; */
  overflow: hidden;
}
.ghh_detail .btn-sign-up1 {
  /* background-position: -181px -131px; */
}
.ghh_detail .btn-sign-up1,
.ghh_detail .charge,
.ghh_detail .btn-sign-up4,
.ghh_detail .btn-sign-up1.disabled {
  /* background-image: url(../images/details_bg.png); */
  width: 116px;
  height: 40px;
}
.ghh_detail .btn {
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
.ghh_detail .baoming {
  position: relative;
}
.ghh_detail .hd-cost {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #ccc;
}
.ghh_detail .home_register_title_tickets {
  font-weight: 400;
  font-size: 18px;
  margin-top: 15px;
}
.ghh_detail .mgb_15 {
  margin-bottom: 15px;
}
.ghh_detail .piao-list li {
  margin-right: 1%;
  margin-bottom: 10px;
  cursor: pointer;
  width: 49%;
  float: left;
}
.ghh_detail .piao-list .thumbnail_cn:hover,
.ghh_detail .piao-list .cur .et_selected {
  border-color: #5eb95e;
}
.ghh_detail .piao-list .thumbnail_cn {
  padding: 6px;
  border: 2px solid #ccc;
  border-radius: 3px;
}
.ghh_detail .piao-list .thumbnail_cn {
  padding: 6px;
  border: 2px solid #ccc;
  border-radius: 3px;
}
.ghh_detail #event_ticket_select_details {
  color: red;
  font-size: 14px;
}
.ghh_detail #event_ticket_select_details {
  color: #ff664f;
  font-size: 12px;
  display: none;
}
.ghh_detail .hd-cost ul,
.ghh_detail .act-article .lists ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

