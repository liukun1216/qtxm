<template>
  <div>
    <el-header>
      <top></top>
    </el-header>
    </el-container>
    <el-link target="_blank">个人信息</el-link>
    <div style="margin-left: 600px;">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col>
            <el-form-item label="id" v-if="false">
              <el-input v-model="form.id"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col span="8">
            <el-form-item label="昵称">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col span="8">
            <el-form-item label="账号">
              <el-input v-model="form.account" readonly></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col span="8">
            <el-form-item label="手机号">
              <el-input v-model="form.phone" readonly></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col span="8">
            <el-form-item label="性别">
              <el-radio v-model="form.sex" label="1">男</el-radio>
              <el-radio v-model="form.sex" label="2">女</el-radio>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item style="margin-left: -700px;">
          <el-button type="primary" @click="upduser">保存</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
   import top from '@/components/top.vue'
  export default {
    data() {
      return {
        form: {
          id: '',
          account: this.$route.query.account,
          username: this.$route.query.username,
          sex: '',
          phone: '',
        }
      }
    },
    components: { //2.注册组件
    	top
    },
    methods: {
      upduser: function() {
        var url = this.axios.urls.SYS_USER_RS_AD;
        this.axios.post(url, this.form).then(resp => {
          this.$router.push({
            path: "/Personal",
            query: {
              account: this.form.account,
              username: this.form.username
            }
          })
        }).catch(resp => {
          console.log(resp);
        });
      },
      listbyaccount: function() {
        var url = this.axios.urls.SYS_ACCOUONT_PHONE;
        this.axios.post(url, this.form).then(resp => {
          this.form.id = resp.data.result.id;
          this.form.sex = resp.data.result.sex;
          this.form.phone = resp.data.result.phone;
        }).catch(resp => {
          console.log(resp);
        });
      }

    },
    created: function() {
      this.listbyaccount()
    }

  }
</script>

<style>
</style>
