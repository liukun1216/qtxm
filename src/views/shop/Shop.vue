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
    				<img v-bind:src="v.src" alt="">
    				<h4>{{v.des}}</h4>
    				<p>{{v.price}}</p>
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
        list: [{
            src: 'images/1.jpg',
            des: '这是第一个描述',
            price: 198
          },
          {
            src: 'images/2.jpg',
            des: '这是第二个描述',
            price: 198
          },
          {
            src: 'images/3.jpg',
            des: '这是第三个描述',
            price: 211
          },
          {
            src: 'images/1.jpg',
            des: '这是第一个描述',
            price: 198
          },
          {
            src: 'images/3.jpg',
            des: '这是第二个描述',
            price: 112
          },
          {
            src: 'images/3.jpg',
            des: '这是第三个描述',
            price: 423
          }
        ]

      }
    },
    created: function() {
      //     var url = this.axios.urls.Shop;
      //      this.axios.post(url).then(resp=>{
      //        console.log(resp.data.code);
      //        var c=resp.data.code;
      //        this.tableData3=resp.data.result;
      //       if(c>=0){

      //       }
      //         console.log(resp);


      //      }).catch(resp=>{
      //          console.log(resp);
      //           this.$message.error('登陆失败');
      //      });
      //     console.log(123);
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
