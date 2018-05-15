<template>
<div>
  <div class="myhome-article cl" v-for="(activity,index) in activitys" :key="index">
          <a href="#" class="img"><img :src="activity.activity.photoUrl"></a>
          <div class="info">
              <h2><a href="javascript:void(0);" target="_blank" @click="activeDetail(activity)">{{activity.activity.name}}</a></h2>
              <p>发布者：<a href="javascript:void(0);">{{activity.user.name}}</a>
              <span class="state" v-if="activity.activity.status==0">状态：未审核</span>
              <span class="state" v-else>状态：{{status}}</span>
              </p>
              <p>活动时间：{{activity.activity.dateStart}}-{{activity.activity.dateEnd}}</p>
              <p v-if="isCollection"><a href="javascript:void(0);" class="btn btn-danger" @click="delCollection(activity,index)">删除收藏</a></p>
        </div>
  </div>
</div>
</template>
<script>
import {
  getUserById,
  getCollectionActivitys,
  getSignupActivitys,
  cancelCollection,
  getAllActivitys
} from "@/api/getInfo";
export default {
  data() {
    return {
      user: {},
      activitys: [],
      type: this.$route.query.acType,
      status: "",
      isCollection: false
    };
  },
  mounted() {
    this.switchType();
  },
  watch: {
    $route: function() {
      this.switchType();
    }
  },
  methods: {
    activeDetail(active) {
      this.$router.push({
        name: "detail",
        query: {
          activityId: active.activity.id
        }
      });
    },
    delCollection(active, index) {
      cancelCollection(active.id)
        .then(res => {
          if (res.data.code == 200) {
            this.activitys.splice(index, 1);
            // console.log(this.activitys);
          }
        })
        .catch();
    },
    switchType() {
      this.activitys = [];
      this.isCollection = false;
      let userId = parseInt(localStorage.getItem("ms_userid"));
      switch (this.$route.query.acType) {
        case "sign":
          getSignupActivitys(userId)
            .then(res => {
              if (res.data.code == 200) {
                this.activitys = res.data.data;
                this.status = "已报名";
              }
            })
            .catch();
          break;
        case "publish":
          getAllActivitys()
            .then(res => {
              if (res.data.code == 200) {
                this.activitys = res.data.data.filter(item => {
                  return (
                    item.user.id == parseInt(localStorage.getItem("ms_userid"))
                  );
                });
                this.status = "已审核";
              }
            })
            .catch();
          break;
        case "collection":
          getCollectionActivitys(userId)
            .then(res => {
              if (res.data.code == 200) {
                this.activitys = res.data.data;
                this.status = "已收藏";
                this.isCollection = true;
              }
            })
            .catch();
          break;
        case "tobeaudited":
          break;

        default:
          break;
      }
    }
  }
};
</script>
