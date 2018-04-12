<template>
  <div class="base">
    <div class="box">
          <div class="image">
               <img src="../../assets/schoolname.png" alt="">
          </div>
          <el-row type="flex" class="row-bg" justify="center">
                 <div class="imgleft">
                   <img src="../../assets/loginback.png" alt="">
                  </div>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>  
                          <el-form-item label="密码" prop="password">
                             <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                        </el-form-item>  
                        <el-form-item class=" button">
                              <el-button  type="primary" @click="login()">登陆</el-button>
                        </el-form-item>
                        <div class="radio">
                            <el-radio-group v-model="radio">
                                  <el-radio :label="1">学生</el-radio>
                                  <el-radio :label="2">社长</el-radio>
                                  <el-radio :label="3">管理员</el-radio>
                                </el-radio-group>
                        </div>
                  </el-form>                 
          </el-row>   
    </div>
  </div>
</template>
<script>
import { userLogin } from "@/api/getInfo";
export default {
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
           callback();
          }
        };
    return {
      ruleForm:{
         username: '',
         password: '',
      }  ,
      rules:{
        username:[
           { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password:[
          { validator: validatePass, trigger: 'blur' }
        ]
      },
       radio: 1,
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
   width: 50em;
    height: 27em;
   border: 1px solid  #d02d48;
    margin: 10em  auto;
    padding:  1em 0;
    box-shadow: 1em  1em  2em   #948080;  
}
.box .button  .el-button--primary{
    width: 121%;
    margin-left: -3em;
}
.line{
  height: 1px;
  background: #1C8DD4;
}
.image  img{
  width: 20em;
   margin-bottom: 1em;
}
 .imgleft img{
   width: 160px;
 }
.el-row--flex.is-justify-center{
  background: #da9191;
    padding-top: 1em;
}
.imgleft{
  width: 40%;
    border-right: 1px solid;
    height: 70%;
    border-color: #847171;
}
.el-form .demo-ruleForm{
  margin-right: 20px;
}
.box  .el-form-item__error{
  color:#1C8DD4;
}
.radio{
  padding-left: 60px;
  margin-bottom: 11px;
}
</style>
