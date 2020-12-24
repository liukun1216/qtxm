<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="店铺名">
      <el-input v-model="form.shopname"></el-input>
    </el-form-item>
    <!-- <el-form-item label="店铺名"> -->
    店铺地址:
      <el-select v-model="form.shopaddress" filterable placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    <!-- </el-form-item> -->
    </el-select>
    </el-form-item>
    <el-form-item label="店铺信息">
      <el-input type="textarea" v-model="form.shopinfo"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>


<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '湖南',
          label: '湖南'
        }, {
          value: '广东',
          label: '广东'
        }, {
          value: '上海',
          label: '上海'
        }, {
          value: '山西',
          label: '山西'
        }, {
          value: '北京',
          label: '北京'
        }],
        value: '',
        form: {
          userid: '2',
          shopname: '',
          shopinfo: '',
          shopimg: '',
          shopaddress: ''
        }
      }
    },
    methods: {
      onSubmit() {
        var url = this.axios.urls.AddShop;
          console.log(url);
         this.axios.post(url,this.form).then(resp=>{
           var code=resp.data.code;
          if(code>0){
              this.$message.success('申请成功');
          }
            console.log(resp);


         }).catch(resp=>{
             console.log(resp);
              this.$message.error('申请失败');
         });
      }
    }
  }
</script>
