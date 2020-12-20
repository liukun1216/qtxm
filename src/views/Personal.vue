<template>
  <div>
    <div style="margin-right: 1100px;">
      <el-link :underline="false" type="primary" target="_blank">全部功能</el-link><br>

      <el-link :underline="false" style="margin-left: 15px;">我的购物车</el-link><br>

      <el-link :underline="false" style="margin-left: 28px;">已买到的宝贝</el-link><br>

      <el-link :underline="false">我的收藏</el-link><br>

      <el-link :underline="false">评价管理</el-link><br>


    </div>
    <div>
      <div style="margin-top: -100px;margin-right: 800px;">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar ></el-avatar>
          </div>
        </div>
      </div>
      <div >
        <el-link :underline="false" style="margin-top: -90px;margin-right: 700px;" @click="detail">{{this.$route.query.username}}({{this.$route.query.account}})</el-link>
      </div>
      <div>
        <el-link :underline="false" style="margin-top:-80px;margin-left: -300px;">我的收获地址</el-link>
      </div>

    </div>




  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      detail:function(){
        console.log(this.$route.query.username);
        this.$router.push({
          path:"/user",
          query:{
             username:this.$route.query.username,
             account:this.$route.query.account
          }
        });

      }
    }

  }

</script>

<style>

</style>
