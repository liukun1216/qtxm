<template>
  <div>

    <div style="margin-left: 400px;">

      <el-table :data="tableData3" height="500" border style="width:1000px">
        <el-table-column prop="id" label="店铺编号" width="180">
        </el-table-column>
        <el-table-column prop="userid" label="所属用户" width="180">
        </el-table-column>
        <el-table-column prop="shopname" label="店铺名称" width="180">
        </el-table-column>
        <el-table-column prop="shopaddress" label="店铺地址" width="180">
        </el-table-column>
        <el-table-column prop="shopstatus" label="店铺状态" width="180">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button @click="onSubmit(scope.row)">查看店铺页面</el-button>
            <el-button @click="shtg(scope.row)">确认通过</el-button>
            <el-button @click="shbh(scope.row)">未通过</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: []
      }
    },
    methods: {

      onSubmit: function(row) {
        var data = {
          shopId: row.id
        }
        var url = this.axios.urls.Shop;
        this.axios.post(url, data).then(resp => {
          this.$router.push({
            path: "/Shop",
            query: {
              id: resp.data.result.id,
              shopname: resp.data.result.shopname,
              shopinfo: resp.data.result.shopinfo,
              shopimg: resp.data.result.shopimg,
              shopaddress: resp.data.result.shopaddress,
              shopstatus: resp.data.result.shopstatus,
            },
          });
          console.log(resp);
        }).catch(resp => {

        });
      },
      shtg: function(row) {
        var data = {
          id: row.id,
          shopstatus:'正常',
        }
        var url = this.axios.urls.Admin_ShopDudit;
        this.axios.post(url, data).then(resp => {

          console.log(resp);
          this.search();
        }).catch(resp => {

        });
      },
      shbh:function(row) {
        var data = {
          id: row.id,
          shopstatus:'审核未通过',
        }
        var url = this.axios.urls.Admin_ShopDudit;
          this.axios.post(url, data).then(resp => {

           console.log(resp);
           this.search();
          }).catch(resp => {

          });
        },
        search:function(){
          var data = {
              shopstatus:'待审核',
            }
            var url = this.axios.urls.Admin_Shop;
            console.log(url);
            this.axios.post(url,data).then(resp => {
              console.log(resp.data.code);
              var c = resp.data.code;
              this.tableData3 = resp.data.result;
              if (c >= 0) {

              }
              console.log(resp);


            }).catch(resp => {
              console.log(resp);
              this.$message.error('登陆失败');
            });
            console.log(123);
          }

    },
    created: function() {
      var data = {
        shopstatus:'待审核',
      }
      var url = this.axios.urls.Admin_Shop;
      console.log(url);
      this.axios.post(url,data).then(resp => {
        console.log(resp.data.code);
        var c = resp.data.code;
        this.tableData3 = resp.data.result;
        if (c >= 0) {

        }
        console.log(resp);


      }).catch(resp => {
        console.log(resp);
        this.$message.error('登陆失败');
      });
      console.log(123);
    }
  }
</script>
