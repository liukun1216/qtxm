<template>
  <div>
      <el-link :underline="false" type="primary" target="_blank" style="margin-left: -200px;">全部功能</el-link>

      <el-link :underline="false">我的购物车</el-link>

      <el-link :underline="false">已买到的宝贝</el-link>

      <el-link :underline="false">我的收藏</el-link>

      <el-link :underline="false">评价管理</el-link>

      <el-link :underline="false">我的足迹</el-link>
      
    <div>
      <el-row style="margin-top: -200px;">
        <el-col :span="12">
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
            </div>
            <div class="block" v-for="size in sizeList" :key="size">
              <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
</script>

<style>
</style>
