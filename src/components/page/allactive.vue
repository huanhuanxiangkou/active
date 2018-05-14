<template>
  <div class="ghh-allac">
   <div class="w1080 faxian cl">
       <div class="cl mgb_20" style="position: relative;">
         <div class="y">
           <div class="list">
              <article class="article cl" v-for="(active,index) in actives" :key="index">
                    <a href="javascript:void(0);" class="img" target="_blank"  @click="activeDetail(active)"><img class="datailimage" :src="active.activity.photoUrl"></a>
                    <div class="info">
                        <h2><a  href="javascript:void(0);" target="_blank" :title="active.activity.name"  @click="activeDetail(active)">{{active.activity.name}}</a></h2>
                        <p class="avatar"><span><img :src="active.activity.photoUrl">{{active.user.name}}</span></p>
                        <p>活动时间：{{active.activity.dateStart}}-{{active.activity.dateEnd}}</p>
                        <p class="pdr_140">活动地点：{{active.activity.address}}</p>
                        <a href="javascript:void(0);"  class="cm-btn cm_bg_1 art-btn" target="_blank"  @click="activeDetail(active)">立即报名</a>
                    </div>
              </article>
           </div>
         </div>
       </div>
   </div>
   </div>
  <!-- </div> -->
</template>
<script>
import { getAllActivitys, findActivityByKey } from "@/api/getInfo";
import { Bus } from "@/VueInstance/vueIns";
export default {
  data() {
    return {
      actives: [],
      type: "",
      keyWords: ""
    };
  },
  computed: {
    username() {
      return localStorage.getItem("ms_username");
    }
  },
  watch: {
    $route: function() {
      this.findActivityByType(this.$route.query.type);
    },
    keyWords: function() {
      this.getActivitysByKeywords(this.keyWords);
    }
  },
  mounted() {
    Bus.$on("setKeywords", msg => {
      this.keyWords = msg;
    });
    this.type = this.$route.query.type;
    this.findActivityByType(this.type);
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
    findActivityByType(type) {
      this.actives = [];
      switch (type) {
        case "school":
          this.getActivitys("校办活动");
          break;
        case "department":
          this.getActivitys("系办活动");
          break;
        case "group":
          this.getActivitys("团队活动");
          break;
        case "personal":
          this.getActivitys("个人活动");
          break;
        case "keywords":
          this.keyWords = localStorage.getItem("ms_keywords");
          this.getActivitysByKeywords(this.keyWords);
          break;
        default:
          break;
      }
    },
    getActivitys(type) {
      getAllActivitys({})
        .then(res => {
          if (res.data.code === 200) {
            let allActives = res.data.data.filter(item => {
              return item.activity.status == 1;
            });

            this.actives = allActives.filter(item => {
              return item.list.some(item2 => {
                return item2.name == type;
              });
            });
          }
        })
        .catch();
    },
    getActivitysByKeywords(keyWords) {
      findActivityByKey(keyWords)
        .then(result => {
          if (result.data.code == 200) {
            this.actives = result.data.data.filter(item => {
              return item.activity.status == 1;
            });
          }
        })
        .catch(err => {});
    }
  }
};
</script>
<style>
.ghh-allac .wp {
  width: auto !important;
}
.ghh-allac .w1080,
.ghh-allac .wp {
  margin: 0 auto;
  width: 1080px;
}
.ghh-allac .mgb_20 {
  margin-bottom: 20px;
}
.ghh-allac .faxian .y {
  width: 895px;
}
.ghh-allac .article,
.ghh-allac .article:after {
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.ghh-allac .article {
  position: relative;
  margin: 0 0 20px 0;
  padding: 20px;
  position: relative;
  background-color: #fafafa;
  border: 1px solid #eee;
}
.ghh-allac .article .img {
  float: left;
  width: 180px;
  height: 150px;
  margin-right: 20px;
}
.ghh-allac .article .img,
.ghh-allac .sidebar-hot .img {
  display: block;
  background: no-repeat center center;
  background-size: cover;
}
.ghh-allac .article .info {
  overflow: hidden;
}
.ghh-allac .article h2 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
}
.ghh-allac .img .datailimage {
  width: 200px;
  height: 115px;
}
.ghh-allac a {
  color: #333;
  text-decoration: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.ghh-allac .article p {
  margin-top: 10px;
  color: #777;
}
.ghh-allac .article p a {
  color: #777;
}
.ghh-allac .article .avatar img {
  width: 25px;
  height: 25px;
  border-radius: 15px;
  vertical-align: middle;
}
.ghh-allac img {
  border: none;
  max-width: 100%;
  height: auto;
}
.ghh-allac .article p {
  margin-top: 10px;
  color: #777;
}
.ghh-allac .pdr_140 {
  padding-right: 140px;
}
.ghh-allac .art-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.ghh-allac .cm-btn {
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
.ghh-allac .cm_bg_1 {
  background: #5eb95e;
  color: #fff;
}
.ghh-allac .article:hover:before {
  opacity: 1;
}
.ghh-allac .article:before {
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
.ghh-allac .article,
.ghh-allac .article:after {
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
</style>


