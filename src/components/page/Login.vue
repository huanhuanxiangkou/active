<template>
  <div class="base">
    <div class="box">
          <div class="img">
               <img src="../../assets/schoolname.png" alt="">
          </div>
          <span class="line"></span>
          <el-row type="flex" class="row-bg" justify="center">
                 <div class="imgleft">
                   <img src="../../assets/loginback.png" alt="">
                  </div>
                    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="user">
                            <el-input v-model="username" placeholder="请输入内容"></el-input>
                        </el-form-item>  
                          <el-form-item label="密码" prop="pass">
                             <el-input v-model="password" placeholder="请输入内容"></el-input>
                        </el-form-item>  
                        <el-form-item>
                            <el-button type="primary" @click="login()">登陆</el-button>
                        </el-form-item>
                  </el-form>                 
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
      password: "",
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
    height: 260px;
   border: 1px solid  #d02d48;
    margin: 0  auto;
    padding:  20px 0;
    box-shadow: 10px  10px  20px   #948080;  
}
.line{
  height: 1px;
  background: #1C8DD4;
}
.img  img{
  width: 300px;
   margin-bottom: 20px;
}
 .imgleft img{
   width: 150px;
 }

.el-button--primary.is-active, .el-button--primary:active{

background: #1C8DD4;
}
</style>
