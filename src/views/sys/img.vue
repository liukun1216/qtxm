<template>
  <div class="demo-image__error">

    <div class="block">
      <span class="demonstration">商品名：电子厂</span>
      <el-carousel trigger="click" :height="carouselHeight">
        <el-image src="images/top1.jpg" fit="fill" style="height:100%;width:40%"></el-image>
      </el-carousel>
       <span class="demonstration">价格：200.0元</span><br />
       <span class="demonstration">&nbsp;&nbsp;简介：歪比巴布</span>
      </el-image>
    </div>
    <div>
      <el-button type="text">立即购买</el-button>
      <el-button type="text">加入购物车</el-button>
    </div>
  </div>


</template>


<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>


</style>
