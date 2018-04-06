<template>
  <div class="index">
      <div class="w1080">
          <el-carousel :interval="5000" type="card" height="360px">
            <el-carousel-item v-for="imagePath in imagePaths" :key="imagePath">
                <h3><img width="650px" height="360px" :src="imagePath" alt=""></h3>
            </el-carousel-item>
          </el-carousel>
          <!-- <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="imagePath in imagePaths" :key="imagePath">
            <a><img width="1080px" height="360px" :src="imagePath" alt=""></a>
            </el-carousel-item>
          </el-carousel> -->
      </div>
      <div class="boxbg pd_50_0">
          <div class="w1080">
              <h2>
                  <span>活动推荐</span>
              </h2>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        imagePaths:[
            require("../../assets/lunbotu0.jpg"),
            require("../../assets/lunbotu1.jpg"),
            require("../../assets/lunbotu2.jpg"),
            require("../../assets/lunbotu3.jpg"),
        ]
    };
  },
  methods: {
  }
};
</script>
<style>
@import "../../style/base/base_xss.css";  
.index .el-carousel__container{
    height: 360px;
}
.index .boxbg{
    background-color: #f0f0f0;
}
.boxbg h2 {
    background: url(../../assets/xian.png) repeat-x center;
    font-size: 26px;
    font-weight: 400;
    display: block;
    margin-bottom: 20px;
}
.boxbg h2 span {
    background: #f0f0f0;
    border-left: 3px solid #d02d48;
    padding: 0 20px;
    font-size: 26px;
    font-weight: 400;
}
</style>
