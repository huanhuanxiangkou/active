<template>
 <!-- <div id="wp" class="wp mm cm-page"> -->
   <div class="w1080 faxian cl">
       <div class="cl mgb_20" style="position: relative;">
         <div class="y">
           <div class="list">
              <article class="article cl" v-for="(active,index) in actives" :key="index">
                    <a href="http://sh.huodongwang.com/article-90651-1.html" class="img" target="_blank" ><img :src="active.activity.photoUrl"></a>
                    <div class="info">
                        <h2><a href="http://sh.huodongwang.com/article-90651-1.html" target="_blank" :title="active.activity.name">{{active.activity.name}}</a></h2>
                        <p class="avatar"><span><img :src="active.activity.photoUrl">{{active.user.name}}</span></p>
                        <p>活动时间：{{active.activity.dateStart}}</p>
                        <p class="pdr_140">活动地点：{{active.activity.address}}</p>
                        <a href="
                        " class="cm-btn cm_bg_1 art-btn" target="_blank">立即报名</a>
                    </div>
              </article>
              <!-- <article class="article cl">
                    <a href="http://sh.huodongwang.com/article-90651-1.html" class="img" target="_blank" style="background-image:url(../../assets/pipa.jpg);"></a>
                    <div class="info">
                        <h2><a href="http://sh.huodongwang.com/article-90651-1.html" target="_blank" title="2019年上海春季五金展_中国国际五金博览会">2019年上海春季五金展_中国国际五金博览会</a></h2>
                        <p class="avatar"><a href="http://www.huodongwang.com/space-uid-17248.html"><img src="http://www.huodongwang.com/uc/avatar.php?uid=17248&amp;size=small"> 胡镔</a></p>
                        <p>时间：2019-03-29 00:00</p>
                        <p class="pdr_140">地点：上海青浦区崧泽大道333号国家会展中心（上海-虹桥）</p>
                        <a href="http://sh.huodongwang.com/article-90651-1.html" class="cm-btn cm_bg_1 art-btn" target="_blank">立即报名</a>
                    </div>
              </article> -->
           </div>
         </div>
       </div>
   </div>
  <!-- </div> -->
</template>
<script>
import { getAllActivitys, findActivityByKey } from "@/api/getInfo";
export default {
  data() {
    return {
      actives: []
    };
  },
  computed: {
    username() {
      return localStorage.getItem("ms_username");
    }
  },
  mounted() {
    console.log(this.$route.query.type);
    let type = this.$route.query.type;
    switch (type) {
      case "school":
      findActivityByKey("校办活动").then(res=>{
          if(res.data.code===200){
              this.actives = [];
              this.actives=res.data.data;
          }
      }).catch();
        break;
      case "department":
        break;
      case "group":
        break;
      case "personal":
        break;
      default:
        break;
    }
    getAllActivitys({})
      .then(res => {
        if (res.data.code === 200) {
          this.actives = res.data.data;
        }
      })
      .catch();
  }
};
</script>
<style>
.wp {
  width: auto !important;
}
.w1080,
.wp {
  margin: 0 auto;
  width: 1080px;
}
.mgb_20 {
  margin-bottom: 20px;
}
.faxian .y {
  width: 895px;
}
.article,
.article:after {
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.article {
  position: relative;
  margin: 0 0 20px 0;
  padding: 20px;
  position: relative;
  background-color: #fafafa;
  border: 1px solid #eee;
}
.article .img {
  float: left;
  width: 180px;
  height: 150px;
  margin-right: 20px;
}
.article .img,
.sidebar-hot .img {
  display: block;
  background: no-repeat center center;
  background-size: cover;
}
.article .info {
  overflow: hidden;
}
.article h2 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
}
a {
  color: #333;
  text-decoration: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.article p {
  margin-top: 10px;
  color: #777;
}
.article p a {
  color: #777;
}
.article .avatar img {
  width: 25px;
  height: 25px;
  border-radius: 15px;
  vertical-align: middle;
}
img {
  border: none;
  max-width: 100%;
  height: auto;
}
.article p {
  margin-top: 10px;
  color: #777;
}
.pdr_140 {
  padding-right: 140px;
}
.art-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.cm-btn {
  display: inline-block;
  padding: 6px 20px;
  font-size: 16px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 5px;
  border: 1px solid transparent;
  -webkit-transition: background-color 300ms ease-out,
    border-color 300ms ease-out;
  transition: background-color 300ms ease-out, border-color 300ms ease-out;
  outline: 0;
}
.cm_bg_1 {
  background: #5eb95e;
  color: #fff;
}
.article:hover:before {
  opacity: 1;
}
.article:before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.article,
.article:after {
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
</style>


