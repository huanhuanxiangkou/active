<template>
  <el-header class="clearfloat">
      <div class="cm_header_top">
        <div class="w1080">
          <el-row>
            <el-col :span="6"><span>南工活动发布 - 拉近距离的牵引力</span></el-col>
              <!-- <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
               </el-dropdown> -->

            <el-col :span="18" class="tr" @command="handleCommand" >
              <span v-if="showUsername">
                <span @click="userDeatil()" class="ms-username">{{showUsername}}</span>
                <button   @click="handleCommand()">退出</button>
              </span>
              <span v-else>
                <router-link to="/login" class="login-ho">你好，请登录</router-link> 
                <router-link to="/register" class="login-ho reg-free">免费注册</router-link>
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
          <el-row class="w1080 pd_15_0">
            <el-col :span="8"><div class="logo_school"></div></el-col>
            <el-col :span="12">
              <el-input placeholder="请输入关键字" class="input-with-select pd_10_0" style="width:502px;" v-model="keyWords">
                <el-button slot="append" icon="el-icon-search" @click="serarchByKey()"></el-button>
              </el-input>
            </el-col>
             <el-col :span="4" class="pd_10_0" style="text-align:center">
               <el-button type="primary" round @click="publishActive()">+发布活动</el-button>
             </el-col>
          </el-row>
          <div class="cm_header_bottom">
            <el-row class="w1080">
            <el-menu   mode="horizontal" router>
              <el-menu-item index disabled class="header_wec">欢迎来到活动网</el-menu-item>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="school" :route="{path:'/allActive',query:{type:'school'}}">校办</el-menu-item>
              <el-menu-item index="department" :route="{path:'/allActive',query:{type:'department'}}">系办</el-menu-item>
              <el-menu-item index="group" :route="{path:'/allActive',query:{type:'group'}}">团体</el-menu-item>
              <el-menu-item index="personal" :route="{path:'/allActive',query:{type:'personal'}}">个人</el-menu-item>
            </el-menu>
            </el-row>
          </div>
  </el-header>
</template>

<script>
import { Bus } from "@/VueInstance/vueIns";
import { userRegister } from "@/api/getInfo";
export default {
  data() {
    return {
      username: "",
      keyWords: ""
    };
  },
  mounted() {
    Bus.$on("setCurrUsername", msg => {
      this.username = msg;
    });
  },
  computed: {
    showUsername: {
      set: function(newValue) {
        this.username = newValue;
      },
      get: function() {
        this.username = localStorage.getItem("ms_username");
        return this.username;
      }
    }
  },
  methods: {
    publishActive() {
      let userrole = parseInt(localStorage.getItem("ms_userrole"));
      let userId = parseInt(localStorage.getItem("ms_userid"));
      let userName = localStorage.getItem("ms_username");
      if (userrole == 2) {
        this.$confirm("您还没有发布活动的权限? 请点击申请升级权限！", "提示", {
          confirmButtonText: "申请升级权限",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
          callback: action => {
            if (action == "confirm") {
              userRegister({
                name: userName,
                isapply: 1,
                id: userId
              })
                .then(result => {
                  if (result.data.code == 200) {
                    this.$message({
                      showClose: true,
                      message: "正在申请中..",
                      type: "success"
                    });
                  }
                })
                .catch(err => {});
            } else {
            }
          }
        });
      } else {
        this.$router.push({ path: "/publish" });
      }
    },
    handleCommand(command) {
      var that = this.computed;
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
        callback: action => {
          if (action == "confirm") {
            localStorage.clear();
            Bus.$emit("setCurrUsername", null);
            this.$router.push("/login");
          } else {
          }
        }
      });
    },
    userDeatil() {
      let userId = parseInt(localStorage.getItem("ms_userid"));
      this.$router.push({
        path: "/myview",
        query: {
          userId: userId
        }
      });
    },
    serarchByKey() {
      sessionStorage.setItem("ms_keywords", this.keyWords);
      Bus.$emit("setKeywords", this.keyWords);
      this.$router.push({
        path: "/allActive",
        query: { type: "keywords" }
      });
    }
  }
};
</script>

<style>
@import "../../style/base/base_xss.css";

.reg-free {
  color: #d02d48;
}
.login-ho {
  margin-right: 20px;
}
.login-ho:hover {
  color: #d48787;
}

.el-header {
  padding: 0;
  height: auto !important;
}
.cm_header_top {
  padding: 3px 0;
  border-bottom: 1px solid #eee;
  background: #fafafa;
  line-height: 30px;
  font-size: 14px;
}
.logo_school {
  float: left;
  display: block;
  width: 210px;
  height: 60px;
  background: url(../../assets/nylg.png) no-repeat;
  background-size: contain;
}
.cm_header_bottom {
  background-color: #d02d48;
}
.cm_header_bottom .el-menu--horizontal {
  border-bottom: none;
  background-color: #d02d48;
  color: #fff;
}
.cm_header_bottom .el-menu--horizontal > .el-menu-item {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
}
.cm_header_bottom .el-menu--horizontal > .el-menu-item:hover,
.cm_header_bottom .el-menu--horizontal > .el-menu-item:focus {
  background-color: #d48787;
  color: #fff;
}
.header_wec {
  width: 180px;
  text-align: center;
  color: #cae8ca !important;
  cursor: default !important;
  opacity: 1 !important;
}
.ms-username {
  cursor: pointer;
}
</style>
