<template>
    <div class="w1080 publish-active">
      <div class="event-create-label event-create-label-long">填写基本信息</div>
      <div class="active-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" required>
               <el-date-picker
                  type="datetimerange"
                  align="right"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00', '08:00:00']">
                </el-date-picker>
          </el-form-item>
          <el-form-item label="上传图片" required>
            <el-col :span="24">
            <el-upload
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                >
                 <img v-if="imageUrl" :src="imageUrl" class="avatar">
                 <div v-else>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
              </el-col>
          </el-form-item>
          <el-form-item label="活动人数">
              <el-input></el-input>
          </el-form-item>
           <el-form-item label="活动类型">
              <el-radio-group>
                <el-radio border label="迎新晚会"></el-radio>
                <el-radio border label="英语演讲"></el-radio>
                <el-radio border label="广场活动"></el-radio>
                <el-radio border label="个人活动"></el-radio>
                <el-radio border label="团队活动"></el-radio>
                <el-radio border label="校办活动"></el-radio>
                <el-radio border label="系办活动"></el-radio>
                <el-radio border label="餐厅活动"></el-radio>
              </el-radio-group>
            </el-form-item>
          
          <el-form-item label="详细信息" required class="active-detail">
            <UE :defaultMsg=defaultMsg :config="config" ref="ue"></UE>
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
import UE from '../component/ue';
export default {
  components: {UE},
  data() {
    return {
       defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth: null,
          initialFrameHeight:300
      },
      imageUrl:"",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
  }
};
</script>

<style>
@import "../../style/base/base_xss.css";
.publish-active {
  margin-top: 40px;
  background-color: #f1f1f1;
}

.event-create-label-long {
  width: 114px;
}

.event-create-label {
  font-size: 16px;
  position: relative;
  margin-left: 30px;
  padding-top: 13px;
  padding-bottom: 9px;
  text-align: center;
  background: #d02d48;
  color: #ffffff;
}
.active-form {
  margin-top: 30px;
  padding-right: 30px;
  padding-left: 30px;
}

.active-form .el-upload-dragger{
  width: 472px;
  height: 280px;
}

.active-form .el-upload-dragger .el-icon-upload{
font-size: 100px;
line-height: 112px;
}

.active-form .el-radio.is-bordered {
    padding: 12px 14px 0 10px;
    }

.active-detail .el-form-item__content{
      line-height: 14px;
    }
</style>
