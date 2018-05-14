<template>
<div class="special-list">
    <div class="banner"><img :src="imgSrc"></div>
    <div class="w960">
        <h3 class="block-title">{{title}}</h3>
        <div class="item-box-3 clearfloat">
            <div class="item" v-for="(activity,index) in activitys" :key="index">
                <a href="javascript:void(0);" class="item-con" target="_blank" @click="activeDetail(activity)">
                    <div class="img">
                        <img :src="activity.activity.photoUrl">
                    </div>
                    <div class="info">
                        <h2>{{activity.activity.name}}</h2>
                        <p>时间：{{activity.activity.dateStart}} ～ {{activity.activity.dateEnd}}</p>
                        <p>地点：{{activity.activity.address}}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { getAllActivitys, findActivityByKey } from "@/api/getInfo";
export default {
  data() {
    return {
      title: "",
      imgSrc: "",
      activitys: []
    };
  },
  mounted() {
    this.switchType();
  },
  methods: {
    getSortActivitys(type) {
      getAllActivitys()
        .then(result => {
          if (result.data.code == 200) {
            this.activitys = result.data.data.filter(item => {
              return item.list.some(item2 => {
                return item2.name == type;
              });
            });
          }
        })
        .catch(err => {});
    },
    switchType() {
        this.activitys=[];
      switch (this.$route.query.specialType) {
        case "campus":
          this.title = "校办活动";
          this.imgSrc = require("../../assets/campus.jpg");
          break;
        case "depart":
          this.title = "系办活动";
          this.imgSrc = require("../../assets/depart.jpg");
          break;
        case "festival":
          this.title = "节日活动";
          this.imgSrc = require("../../assets/festival.jpg");
          break;
        case "interest":
          this.title = "兴趣活动";
          this.imgSrc = require("../../assets/interest.jpg");
          break;
        case "match":
          this.title = "学习活动";
          this.imgSrc = require("../../assets/match.jpg");
          break;
        case "person":
          this.title = "个人活动";
          this.imgSrc = require("../../assets/person.jpg");
          break;
        case "study":
          this.title = "校办活动";
          this.imgSrc = require("../../assets/study1.jpg");
          break;
        case "team":
          this.title = "团队活动";
          this.imgSrc = require("../../assets/team.jpg");
          break;
        default:
          break;
      }
      this.getSortActivitys(this.title);
    },

    activeDetail(recommend) {
      this.$router.push({
        name: "detail",
        query: {
          activityId: recommend.activity.id
        }
      });
    }
  }
};
</script>
<style>
@import "../../style/base/base_xss.css";
@media (min-width: 640px) {
  .banner {
    background-image: url(../../assets/banner.jpg);
    height: 450px;
  }
  .special-list {
    background-color: #76bd45;
  }
  .banner {
    background-repeat: no-repeat;
    background-position: top center;
  }
}

.banner img {
  width: 100%;
  height: 450px;
}
.block-title {
  position: relative;
  max-width: 480px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 32px;
  text-align: center;
  margin: 30px auto;
  color: #fff;
  padding: 5px;
}

.item-box-3 {
  margin-left: -20px;
}

.item-box-3 .item {
  float: left;
  width: 30.333%;
  padding: 0 0 20px 20px;
}

.item-box-3 .item-con {
  display: block;
}
.item-con {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.item-box-3 .item .img {
  display: block;
  background: no-repeat center / cover;
  width: 100%;
  height: 210px;
}
.item-box-3 .item .info {
  padding: 15px;
}

.item-box-3 .item .info h2 {
  font-size: 17px;
  line-height: 24px;
  height: 50px;
  overflow: hidden;
}

.item-con p {
  margin-top: 10px;
  color: #666;
}

.item-con p:last-child {
  height: 40px;
  overflow: hidden;
}
.item-con .img img {
  width: 100%;
  height: 210px;
}
</style>

