<template>
  <div>
    <!-- //表格 -->
    <div>
      <el-table :data="tableList" style="width: 100%;" :border="true" max-height="550" @cell-click="onSubmit">
        <el-table-column prop="id" label="订单编号" min-width="30" align="center"></el-table-column>
        <el-table-column prop="userId" label="用户编号" min-width="60"></el-table-column>
        <el-table-column prop="status" label="状态" min-width="50"></el-table-column>
        <el-table-column prop="commodityQuantity" label="商品数量" min-width="30"></el-table-column>
        <el-table-column prop="totalAmount" label="商品总价" min-width="30"></el-table-column>
        <el-table-column prop="waybillNumber" label="运单号" min-width="30"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" min-width="30"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" min-width="30"></el-table-column>
        <el-table-column label="操作" min-width="70">
          <template slot-scope="scope">
            <el-button @click="handleDel(scope.row)" size="small" type="danger" icon="el-icon-delete">取消订单</el-button>
            <!-- <el-button @click="handleEdit(scope.row)" class="el-icon-edit" type="text" size="small">修改</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--模态框 -->
    <div>
      <el-dialog :title="titt" :visible.sync="dialogFormVisible" label-width="10px" @close="handleCole">
        <el-form :model="salChanceFrom" ref="salChanceFrom">
          <div align="left">
            <el-form-item label="状态" label-width="70px" prop="status">
              <el-select v-model="salChanceFrom.status" placeholder="请选择状态">
                <el-option v-for="item in optiona" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div align="left">
            <el-form-item label="商品数量" label-width="70px" prop="commodityQuantity">
              <el-select v-model="salChanceFrom.commodityQuantity">
                <el-option v-for="item in optiona" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div align="left">
            <el-form-item label="商品总价" label-width="70px" prop="totalAmount">
              <el-select v-model="salChanceFrom.totalAmount">
                <el-option v-for="item in optiona" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div align="left">
            <el-form-item label="运单号" label-width="70px" prop="waybillNumber">
              <el-select v-model="salChanceFrom.waybillNumber">
                <el-option v-for="item in optiona" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

        </el-form>

      </el-dialog>

    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        optiona: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '5'
        }],
        optionsss: [{
          value: '是',
          label: '是'
        }, {
          value: '否',
          label: '否'
        }],

        tableList: [],
        total: '',
        page: '',
        rows: '',
        readonly: false,
        dictIsEditable: false,
        id: '',
        salChanceFrom: {
          status: '',
          commodityQuantity: '',
          totalAmount: '',
          waybillNumber: '',
        },
        dialogFormVisible: false,
        titt: '',
      }
    },

    methods: {
      resetFrom: function() {
        this.$refs["salChanceFrom"].resetFields();
      },
      //查询
      onSubmit: function() {
        var url = this.axios.urls.COMMDI_CHASYOU;
        console.log(url);
        this.axios.post(url, this.form).then(resp => {
          console.log(resp);
          this.tableList = resp.data.result;
        }).catch(resp => {
          console.log(resp);
        });



      },
      //删除
      handleDel: function(row) {
        var data = {
          id: row.id
        }
        var url = this.axios.urls.COMMDI_SHANCHU;
        this.axios.post(url, data).then(resp => {
          this.$message({
            message: '取消订单',
            type: 'success',

          });
          this.onSubmit();
        }).catch(resp => {
          console.log("删除失败");
        });
      },
      //关闭模态框
      handleCole: function() {
        this.resetFrom();
      },
    },

    created: function() {
      this.onSubmit();
    }

  }
</script>

<style>
</style>
