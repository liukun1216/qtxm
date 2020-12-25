<template>
  <div>
    <div style="margin-top: -60px;" >
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal" background-color="#f2f2f2"
        text-color="#000000" >
        <!-- active-text-color="#ffd04b" -->
        <el-menu-item index="8">
          <el-link target="_blank">{{this.$route.query.username}}</el-link>
        </el-menu-item>
        <el-menu-item style="margin-left: 1000px;">
          <el-link :underline="false" @click="toindex">地狗首页</el-link>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">我的地狗</template>
          <el-menu-item index="2-1" @click="Personal">个人中心</el-menu-item>
          <el-menu-item index="2-2">我的订单</el-menu-item>
        </el-submenu>

        <el-menu-item index="6">
          <el-link  target="_blank" @click="toshopping">购物车</el-link>
        </el-menu-item>

        <el-menu-item index="7">
          <el-popover placement="top-start" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-link target="_blank" slot="reference">收藏夹</el-link>
          </el-popover>
        </el-menu-item>
      </el-menu>
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
      toshopping:function(){
        this.$router.push({
          path:"/Shopping",
          query:{
            username: this.$route.query.username,
            account: this.$route.query.account
          }
        })
      },
      Personal: function() {
        this.$router.push({
          path: "/Personal",
          query: {
            username: this.$route.query.username,
            account: this.$route.query.account
          },
        });
      },
      toindex: function() {
        this.$router.push({
          path: "/Idex",
          query: {
            username: this.$route.query.username,
            account: this.$route.query.account
          }
        });
      },
    }
  }
</script>

<style>
</style>
