<template>
<div class="w1080">
    <div id="pt" class="bm cl">
        <div class="z">
            <a href="./" class="nvhm" title="首页">活动网-给生活加点&amp;quot;料&amp;quot;-全球最有活力的中文活动平台</a> <em>›</em>
            <router-link to="/index">首页</router-link> <em>›</em>专题
        </div>
    </div>
    <div class="zx-hd cl">
        <span>专题</span>
    </div>
    <div class="zx-excerpt cl">
        <a href="http://www.huodongwang.com/article-28907-1.html" target="_blank" class="img"><img src="../../assets/103525f7j4qjhjigx8j3yl.jpg.thumb.jpg" alt="宝贝暑期的正确打开方式"></a>
        <h2><a href="http://www.huodongwang.com/html/zhuanti/outdoors/summer-camp/2016/index.html" title="宝贝暑期的正确打开方式" target="_blank" style="">宝贝暑期的正确打开方式</a> </h2>
        <p class="summary">做家长，除了希望看到宝贝健康成长，更希望他们有一个丰富多彩的童年；做老师，除了希望看到学生学习进步，更希望他们能出色的展现自我...成长，还需要更多外出磨炼...暑期的夏令营，你想好带孩子去哪儿了吗？</p>
        <a href="http://www.huodongwang.com/html/zhuanti/outdoors/summer-camp/2016/index.html" target="_blank" class="hd-chakan">查看文章</a>
        <span class="xg1">
            <span class="pipe">|</span>
            <span>2016-6-16 10:35</span>
        </span>
    </div>
    <el-row type='flex' justify="center">
        <el-col   :span="6">
            <el-pagination
                small
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    data() {
    return {

    };
  },
}
</script>
<style>
@import "../../style/base/base_xss.css"; 

#pt {
    margin: 2px 0;
    height: 29px;
    border: none;
    background: transparent;
    font-size: 14px;
    line-height: 29px;

}
.nvhm {
    width: 16px;
    background: url(../../assets/search.png) no-repeat 0 0;
    line-height: 200px;
    overflow: hidden;
}
.bm {
    border: 1px solid #CDCDCD;
    background: #FFF;
}

.bm, .bn {
    margin-bottom: 10px;
}

#pt .z {
    padding-right: 10px;
}

#pt .z em {
    width: 20px;
    background: url(../../assets/pt_item.png) no-repeat 3px 10px;
    line-height: 200px;
    overflow: hidden;
}

#pt .z a, #pt .z em, #pt .z span {
    float: left;
    height: 29px;
}

.zx-hd {
    background: #fafafa;
    border: 1px solid #d8d8d8;
    padding: 6px 15px;
    margin-bottom: 15px;
    font-size: 14px;
}

.zx-excerpt {
    border: 1px solid #d8d8d8;
    padding: 20px;
    margin-bottom: 20px;
}
.zx-excerpt h2 {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 500;
}

.zx-excerpt .summary {
    margin-bottom: 10px;
    color: #666;
    font-size: 14px;
}
.zx-excerpt .img {
    float: right;
    width: 200px;
    height: 130px;
    display: block;
    overflow: hidden;
}

.zx-excerpt .img img {
    max-width: 100%;
}

.xg1, .xg1 a {
    color: #999 !important;
}
.pipe {
    margin: 0 5px;
    color: #CCC;
}

</style>

