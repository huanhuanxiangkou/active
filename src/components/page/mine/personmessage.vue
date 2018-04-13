<template>
   <div class="middle ">
       <div class="form">
         <el-form ref="form" :model="form" label-width="100px">
            <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
             </el-form-item>
            <el-form-item label="昵称：">
              <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="性别：">     
                      <el-radio v-model="radio" label="1">男</el-radio>
                      <el-radio v-model="radio" label="2">女</el-radio>
             </el-form-item>
               <el-form-item label="出生日期：">
                   <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
             </el-form-item>
             <el-form-item label="手机号码：">
              <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-form>

        
       </div>
   </div>
</template>
<script>
export default {
  data(){
    return{
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
       imageUrl: '',
       radio: '1',
        value1: '',
       
      };
  },
  methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }

}
</script>
<style>
.middle{
  margin:  0 auto ;
  width:700px;
  background: #ddd;
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d02d48;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader{
    text-align: center;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
  .form{
    /* text-align: center; */
    margin: 60px  auto;
    padding:  20px 0;
    width: 500px;
  }
</style>
