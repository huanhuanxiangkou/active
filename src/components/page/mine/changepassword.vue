<template>
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
</template>
<script>
export default {
  data(){
         var validateSource = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原密码'));
        } else {
          if (this.ruleForm.source !== '') {
            this.$refs.ruleForm.validateField('source');
          }
          callback();
        }
      };
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return{
     ruleForm: {
          pass: '',
          checkPass: '',
          source: ''
        },
        rules: {
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          source: [
            { required: true,validator: validateSource, trigger: 'blur' }
          ]
        }
    }
  }
}
</script>
<style>
.box{
  display: flex;
  justify-content: center;
}
.form{
  margin-top: 50px;
  width: 600px;

  }

</style>

