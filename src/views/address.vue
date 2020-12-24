<template>
  <div>
    <el-header>
      <top></top>
    </el-header>
    <div align="center" >
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="地址" prop="location" style="width: 400px;">
          <el-cascader :v-model="form.location" :options="options" ref="cascaderDay" @change="abc" style="width: 300px;">
          </el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address" style="width: 400px;">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名" prop="addressname" style="width: 400px;">
          <el-input v-model="form.addressname"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone" style="width: 400px;">
          <el-input v-model="form.phone"></el-input>
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
  import {provinceAndCityData, regionData, CodeToText} from 'element-china-area-data'
  export default {
    data() {
      return {
        a:true,
        b:false,
        moren: '',
        listaddress: [],
        form: {
          id:'',
          userid: '',
          address: '',
          addressname: '',
          location: '',
          phone: ''

        },
        options: regionData,


      }
    },
    components: { //2.注册组件
    	top
    },
    methods: {
      toindex:function(){
        this.$router.push({
          path:"/Idex",
          query:{
            username:this.$route.query.username,
            account:this.$route.query.account
          }
        });
      },
      out:function(){
        this.a=true;
        this.b=false;
        this.resetForm();
      },
      //调用修改方法修改获取的收货地址
      updaddress:function(){

       var url= this.axios.urls.SYS_ADDRESS_UPD_ID;
        this.axios.post(url,this.form).then(resp=>{
          console.log(resp);
          this.a=true;
          this.b=false;
          this.resetForm();
        }).catch(resp=>{
          console.log(resp);
        });
      },
      //获取要修改的地址数据给input框赋值
      getting:function(row){
        this.form.id = row.id;
        this.form.userid = row.userid;
        this.form.address = row.address;
        this.form.addressname = row.addressname;
        this.form.location = row.location;
        this.form. phone = row.phone;
        this.a= false;
        this.b= true;

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
        var url = this.axios.urls.SYS_ADDRESS_ADD;
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
      //级连下拉菜单获取收货地区
      abc: function(val) {
        var labelList = [];
        var checkLabels = this.$refs['cascaderDay'].getCheckedNodes()[0].pathLabels;
        checkLabels.forEach(function(item) {
          if (!item.hasChildren) {
            labelList.push(item.label);
          }
        })
        // this.form.dayWorkerLocation = nowData.join(",");
        // this.form.dayWorker = labelList.join(",");
        this.form.location = labelList.join(",");
        console.log(val);
      },
      //表单清空
      resetForm: function() {
        this.$refs["form"].resetFields();
      }
    },
    //初始化数据
    created: function() {
      this.listbyaccount();
      this.selectedOptions=["440000","440100"];
    }
  }
</script>

<style>
</style>
