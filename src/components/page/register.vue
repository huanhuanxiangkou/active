<template>
<div class="box">
    <div class="img">
               <img src="../../assets/schoolname.png" alt="">
    </div>
       <div class="content">
            <div class="register">
              <span>注册南工活动网</span>
           </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
              <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
       </div>
</div>
</template>
<script>
import {userRegister} from '@/api/getInfo'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
       var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          pass:'',
          checkPass:''
        },
        rules: {
          name:[
             { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass:[
           {required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            userRegister(this.ruleForm).then( res=> {
              console.log(res);
            }).catch();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
.box{
   width: 50em;
    height: 35em;
   border: 1px solid  #d02d48;
    margin: 10em  auto;
    padding:  1em 0;
    box-shadow: 1em  1em  2em   #948080;  
}
.register{
  text-align: center;
    margin: 2em 0;
}
.img{
  text-align: center;
  margin: 0.5em;

}
.img  img{
  width: 20em;
   /* margin-bottom: 20px; */
}
 .box .el-input .el-input__inner{
  width: 60%;
  margin-right: 10em
}
.register span{
  font : 700  18px/18px 'PingFangSC-Regular';
} 
.box  .el-form {
  margin-left: 2em;
}
.content{
 background:  #da9191;
 padding: 5px 0;
}
</style>
