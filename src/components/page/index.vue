<template>
  <div class="index">
      <div class="lunbo1 w1080">
          <!-- <el-carousel :interval="5000" type="card" height="360px">
            <el-carousel-item v-for="imagePath in imagePaths" :key="imagePath">
                <h3><img width="650px" height="360px" :src="imagePath" alt=""></h3>
            </el-carousel-item>
          </el-carousel> -->
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="imagePath in imagePaths" :key="imagePath">
            <a><img width="1080px" height="400px" :src="imagePath" alt=""></a>
            </el-carousel-item>
          </el-carousel>
      </div>
      <div class="boxbg pd_50_0">
          <div class="w1080">
              <h2><span>活动推荐</span></h2>
              <el-row>
                 <el-col :span="6"  v-for="recommend in recommends" :key="recommend.id">
                    <div class="cm_box_item">
                        <a href="javascript:void(0);" class="img" @click="activeDetail(recommend)">
                        <img :src="recommend.activity.photoUrl" :alt="recommend.activity.name">
                            <span>立即<br>报名</span>
                        </a>
                        <div class="info">
                            <h3><a href="javascript:void(0);" :title="recommend.activity.name" target="_blank" @click="activeDetail(recommend)">{{recommend.activity.name}}</a></h3>
                            <p>活动时间：{{recommend.activity.dateStart}}</p>
                            <p>活动地点：{{recommend.activity.address}}</p>
                        </div>
                    </div>
                </el-col>
              </el-row>
          </div>
      </div>
      <div class="cm-special pd_50_0">
          <div class="lunbo12 w1080">
              <h2>
                <span class="bga">专题 · special</span>
                <router-link to="/special"><a href="#" class="y more" target="_blank"></a></router-link>
              </h2>
                <el-row>
                    <el-carousel :interval="5000" arrow="always">
                        <el-carousel-item v-for="(item,index) in 2" :key="index">
                            <el-col :span="6" v-for="(special,index) in specials[index]" :key="index">
                                <a href="javascript:void(0);" target="_blank" class="cm-special-a" @click="specialPage(special)">
                                <img :src="special.imgSrc">
                                <h3 :title="special.title">{{special.title}}</h3>
                                <p>{{special.content}}</p>
                                </a>
                            </el-col>
                        </el-carousel-item>
                    </el-carousel>
                </el-row>
          </div>
      </div>
      <div class="cm-life boxbg pd_50_0 clearfloat">
          <div class="w1080">
              <h2>
                <span>学习 · Study</span>
                <router-link to="/life"><a href="#" class="y more" target="_blank"></a></router-link>
              </h2>
              <div class="clearfloat">
              <div class="cm-life-big">
                  <img src="../../assets/study.jpg" alt="学习">
              </div>
              <div class="z mgt-30" style="width:748px">
                  <div class="z cm-life-small" v-for="(learnActivitie,index) in learnActivitiecs" :key="index">
                    <div class="cm-life-small-div">
                        <a href="javascript:void(0);" target="_blank" class="img" @click="activeDetail(learnActivitie)">
                        <img :src="learnActivitie.activity.photoUrl" :alt="learnActivitie.activity.name">
                        </a>
                        <div class="info">
                            <h3><a href="javascript:void(0);"  target="_blank" :title="learnActivitie.activity.name" @click="activeDetail(learnActivitie)">{{learnActivitie.activity.name}}</a></h3>
                            <p>活动时间：{{learnActivitie.activity.dateStart}}</p>
                            <p>活动地点：{{learnActivitie.activity.address}}</p>
                            <p><a href="javascript:void(0);" class="avatar" :title="learnActivitie.user.name">
                            <img :src="learnActivitie.activity.photoUrl"><span>{{learnActivitie.user.name}}</span></a></p>
                        </div>
                    </div>
                </div>
             </div>

             </div>
      </div>
      </div>
      <div style="background:#fff" id="act-7">
        <div class="w1080 act-box-about">
            <h3>活动网 <small>Enterprise culture</small></h3>
            <p><span>人与人、资源与资源之间相互串联，聚集</span><br>The mutual connection between human, resources and resources is gathered.</p>
            <p><span>让彼此之间的爱与正能量相互传递</span><br>Let love and positive energy transfer each other</p>
            <!-- <a href="http://www.huodongwang.com/topic-hdw_introduce.html">了解更多</a> -->
            </div>
        </div>
        <div class="cm_fabuhuodong">
            <h3>迫不及待想去做的事</h3>
            <router-link to="/publish"><a href="#" class="cm-btn2">+发布活动</a></router-link> <a href="#" class="cm-btn2 back2top2" @click="scrollToTop">参与活动</a>
        </div>
  </div>
</template>
<script>
import { getAllActivitys } from "@/api/getInfo";
export default {
  data() {
    return {
      imagePaths: [
        require("../../assets/lunbotu0.jpg"),
        require("../../assets/lunbotu1.jpg"),
        require("../../assets/lunbotu2.jpg"),
        require("../../assets/lunbotu3.jpg")
      ],
      recommends: [],
      specials: [
        [
          {
            imgSrc: require("../../assets/campus.jpg"),
            routeLink: "",
            type: "campus",
            title: "校办活动",
            content: ""
          },
          {
            imgSrc: require("../../assets/depart.jpg"),
            routeLink: "",
            type: "depart",
            title: "系办活动",
            content: ""
          },
          {
            imgSrc: require("../../assets/festival.jpg"),
            routeLink: "",
            type: "festival",
            title: "节日活动",
            content: ""
          },
          {
            imgSrc: require("../../assets/interest.jpg"),
            routeLink: "",
            type: "interest",
            title: "兴趣活动",
            content: ""
          }
        ],
        [
          {
            imgSrc: require("../../assets/match.jpg"),
            routeLink: "",
            type: "match",
            title: "比赛活动",
            content: ""
          },
          {
            imgSrc: require("../../assets/person.jpg"),
            routeLink: "",
            type: "person",
            title: "个人活动",
            content: ""
          },
          {
            imgSrc: require("../../assets/study1.jpg"),
            routeLink: "",
            type: "study",
            title: "学习活动",
            content: ""
          },
          {
            imgSrc: require("../../assets/team.jpg"),
            routeLink: "",
            type: "team",
            title: "团队活动",
            content: ""
          }
        ]
      ],
      learnActivities: []
    };
  },
  computed: {
    learnActivitiecs() {
      return this.learnActivities.splice(0, 6);
    }
  },
  mounted() {
    getAllActivitys()
      .then(res => {
        if (res.data.code == 200) {
          let activitys = res.data.data.filter(item=>{
            return item.activity.status==1
          });
          let len = activitys.length;
          this.recommends.push(activitys[len - 1]);
          this.recommends.push(activitys[len - 2]);
          this.recommends.push(activitys[len - 3]);
          this.recommends.push(activitys[len - 4]);

          this.learnActivities = activitys.filter(item => {
            return item.list.some(item2 => {
              return item2.name == "学习活动";
            });
          });
        }
      })
      .catch();
  },
  methods: {
    scrollToTop() {
      document.body.scrollTop = 0;
    },
    activeDetail(recommend) {
      this.$router.push({
        name: "detail",
        query: {
          activityId: recommend.activity.id
        }
      });
    },
    specialPage(active) {
      this.$router.push({
        name: "speciallist",
        query: {
          specialType: active.type
        }
      });
    }
  }
};
</script>
<style>
@import "../../style/base/base_xss.css";
.index .lunbo1 .el-carousel__container {
  height: 360px;
}
.index .lunbo12 .el-carousel__container {
  height: 275px;
}
.index .boxbg {
  background-color: #f0f0f0;
}
.index h2 {
  background: url(../../assets/xian.png) repeat-x center;
  font-size: 26px;
  font-weight: 400;
  display: block;
  margin-bottom: 20px;
}
.index h2 span {
  background: #f0f0f0;
  border-left: 3px solid #d02d48;
  padding: 0 20px;
  font-size: 26px;
  font-weight: 400;
}
.cm_box_item {
  border: 1px solid #eee;
  background: #fff;
}

.index .el-col-6 {
  padding-left: 15px;
  padding-right: 15px;
}
.cm_box_item .img {
  display: block;
  overflow: hidden;
  position: relative;
  height: 190px;
  text-align: center;
}
.cm_box_item .img img {
  display: inline-block;
  max-height: 158px;
}

.cm_box_item .img span:hover {
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
.cm_box_item .img span {
  position: absolute;
  bottom: 0;
  left: 50%;
  background: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  margin-left: -33px;
  width: 66px;
  height: 52px;
  text-align: center;
  padding: 14px 0 0 0;
  color: #fff;
  font-size: 14px;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr=#7f000000,
      endColorstr=#7f000000
    );
  zoom: 1;
}
.cm_box_item .info {
  padding: 10px;
}
.cm_box_item h3 {
  height: 43px;
  overflow: hidden;
  margin-bottom: 10px;
}
.cm_box_item .info p {
  color: #666;
}
.cm_box_item .info p {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
.cm_box_item .avatar {
  margin-top: 10px;
  display: block;
  text-align: center;
  border-top: 1px solid #eee;
  padding-top: 10px;
}
.info a {
  color: #333;
  text-decoration: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.cm-special .bga {
  background: #fff;
}
.cm-special .more {
  font-size: 14px;
  background: #fff;
  height: 31px;
  line-height: 31px;
  padding-left: 20px;
}
.cm-special-a {
  display: block;
  border: 1px solid #e8e8e8;
  height: 273px;
  right: -1px;
  position: relative;
}
.cm-special-a img {
  display: block;
  height: 165px;
  margin: 0 auto;
  width: 100%;
}
.cm-special-a h3 {
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.cm-special-a h3 {
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cm-life .more {
  font-size: 14px;
  height: 31px;
  line-height: 31px;
  padding-left: 20px;
  background: #f0f0f0;
}
.cm-life-big {
  position: relative;
  border: 1px solid #ddd;
  float: left;
  width: 330px;
  height: 326px;
}
.cm-life-big img {
  border: none;
  max-width: 100%;
  height: 100%;
}
.cm-life-small {
  width: 218px;
  float: left;
  padding: 30px 0 0 30px;
}
.cm-life-small div {
  position: relative;
  height: 148px;
  overflow: hidden;
  border: 1px solid #ddd;
}
.cm-life-small a {
  color: #333;
  text-decoration: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.cm-life-small .img img {
  display: block;
  height: 100%;
  width: 100%;
}
.cm-life-small .info {
  position: absolute;
  display: block;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  padding: 5px;
  height: 16px;
  -moz-transition: all 0.3;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr=#b2FFFFFF,
      endColorstr=#b2FFFFFF
    );
  zoom: 1;
}
.cm-life-small .info h3 {
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
  overflow: hidden;
  height: 40px;
}
.cm-life-small .info h3 a {
  color: #222;
}
.cm-life-small .info h3 a {
  text-decoration: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.cm-life-small .info p {
  font-size: 13px;
  margin-bottom: 5px;
}
.cm-life-small .info p,
.cm_box_item .info p,
.cm_box_item_2 .info p,
.widget-big a {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
.cm-life-small .avatar {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  width: 80%;
}
.cm-life-small .avatar img {
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  border: none;
  max-width: 100%;
}
.cm-life-small .avatar span{
      vertical-align: middle;
    padding-left: 5px;
}
.cm-life-small .info:hover {
  height: 93.5%;
  background: rgba(255, 255, 255, 0.9);
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr=#e5FFFFFF,
      endColorstr=#e5FFFFFF
    );
  zoom: 1;
}
.act-box-about {
  background: url(../../assets/index-bg.png) 50% 0 no-repeat;
  padding: 60px 0 30px 0;
  text-align: center;
}
.act-box-about h3 {
  font-size: 30px;
  font-weight: 400;
  margin: 0 0 20px 0;
}
.act-box-about p {
  font-size: 14px;
  margin: 0 0 20px;
}
.cm_fabuhuodong {
  background: #da9191;
  color: #fff;
  text-align: center;
  padding: 30px 0 27px 0;
}
.cm_fabuhuodong h3 {
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 400;
}
.cm_fabuhuodong a {
  color: #fff;
}
.cm-btn2 {
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  padding: 10px 25px;
  border: 1px solid #fff;
  color: #fff;
  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  transition: all 0.25s;
  margin: 0 10px;
}
.cm-btn2:hover {
  background: #fff;
  color: #da9191;
  text-decoration: none;
}
</style>
