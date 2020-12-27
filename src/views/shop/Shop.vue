<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="14">
        <div> <span>雨纷纷</span>
          <el-divider direction="vertical"></el-divider>
          <span>{{this.$route.query.shopname}}</span>
          <el-divider direction="vertical"></el-divider>
          <span>草木深</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-form :inline="true" class="user-search">
            <el-input placeholder="搜索" v-model="input3" class="input-with-select" style="width: 200px; margin-right: 900px;">
              <el-button slot="append" icon="el-icon-search" @click></el-button>
            </el-input>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <div class="" id="box">
      <ul>
        <li v-for="v in list">
          <div>

          <img v-bind:src="v.image" alt="">
          <h4><el-link :underline="false" @click="spxq(v.id)">{{v.name}}</el-link> </h4>
          <p>{{v.price}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        tableData3: [],
        input1: '',
        input2: '',
        input3: '',
        select: '',
        list: []

      }
    },
    methods:{
      spxq:function(id){
         var data = {
              id:id,
              }
              var url = this.axios.urls.commodity;
              this.axios.post(url,data).then(resp => {
                this.list=resp.data.result;
                console.log(resp);
              }).catch(resp => {
                console.log(resp);
              });
        console.log(id);
      }

    }   ,
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
	},  onSubmit: function(row) {
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
    created: function() {
      var data = {
        shopId: this.$route.query.id,
      }
      var url = this.axios.urls.ShopCommodity;
      this.axios.post(url, data).then(resp => {
        this.list=resp.data.result;
        console.log(resp);




      }).catch(resp => {
        console.log(resp);
      });
      console.log(123);
    }
  }
</script>

<style>
  .el-select .el-input {
    width: 130px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  #box ul {
    display: flex;
    flex-wrap: wrap;
  }

  #box li {
    padding: 3px;
    list-style: none;
    margin-right: 15px;
    border: 1px solid #eee;
  }

  #box img {
    width: 200px;
    height: 150px;
  }
</style>
