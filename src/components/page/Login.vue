<template>
  <div class="base">
    <div class="box">
          <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6">
                    <el-input v-model="username" placeholder="请输入内容"></el-input>
                    <el-input v-model="password" placeholder="请输入内容"></el-input>
                    <el-button type="primary" @click="login()">登陆</el-button>
                  </el-col>
          </el-row>   
    </div>
  </div>
</template>
<script>
import { userLogin } from "@/api/getInfo";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      userLogin(this.password, this.username)
        .then(res => {
          console.log(res);
        })
        .catch();
    }
  }
};
</script>
<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
.base{
  flex-direction: column;
  align-items: center;
  justify-content: center;
 text-align: center;
}
.box{
   width: 600px;
    height: 400px;
    background-color: #2AA6F6;
}
.el-button--primary.is-active, .el-button--primary:active{

background: #1C8DD4;
}
</style>
