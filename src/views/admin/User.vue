<template>
  <div>
    <div>
      <el-table :data="tableList" style="width: 100%;" :border="true" max-height="550">
        <el-table-column prop="id" label="编号" min-width="30" align="center"></el-table-column>
        <el-table-column prop="account" label="账号" min-width="30"></el-table-column>
        <el-table-column prop="username" label="用户名" min-width="30"></el-table-column>
        <el-table-column prop="realname" label="真实姓名" min-width="30"></el-table-column>
        <el-table-column prop="phone" label="电话" min-width="30"></el-table-column>
        <el-table-column prop="emali" label="邮箱" min-width="30"></el-table-column>
        <el-table-column prop="address" label="地址" min-width="30"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" min-width="40"></el-table-column>
         <el-table-column prop="lastLogin" label="最后登入时间" min-width="40"></el-table-column>
        <el-table-column prop="status" label="状态" min-width="30"></el-table-column>
        <el-table-column label="操作" min-width="70">
          <template slot-scope="scope">
            <el-button @click="jd(scope.row)" class="el-icon-edit" type="text" size="small" :disabled="scope.row.status=='正常'">解冻</el-button>
            <el-button @click="dj(scope.row)" class="el-icon-edit" type="text" size="small" :disabled="scope.row.status=='冻结'">冻结</el-button>
          </template>
        </el-table-column>
      </el-table>


    </div>



  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        id: '',
        tableList: [],

        salChanceFrom: {

        },
      }
    },
    methods: {
      search: function() {
        let data = {
          rows: this.rows,
          page: this.page
        }
        var url = this.axios.urls.Admin_User;
        this.axios.post(url, data).then(resp => {
          console.log(resp);
          this.tableList = resp.data.result;
          console.log(this.tableList);
          this.total = resp.data.total;
        }).catch(resp => {

        });
      },
      dj: function(row) {
        var data = {
          id: row.id,
          status:'冻结'
        }
        var url = this.axios.urls.Admin_updateUser;
        this.axios.post(url, data).then(resp => {
          this.$message({
            message: '操作成功',
            type: 'success'
          });
          this.search();
        }).create(resp => {

        });
      },
      jd: function(row) {
        var data = {
          id: row.id,
          status:'正常'
        }
        var url = this.axios.urls.Admin_updateUser;
        this.axios.post(url, data).then(resp => {
          this.$message({
            message: '操作成功',
            type: 'success'
          });
          this.search();
        }).create(resp => {

        });
      },


    },
    created: function() {
      this.search();
    },
  }
</script>

<style>
</style>
