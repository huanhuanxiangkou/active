<template>
<div class="person">
   <div class="middle ">
       <div class="form">
         <el-form ref="form" :model="form" label-width="100px">
            <el-form-item>
                <!-- <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload> -->
             </el-form-item>
            <el-form-item label="用户名：">
              <el-input v-model="form.name" disabled></el-input>
              </el-form-item>
              <el-form-item label="性别：">     
                      <el-radio v-model="form.sex" label="1">男</el-radio>
                      <el-radio v-model="form.sex" label="2">女</el-radio>
             </el-form-item>
               <el-form-item label="出生日期：">
                  <el-date-picker
                  v-model="form.birthday"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-mm-dd hh:mm:ss"
                  >
                </el-date-picker>
             </el-form-item>
               <el-form-item label="自我介绍：">
              <el-input v-model="form.card"></el-input>
              </el-form-item>
             <el-form-item label="手机号码：">
              <el-input v-model="form.phone"></el-input>
              </el-form-item>
               <el-form-item label="邮箱：">
              <el-input v-model="form.email"></el-input>
              </el-form-item>
               <el-form-item >
                <el-button @click="updateUser()">确认修改</el-button>
              </el-form-item>
            </el-form>

        
       </div>
   </div>
   </div>
</template>
<script>
import { getUserById, userRegister } from "@/api/getInfo";
export default {
  data() {
    return {
      form: {
        id: 1,
        name: "",
        birthday: "", //1
        phone: "", //2
        email: "", //3
        card: "",
        sex: "1"
      }
    };
  },
  mounted() {
    let userId = parseInt(localStorage.getItem("ms_userid"));
    getUserById(userId)
      .then(res => {
        if (res.data.code == 200) {
          this.form = res.data.data;
        }
      })
      .catch();
  },
  methods: {
    updateUser() {
      this.form.date = Date.parse(new Date(this.form.date));
      userRegister(this.form)
        .then(res => {
          if (res.data.code == 200) {
            this.$message({
              showClose: true,
              message: "信息已更新",
              type: "success"
            });
          }
        })
        .catch();
    }
  }
};
</script>
<style>
.person .middle {
  margin: 0 auto;
  width: 700px;
  background: #ddd;
}
.person .avatar-uploader .el-upload {
  border: 1px dashed #d02d48;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.person .avatar-uploader {
  text-align: center;
}
.person .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.person .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.person .avatar {
  width: 80px;
  height: 80px;
  display: block;
}
.person .form {
  /* text-align: center; */
  margin: 60px auto;
  padding: 20px 0;
  width: 500px;
}
</style>
