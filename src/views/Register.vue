<template>
  <div>
    <div class="dcenter">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="账号" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>

        <el-form-item label="昵称" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item label="真实姓名" prop="realname">
          <el-input v-model="form.realname"></el-input>
        </el-form-item>

        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
         <el-form-item label="地址" prop="address" >
           <el-cascader :v-model="form.address" :options="options" ref="cascaderDay" @change="abc">
           </el-cascader>
         </el-form-item>
        <el-button type="primary" @click="reGister">确定注册</el-button>
        <el-button type="primary" @click="Out">回到主页</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {provinceAndCityData, regionData, CodeToText} from 'element-china-area-data'
  export default {
    name: 'HelloWorld',
    data() {
      var checkphone = (rule, value, callback) => {
        // let phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
        if (value == "") {
          callback(new Error("请输入手机号"));
        } else if (!this.isCellPhone(value)) { //引入methods中封装的检查手机格式的方法
          callback(new Error("请输入正确的手机号!"));
        } else {
          callback();
        }
      };

      return {
        form: {
          account: '', //账号
          username: '', //昵称
          password: '', //密码
          realname: '', //真实姓名
          // idcard:'',//身份证号
          phone: '', //联系电话
          email: '', //邮箱
          // status:'',//状态
          address: '' //地址
        },
       options: regionData,
        rules: {
          account: [{
              required: true,
              message: '请输入账号',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 10,
              message: '长度在 6 到 10 个字符',
              trigger: 'blur'
            }
          ],
          username: [{
              required: true,
              message: '请输入昵称',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 4,
              message: '长度在 2 到 4 个字符',
              trigger: 'blur'
            }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 10,
              message: '长度在 6 到 10 个字符',
              trigger: 'blur'
            }
          ],
          realname: [{
            required: true,
            message: '请输入真实姓名',
            trigger: 'blur'
          }],
          phone: [{
            required: true,
            validator: checkphone,
            trigger: "blur"
          }],
          email: [{
              required: true,
              message: '请输入邮箱地址',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ],
          address: [{
            required: true,
            message: '请选择地址',
            trigger: 'change'
          }, ],
        }
      }
    },
    methods: {
      reGister: function() {
        this.$refs["form"].validate((valid) => {
          if (valid) {
            var url = this.axios.urls.SYS_USER_RS_AD;
            this.axios.post(url, this.form).then(resp => {
              console.log(resp);
              this.$message({
                message: resp.data.message,
                type: 'success'
              });
              this.$router.push({
                path: "/Idex",
                query: {
                  account: this.form.account,
                  username: this.form.username
                }
              })
            }).catch(resp => {
              console.log(resp);
            });

          } else {

            return false;
          }
        });

      },
      abc: function(val) {
        var labelList = [];
        var checkLabels = this.$refs['cascaderDay'].getCheckedNodes();
        checkLabels.forEach(function(item) {
          if (!item.hasChildren) {
            labelList.push(item.label);
          }
        })
        // this.form.dayWorkerLocation = nowData.join(",");
        // this.form.dayWorker = labelList.join(",");
        this.form.address = labelList.join(",");
        console.log(val);
      },
      Out: function() {
        this.$router.push("/Idex");
      },
      RsLogin: function() {
        this.$router.push({
          path: "/Idex",
          query: {
            account: this.form.account,
            username: this.form.username

          }
        })
      },

      isCellPhone(val) {
        if (!/^1(3|4|5|6|7|8)\d{9}$/.test(val)) {
          return false;
        } else {
          return true;
        }
      }
    }

  }
</script>

<style>
  .dcenter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
