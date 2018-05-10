<template>
<div class="myhome-article cl">
          <a href="http://bj.huodongwang.com/article-91114-1.html" class="img" style="background-image:url(data/attachment/data/attachment/cnyinglan_huodongs/2018/043/104531vwsmmokwonwm6siz.jpg_252_189_2_0.jpg)"></a>
          <div class="info">
              <h2><a href="http://bj.huodongwang.com/article-91114-1.html" target="_blank">[4.7周六]欢 乐 狼 人 杀—蒙面涛涛复活指刀|友行友派</a></h2>
              <p>发布者：<a href="http://www.huodongwang.com/home.php?mod=space&amp;uid=17320&amp;do=profile&amp;op=huodong">友行友派</a><span class="state">状态：已收藏</span></p>
              <p>活动时间：2018-04-07 13:00-2018-04-07 19:00</p>
              <p><a href="javascript:;" class="btn btn-danger" onclick="deleshoucang('1067')">删除收藏</a></p>
          </div>
</div>
</template>
<script>
import {
  getUserById,
  getCollectionActivitys,
  getSignupActivitys
} from "@/api/getInfo";
export default {
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    let type = this.$route.query.acType;
    let userId = parseInt(this.$route.query.userId);
    switch (type) {
      case "sign":
        getSignupActivitys(userId)
          .then()
          .catch();
        break;
      case "publish":
        break;
      case "collection":
        // console.log(typeof this.$route.query.userId);
        getCollectionActivitys()
          .then(res => {})
          .catch();
        break;
      case "tobeaudited":
        break;

      default:
        break;
    }
    // getSignupActivitys
  }
};
</script>
