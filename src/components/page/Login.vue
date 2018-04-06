<template>
  <div>
    <el-input v-model="username" placeholder="请输入内容"></el-input>
    <el-input v-model="password" placeholder="请输入内容"></el-input>
     <el-button type="primary" @click="login()">主要按钮</el-button>
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

</style>
