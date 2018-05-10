<template>
<div class="w1080">
    <div id="pt" class="bm cl">
        <div class="z">
            <a href="./" class="nvhm" title="首页">活动网-给生活加点&amp;quot;料&amp;quot;-全球最有活力的中文活动平台</a> <em>›</em>
            <router-link to="/">首页</router-link> <em>›</em>生活
        </div>
    </div>
    <div class="zx-hd cl">
        <span>生活</span>
    </div>
    <div style="margin-left:-30px" class="clearfloat">
        <div class="z clearfloat">
            <div class="act-excerpt clearfloat"  v-for="item in 4" :key="item">
            <a href="http://bj.huodongwang.com/article-91313-1.html" class="thumbnail"><img src="../../assets/test-life.jpg" alt="【三观Show】 价值观碰撞交友活动"></a>
                <div class="act-excerpt-y">
                    <h2><a href="http://bj.huodongwang.com/article-91313-1.html" title="【三观Show】 价值观碰撞交友活动">【三观Show】 价值观碰撞交友活动</a></h2>
                    <p class="hd-time">活动时间：2018-04-14 14:00</p>
                    <p class="hd-didian">活动地点：北京 工人体育场北路1号育膳房</p>
                    <p><a href="http://www.huodongwang.com/space-uid-17780.html" target="_blank" class="hd-avatar"><img src="../../assets/test-life2.jpg" alt="Linda2018"><span>Linda2018</span></a><a href="http://bj.huodongwang.com/article-91313-1.html" class="hd-chakan">立即报名</a></p>
                </div>
            </div>
        </div>
    </div>
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

.act-excerpt {
    margin-bottom: 30px;
    float: left;
    width: 22%;
    padding-left: 30px;
}

.act-excerpt .thumbnail {
    display: block;
    height: 150px;
    overflow: hidden;
    border: 1px solid #ddd;
}

.act-excerpt .thumbnail img {
    width: 100%;
    min-height: 100%;
}


.act-excerpt-y {
    border: 1px solid #ddd;
    border-top: none;
    padding: 10px;
}

.act-excerpt h2 {
    margin: 0;
    font-size: 16px;
    color: #000;
    font-weight: 500;
    height: 44px;
    overflow: hidden;
}

.act-excerpt .hd-didian, .act-excerpt .hd-time {
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
}

.act-excerpt-y p {
    margin-top: 10px;
}

.act-excerpt .hd-didian {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}

.act-excerpt-y p {
    margin-top: 10px;
}

.act-excerpt .hd-avatar {
    margin-right: 10px;
}

.act-excerpt .hd-chakan {
    font-size: 14px;
    display: inline-block;
    padding: 5px 10px;
    background: #5EB95E;
    color: #fff;
    border-radius: 5px;
}
.act-excerpt .hd-avatar img {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    margin-right: 5px;
}

.act-excerpt .hd-avatar span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    width: 90px;
    vertical-align: middle;
}

/*==========================================================*/
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



</style>

