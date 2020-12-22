<template>
  <el-table
    :data="tableData3"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="type"
      label="操作员类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="operatorId"
      label="操作员ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="operating"
      label="具体操作"
      width="180">
    </el-table-column>
    <el-table-column
      prop="module"
      label="操作模块"
      width="180">
    </el-table-column>
    <el-table-column
      prop="result"
      label="操作结果"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="操作时间">
     </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: []
      }
    },
    created:function(){
      var url = this.axios.urls.Admin_Log;
        console.log(url);
        debugger;
       this.axios.post(url).then(resp=>{
         console.log(resp.data.code);
         var c=resp.data.code;
         this.tableData3=resp.data.result;
        if(c>=0){

        }
          console.log(resp);


       }).catch(resp=>{
           console.log(resp);
            this.$message.error('登陆失败');
       });
      console.log(123);
    }
  }
</script>
