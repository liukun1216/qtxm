<template>
  <div>
    <el-header>
      <top></top>
    </el-header>

    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="commodityid" label="商品信息" width="400">
        </el-table-column>
        <el-table-column prop="amount" label="数量" width="300">

        </el-table-column>
        <el-table-column prop="price" label="金额" width="500">
        </el-table-column>
        <el-table-column prop="address" label="操作" width="300">
          <template slot-scope="scope">
            <el-link :underline="false" @click="delshop(scope.row)">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
      <el-link :underline="false" style="margin-left: 1000px;">总价:{{this.zj}}</el-link>
      <el-button type="primary" @click="alipaySum">结算</el-button>
    </div>

  </div>
</template>

<script>
  import top from '@/components/top.vue'
  export default {
    data() {
      return {
        zj: 0,
        tableData: {}

      };
    },
    components: { //2.注册组件
      top
    },
    methods: {
      alipaySum:function(){

        window.open("http://localhost:8080/ssmht/alipaySum?payables="+this.zj,"_blank");
       var  data={
       payables:this.zj,
       }
        var url = this.axios.urls.SYS_SHOPPING_JS;
        this.axios.post(url,data).then(resp=>{

        }).catch(resp=>{

        });
      },

      delshop: function(row) {
        var data = {
          id: row.id
        }
        var url = this.axios.urls.SYS_SHOPPING_DEL;
        this.axios.post(url, data).then(resp => {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
           this.getcar();
        }).catch(resp => {

        });

      },
      getcar: function() {
        var data = {
          uid: sessionStorage.getItem("userid")
        }
        var url = this.axios.urls.SYS_SHOPPING_LIST;
        this.axios.post(url, data).then(resp => {
          console.log(resp.data.code);
          this.tableData = resp.data.result;

          this.zj = resp.data.code;
          console.log(this.tableData);
        }).catch(resp => {

        });
      }

    },
    created: function() {
      this.getcar();
    }
  }
</script>

<style>
</style>
