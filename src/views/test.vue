<template>
  <div>
    <div>
      <el-table :data="tableList" style="width: 100%;" :border="true" max-height="550">
        <el-table-column prop="id" label="编号" min-width="30" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" min-width="30"></el-table-column>
        <el-table-column prop="shopid" label="所属店铺" min-width="30"></el-table-column>
        <el-table-column prop="type_id" label="种类编号" min-width="40"></el-table-column>
        <el-table-column prop="price" label="价格" min-width="30"></el-table-column>
        <el-table-column prop="stock" label="库存" min-width="30"></el-table-column>
        <el-table-column prop="image" label="商品图片" min-width="40"></el-table-column>
        <!--   <el-table-column prop="imgPath" label="图片" sortable width="180">
              <template slot-scope="scope">
                <img  :src="scope.row.url" alt="" style="width: 50px;height: 50px">
              </template>
            </el-table-column> -->
        <el-table-column prop="introduction" label="简介" min-width="30"></el-table-column>
        <el-table-column prop="detailed_introduction" label="详细介绍" min-width="40"></el-table-column>
        <el-table-column prop="sales_volume" label="销量" min-width="30"></el-table-column>
        <el-table-column prop="create_time" label="创建时间" min-width="40"></el-table-column>
        <el-table-column prop="status" label="状态" min-width="30"></el-table-column>



        <el-table-column label="操作" min-width="70">
          <template slot-scope="scope">
            <el-button @click="xj(scope.row)" class="el-icon-edit" type="text" size="small" :disabled="scope.row.status=='下架'">下架</el-button>
            <el-button @click="sj(scope.row)" class="el-icon-edit" type="text" size="small" :disabled="scope.row.status=='正常'">上架</el-button>
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
        var url = this.axios.urls.COMMODITY_LIST;
        this.axios.post(url, data).then(resp => {
          console.log(resp);
          this.tableList = resp.data.result;
          console.log(this.tableList);
          this.total = resp.data.total;
        }).catch(resp => {

        });
      },
      xj: function(row) {
        var data = {
          id: row.id,
          status:'下架'
        }
        var url = this.axios.urls.COMMODITY_ADD_UP;
        this.axios.post(url, data).then(resp => {
          this.$message({
            message: '操作成功',
            type: 'success'
          });
          this.search();
        }).create(resp => {

        });
      },
      sj: function(row) {
        var data = {
          id: row.id,
          status:'正常'
        }
        var url = this.axios.urls.COMMODITY_ADD_UP;
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
