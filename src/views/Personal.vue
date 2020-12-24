<template>
  <div>
    <el-container>
      <el-header>
        <top></top>
        <!--3.使用组件-->
      </el-header>
    </el-container>
    <div style="margin-right: 900px;" class="mt-menu-tree">
      <dl class="mt-menu-item">
        <dt>全部功能</dt>
        <dd style="margin-left: 15px;"><el-link @click="toshopping" :underline="false" target="_blank">我的购物车</el-link ></dd>
        <dd style="margin-left: 30px;"><el-link :underline="false" target="_blank" >已买到的宝贝</el-link ></dd>
        <dd style="margin-left: -2px;"><el-link :underline="false" target="_blank">我的收藏</el-link ></dd>
        <dd style="margin-left: -2px;"><el-link :underline="false" target="_blank" >评价管理</el-link ></dd>
      </dl>
    </div>

    <div style="margin-top: -110px;margin-right: 500px;">
      <div>
        <el-avatar size="50"></el-avatar>
      </div>
      <div>
        <el-link :underline="false" style="margin-left: 200px; margin-top: -70px;" @click="detail">{{this.$route.query.username}}({{this.$route.query.account}})</el-link>
        <el-link :underline="false" style="margin-top: -70px;" @click="toaddress">我的收获地址</el-link>
      </div>

      <div style="margin-right: -220px;">
        <el-link :underline="false" @click="toaddress">待付款</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link :underline="false" @click="toaddress">待发货</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link :underline="false" @click="toaddress">待收货</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link :underline="false" @click="toaddress">待评价</el-link>
      </div>
    </div>
  </div>
</template>

<script>
  import top from '@/components/top.vue'
  export default {
    data() {
      return {


      }
    },
    components: { //2.注册组件
      top
    },
    methods: {
      toshopping: function() {
        this.$router.push({
          path: "/Shopping",
          query: {
            username: this.$route.query.username,
            account: this.$route.query.account
          }
        })
      },
      detail: function() {
        console.log(this.$route.query.username);
        this.$router.push({
          path: "/user",
          query: {
            username: this.$route.query.username,
            account: this.$route.query.account
          }
        });
      },
      toaddress: function() {
        this.$router.push({
          path: "/address",
          query: {
            username: this.$route.query.username,
            account: this.$route.query.account
          }
        });

      }
    }

  }
</script>

<style>
  .mt-menu-tree .mt-menu-item a:link,
  .mt-menu-tree .mt-menu-item a:visited {
    display: block;
    overflow: hidden;
    text-decoration: none;
    line-height: 28px;
    color: #000;
    height: 28px;
  }

  .mt-ml-c1 {
    float: left;
    width: 100%;
    min-height: 1000px;
  }
</style>
