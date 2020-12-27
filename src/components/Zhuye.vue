<template>
  <el-menu router :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <!-- <el-menu-item index="/sys/Centre">主页</el-menu-item> -->
    <el-submenu index="2">
      <template slot="title">个人中心</template>
      <el-menu-item index="/sys/User">个人资料</el-menu-item>
      <el-menu-item index="/sys/Change">修改密码</el-menu-item>
      <el-menu-item index="2-3">查看订单</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">订单中心</template>
        <el-menu-item index="2-4-1">资料</el-menu-item>
        <el-menu-item index="2-4-2">订单</el-menu-item>

      </el-submenu>
    </el-submenu>
    <el-menu-item index="/sys/bz">消息中心</el-menu-item>

    <el-menu-item index="/ookk">O泡时间到</el-menu-item>
    <el-menu-item index="/sys/rili">日历</el-menu-item>
    <el-menu-item index="/AdminUser">用户管理</el-menu-item>


    <el-submenu index="2-5">
      <template slot="title">商品管理</template>
       <!-- <el-menu-item index="/sys/img">商品首页</el-menu-item> -->
      <el-menu-item index="/test">商品表</el-menu-item>
      <!-- <el-menu-item index="/sys/addprod">添加商品</el-menu-item> -->
      <el-menu-item index="/spxq">商品详情</el-menu-item>
    </el-submenu>


    <el-submenu index="2-6">
      <template slot="title">店鋪管理</template>
       <el-menu-item index="/AdminShop">店铺列表</el-menu-item>
      <el-menu-item index="/dshShop">待审核店铺</el-menu-item>
      <el-menu-item index="/Shop"> Shop</el-menu-item>
    </el-submenu>




  </el-menu>

</template>

<script>
  export default {

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created: function() {
      /* this.$router.push("/sys/rili") */
    }
  };
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
