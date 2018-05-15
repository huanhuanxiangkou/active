<template>
<div class="changepass">
  <div class="box">
      <div class="form">
          <el-form   :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
         <el-form-item label="原密码" prop="source">
            <el-input v-model.number="ruleForm.source"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="pass">
           <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
       
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
  </el-form>  
      </div>
  </div>
  </div>
</template>
<script>
import { getUserById, userRegister } from "@/api/getInfo";
export default {
  mounted() {},
  data() {
    var validateSource = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入原密码"));
      } else {
        if (this.ruleForm.source !== "") {
          let userId = parseInt(localStorage.getItem("ms_userid"));
          getUserById(userId)
            .then(result => {
              if (result.data.code == 200) {
                if (result.data.data.password !== this.ruleForm.source) {
                  callback(new Error("密码输入错误！"));
                } else {
                  this.user = result.data.data;
                  callback();
                }
              }
            })
            .catch(err => {});
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        source: ""
      },
      user: {},
      rules: {
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        source: [{ required: true, validator: validateSource, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.user.password = this.ruleForm.pass;
          this.user.date = Date.parse(new Date(this.user.date));
          this.user.birthday = Date.parse(new Date(this.user.birthday));
          userRegister(this.user)
            .then(result => {
              if (result.data.code == 200) {
                this.$message({
                  showClose: true,
                  message: "密码修改成功！",
                  type: "success"
                });
              } else {
                this.$message({
                  showClose: true,
                  message: "密码修改失败！",
                  type: "error"
                });
              }
            })
            .catch(err => {});
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style>
.changepass .box {
  display: flex;
  justify-content: center;
}
.changepass .form {
  margin-top: 50px;
  width: 600px;
}
</style>

