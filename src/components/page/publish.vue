<template>
    <div class="w1080 publish-active">
      <div class="event-create-label event-create-label-long">填写基本信息</div>
      <div class="active-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          <el-form-item label="活动区域" prop="address">
               <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>
          <el-form-item label="活动时间"  required>
               <!-- <div class="demonstration">值：{{ ruleForm.dateStart }}</div> -->
               <span>开始时间：</span>
                <el-date-picker
                  v-model="ruleForm.dateStart"
                  type="datetime"
                  placeholder="选择日期时间"
                  value-format="yyyy-mm-dd hh:mi:ss"
                  prop='dataStart '
                  >
                </el-date-picker>
                 <!-- <div class="demonstration">值：{{ ruleForm.dateEnd }}</div> -->
                 <span>结束日期：</span>
                <el-date-picker
                  v-model="ruleForm.dateEnd"
                  type="datetime"
                  placeholder="选择日期时间"
                  value-format="yyyy-mm-dd hh:mi:ss"
                  >
                </el-date-picker>
          </el-form-item>
          <el-form-item label="上传图片" required>
            <el-col :span="24">
              <P>{{ruleForm.photoUrl}}</P>
              <el-upload
                class="upload-demo"
                drag
                action="http://127.0.0.1:5000/upload/picture"
                multiple
                :on-success="handleAvatarSuccess">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
              </el-col>
          </el-form-item>
          <el-form-item label="活动人数"  v-model="ruleForm.count">
              <el-input  v-model="ruleForm.count"></el-input>
          </el-form-item>
           <el-form-item label="活动类型" v-model="ruleForm.list">
             <!-- <P>{{ ruleForm.list}}</P> -->
              <el-checkbox-group 
                v-model="ruleForm.list"
                :min="1"
                :max="2">
                <el-checkbox v-for="city in ruleForm.cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          
          <el-form-item label="详细信息" required class="active-detail">
            <quill-editor
                class="quill" 
                v-model="ruleForm.detail" 
                ref="myQuillEditor"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                >
            </quill-editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即发布</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
// :options="editorOption"
import UE from "../component/ue";
import { userpublish } from "@/api/getInfo";
import vueQuillEditor from "./edit.vue";
const cityOptions = [
  "兴趣活动",
  "比赛活动",
  "节日活动",
  "个人活动",
  "团队活动",
  "校办活动",
  "系办活动",
  "学习活动"
];
export default {
  components: { UE },
  data() {
    return {
      defaultMsg: "这里是UE测试",
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 300,
        toolbars: [
          ["fullscreen", "source", "undo", "redo"],
          [
            "bold",
            "italic",
            "underline",
            "fontborder",
            "strikethrough",
            "superscript",
            "subscript",
            "removeformat",
            "formatmatch",
            "autotypeset",
            "blockquote",
            "fontfamily",
            "fontsize",
            "pasteplain",
            "|",
            "simpleupload",
            "inserttable",
            "forecolor",
            "backcolor",
            "insertorderedlist",
            "insertunorderedlist",
            "selectall",
            "cleardoc"
          ]
        ]
      },
      // imageUrl:"",
      ruleForm: {
        name: "",
        address: "",
        dateStart: "",
        dateEnd: "",
        photoUrl: "",
        resource: "",
        detail: "",
        count: 50,
        user_id: "",
        list: ["比赛活动", "团队活动"],
        cities: cityOptions
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 2,
            max: 200,
            message: "长度在 2 到 200 个字符",
            trigger: "blur"
          }
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
      if (res.code === 200) {
        this.ruleForm.photoUrl = res.data.url;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.ruleForm.user_id = parseInt(localStorage.getItem("ms_userid"));
          userpublish(this.ruleForm)
            .then(res => {
              if (res.data.code == 200) {
                this.$confirm("发布成功?", "提示", {
                  confirmButtonText: "发布",
                  cancelButtonText: "返回首页",
                  type: "warning",
                  center: true,
                  callback: action => {
                    if (action == "confirm") {
                      this.resetForm("ruleForm");
                    } else {
                      this.$router.push("/");
                    }
                  }
                });
              }

              // console.log(res);
            })
            .catch();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
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

.active-form .el-upload-dragger {
  width: 472px;
  height: 280px;
}

.active-form .el-upload-dragger .el-icon-upload {
  font-size: 100px;
  line-height: 112px;
}

.active-form .el-radio.is-bordered {
  padding: 12px 14px 0 10px;
}

.active-detail .el-form-item__content {
  line-height: 14px;
}
</style>
