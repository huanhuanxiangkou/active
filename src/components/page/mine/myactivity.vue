<template>
<div>
  <div class="myhome-article cl" v-for="(activity,index) in activitys" :key="index">
          <a href="#" class="img"><img :src="activity.activity.photoUrl"></a>
          <div class="info">
              <h2><a href="javascript:void(0);" target="_blank" @click="activeDetail(activity)">{{activity.activity.name}}</a></h2>
              <p>发布者：<a href="javascript:void(0);">{{activity.user.name}}</a><span class="state">状态：已收藏</span></p>
              <p>活动时间：{{activity.activity.dateStart}}-{{activity.activity.dateEnd}}</p>
              <p><a href="javascript:void(0);" class="btn btn-danger" @click="delCollection(activity,index)">删除收藏</a></p>
        </div>
  </div>
</div>
</template>
<script>
import {
  getUserById,
  getCollectionActivitys,
  getSignupActivitys,
  cancelCollection
} from "@/api/getInfo";
export default {
  data() {
    return {
      user: {},
      activitys: [],
      type: this.$route.query.acType
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
            console.log(this.activitys);
          }
        })
        .catch();
    },
    switchType() {
      this.activitys=[];
      switch (this.$route.query.acType) {
        case "sign":
          getSignupActivitys(this.$route.query.userId)
            .then(res => {
              if (res.data.code == 200) {
                this.activitys = res.data.data;
              }
            })
            .catch();
          break;
        case "publish":
          break;
        case "collection":
          getCollectionActivitys(this.$route.query.userId)
            .then(res => {
              if (res.data.code == 200) {
                this.activitys = res.data.data;
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
