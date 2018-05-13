<template>
<div class="special-list">
    <div class="banner"><img :src="imgSrc"></div>
    <div class="w960">
        <h3 class="block-title">{{title}}</h3>
        <div class="item-box-3 clearfloat">
            <div class="item">
                <a href="http://gz.huodongwang.com/article-27306-1.html" class="item-con" target="_blank">
                    <div class="img" style="background-image:url(http://www.huodongwang.com/data/attachment/cnyinglan_huodongs/2016/0528/163455hwea3sei3pvavs3w.jpg)">
                    </div>
                    <div class="info">
                        <h2>【广州】黄埔军校2016军旅“少年将帅特训”军事夏令营期待你的加入</h2>
                        <p>时间：2016-07-10 08:00 ～ 2016-08-20 17:00</p>
                        <p>地点：广东广州黄埔区军校路170号</p>
                    </div>
                </a>
            </div>
            <div class="item">
                <a href="http://gz.huodongwang.com/article-27306-1.html" class="item-con" target="_blank">
                    <div class="img" style="background-image:url(http://www.huodongwang.com/data/attachment/cnyinglan_huodongs/2016/0528/163455hwea3sei3pvavs3w.jpg)">
                    </div>
                    <div class="info">
                        <h2>【广州】黄埔军校2016军旅“少年将帅特训”军事夏令营期待你的加入</h2>
                        <p>时间：2016-07-10 08:00 ～ 2016-08-20 17:00</p>
                        <p>地点：广东广州黄埔区军校路170号</p>
                    </div>
                </a>
            </div>
            <div class="item">
                <a href="http://gz.huodongwang.com/article-27306-1.html" class="item-con" target="_blank">
                    <div class="img" style="background-image:url(http://www.huodongwang.com/data/attachment/cnyinglan_huodongs/2016/0528/163455hwea3sei3pvavs3w.jpg)">
                    </div>
                    <div class="info">
                        <h2>【广州】黄埔军校2016军旅“少年将帅特训”军事夏令营期待你的加入</h2>
                        <p>时间：2016-07-10 08:00 ～ 2016-08-20 17:00</p>
                        <p>地点：广东广州黄埔区军校路170号</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
        title:"",
        imgSrc:"",
    };
  },
  mounted() {
      this.switchType();
  },
  methods: {
    switchType() {
      switch (this.$route.query.specialType) {
        case "campus":
        this.title="校办活动";
        this.imgSrc=require("../../assets/campus.jpg");
          break;
        case "depart":
        this.title="系办活动";
        this.imgSrc=require("../../assets/depart.jpg");
          break;
        case "festival":
        this.title="节日活动";
        this.imgSrc=require("../../assets/festival.jpg");
          break;
        case "interest":
        this.title="兴趣活动";
        this.imgSrc=require("../../assets/interest.jpg");
          break;
        case "match":
        this.title="学习活动";
        this.imgSrc=require("../../assets/match.jpg");
          break;
        case "person":
        this.title="个人活动";
        this.imgSrc=require("../../assets/person.jpg");
          break;
        case "study":
        this.title="校办活动";
        this.imgSrc=require("../../assets/study1.jpg");
          break;
        case "team":
        this.title="团队活动";
        this.imgSrc=require("../../assets/team.jpg");
          break;
        default:
          break;
      }
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

.banner img{
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
</style>

