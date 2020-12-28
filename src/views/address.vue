<template>
  <div>
    <el-header>
      <top></top>
    </el-header>
    <div align="center">
      <el-form ref="form" :model="form" label-width="100px" :rules="rules">
        <el-form-item label="地址" prop="location" style="width: 400px;">
          <el-cascader :v-model="form.location" :options="options" ref="cascaderDay" @change="abc" style="width: 300px;"
            plplaceholder="请选择/省/市/区">
          </el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address" style="width: 400px;">
          <el-input v-model="form.address" placeholder="请输入详细地址信息,如道路、门牌号、小区、楼栋号、单元信息"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名" prop="addressname" style="width: 400px;">
          <el-input v-model="form.addressname" placeholder="长度不超过25个字符"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone" style="width: 400px;">
          <el-input v-model="form.phone" placeholder="电话号码、手机号码必须填一项"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" v-if="a" @click="Addaddress">增加</el-button>
          <el-button type="primary" v-if="b" @click="updaddress">修改</el-button>
          <el-button @click="out">取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <el-table :data="listaddress" style="width: 100%">
        <el-table-column prop="addressname" label="收货人" width="180">
        </el-table-column>
        <el-table-column prop="location" label="所在地区" width="180">
        </el-table-column>
        <el-table-column prop="address" label="详细地址">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="180">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-link :underline="false" @click="getting(scope.row)">修改</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false" @click="deladdress(scope.row)">删除</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="stutas" width="180">
          <i :calss="moren" el-icon-check></i>
          <el-link :underline="false" @click="Default">设为默认地址</el-link>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
  import top from '@/components/top.vue'
  import {
    provinceAndCityData,
    regionData,
    CodeToText
  } from 'element-china-area-data'
  export default {
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
        area:{
          zipCode:''
        },

        a: true,
        b: false,
        moren: '',
        listaddress: [],
        form: {
          id: '',
          userid: '',
          address: 'aa',
          addressname: 'aaa',
          location: '',
          phone: '15367262085'

        },
        options: regionData,
        rules: {

          phone: [{
            required: true,
            validator: checkphone,
            trigger: "blur"
          }],

          address: [{
            required: true,
            message: '请输入详细地址',
            trigger: 'change'
          }],
          addressname: [{
            required: true,
            message: '请输入收货人姓名',
            trigger: 'change'
          }, {
            max: 25,
            message: '长度在25个字符之内',
            trigger: 'blur'
          }],
        }

      }
    },
    components: { //2.注册组件
      top
    },
    methods: {
      toindex: function() {
        this.$router.push({
          path: "/Idex",
          query: {
            username: this.$route.query.username,
            account: this.$route.query.account
          }
        });
      },
      out: function() {
        this.a = true;
        this.b = false;
        this.resetForm();
      },
      //调用修改方法修改获取的收货地址
      updaddress: function() {
        this.$refs["form"].validate((valid) => {
          if (valid) {
           var url = this.axios.urls.SYS_ADDRESS_UPD_ID;
           this.axios.post(url, this.form).then(resp => {
             console.log(resp);
             this.a = true;
             this.b = false;
             this.resetForm();
             this.listbyaccount();
           }).catch(resp => {
             console.log(resp);
           });
          }else{
            return false;
          }
        });
      },
      //获取要修改的地址数据给input框赋值
      getting: function(row) {
        this.form.id = row.id;
        this.form.userid = row.userid;
        this.form.address = row.address;
        this.form.addressname = row.addressname;
        this.form.location = row.location;
        this.form.phone = row.phone;
        this.a = false;
        this.b = true;

      },
      //通过地址表id删除地址
      deladdress: function(row) {
        var url = this.axios.urls.SYS_ADDRESS_DEL_ID;
        var data = {
          id: row.id
        }
        this.axios.post(url, data).then(resp => {
          console.log(resp);
          this.$message({
            message: '地址删除成功',
            type: 'success'
          });

          this.listbyaccount();
        }).catch(resp => {

        });
      },
      //修改地址默认状态
      Default: function() {

      },
      //新增收货地址
      Addaddress: function() {

        this.$refs["form"].validate((valid) => {
          if (valid) {
            var url = this.axios.urls.SYS_ADDRESS_ADD;
            debugger
            console.log(this.form.location);
            this.axios.post(url, this.form).then(resp => {
              this.resetForm();
              this.$message({
                message: '地址新增成功',
                type: 'success'
              });
              this.listbyaccount();
            }).catch(resp => {
              console.log(resp);
            });
          }else{
            return false;
          }
        });
      },

      //通过用户账号查询用户获得用户id
      listbyaccount: function() {
        var data = {
          account: this.$route.query.account
        }
        var url = this.axios.urls.SYS_ACCOUONT_PHONE;
        this.axios.post(url, data).then(resp => {
          this.form.userid = resp.data.result.id;
          this.listByuserid();
          console.log(resp);
        }).catch(resp => {
          console.log(resp);
        });
      },
      //通过用户id查询收货地址
      listByuserid: function() {
        var data = {
          userid: this.form.userid
        }
        var url = this.axios.urls.SYS_ADDRESS_LIST_USERID;
        this.axios.post(url, data).then(resp => {
          console.log(resp.data.result);
          this.listaddress = resp.data.result;
        }).catch(resp => {
          console.log(resp);
        });
      },
      //级联下拉菜单获取收货地区
      listbycode:function(){
        var url = this.axios.urls.SYS_AREA_LISTBYCODE;
        this.axios.post(url,this.area).then(resp=>{
          this.form.location = resp.data.result.mergerName;
           console.log(this.form.location);
        }).catch(resp=>{

        });
      },
      abc: function(val) {
        let num = val.length;
        let code = val[num-1];
        this.area.zipCode = code;
        this.listbycode();

        // var labelList = [];
        // var checkLabels = this.$refs['cascaderDay'].getCheckedNodes()[0].pathLabels;
        // checkLabels.forEach(function(val) {
        //   this.form.location = val[0];
        // })


        console.log(val);
      },
      //表单清空
      resetForm: function() {
        this.$refs["form"].resetFields();
      },
      isCellPhone(val) {
        if (!/^1(3|4|5|6|7|8)\d{9}$/.test(val)) {
          return false;
        } else {
          return true;
        }
      }
    },
    //初始化数据
    created: function() {
      this.listbyaccount();
      this.selectedOptions = ["440000", "440100"];
    }
  }
</script>

<style>
</style>
