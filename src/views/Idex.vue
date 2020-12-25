<template>
  <div>
    <el-container>
      <!-- 上 -->
      <el-header style="margin-top: -60px;">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#f2f2f2"
          text-color="#000000">
          <!-- active-text-color="#ffd04b" -->
          <el-menu-item index="1" v-if="a">
            <el-link target="_blank" :underline="false">汪,欢迎来到地狗商城</el-link>
          </el-menu-item>
          <el-menu-item index="2" v-if="a">
            <el-link @click="toreGister" target="_blank">免费注册</el-link>
          </el-menu-item>
          <el-menu-item index="3" v-if="a">
            <el-link @click="tolgin" target="_blank">请登录</el-link>
          </el-menu-item>

          <el-menu-item index="8" v-if="b">
            <el-link target="_blank">Hi,{{this.$route.query.username}}</el-link>
          </el-menu-item>
          <el-menu-item index="9" v-if="b" style="margin-right: 215px;">
            <el-link @click="outlogin" target="_blank">退出</el-link>
          </el-menu-item>

          <!-- <el-menu-item index="5" style="margin-left: 800px;">
            <el-popover placement="top-start" width="200" trigger="hover" content="">
              <el-link @click="Personal" target="_blank" slot="reference">我的地狗</el-link>
            </el-popover>
          </el-menu-item> -->
          <el-submenu index="5" style="margin-left: 800px;">
            <template slot="title">我的地狗</template>
            <el-menu-item index="2-1" @click="Personal">个人中心</el-menu-item>
            <el-menu-item index="2-2">我的订单</el-menu-item>
          </el-submenu>

          <el-menu-item index="6">
            <el-link @click="shop" target="_blank">购物车</el-link>
          </el-menu-item>

          <el-menu-item index="7">
            <el-popover placement="top-start" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
              <el-link target="_blank" slot="reference">收藏夹</el-link>
            </el-popover>
          </el-menu-item>

        </el-menu>

      </el-header>
      <!-- 中 -->
      <el-main>

        <div>
          <el-link :underline="false">衣服</el-link>
          <el-link :underline="false">裤子</el-link>
          <el-link :underline="false">鞋子</el-link>
          <el-link :underline="false">帽子</el-link>
        </div>
        <!-- <div>
          <el-carousel arrow="always" style="width: 720px;margin-left: 450px;height: 300px;">
            <el-carousel-item v-for="item in imagesbox" :key="item.id">
              <img :src="item.idView" class="image">
            </el-carousel-item>
          </el-carousel>
        </div> -->

        <div>
          <el-carousel style="width: 750px;margin-left: 450px;height: 300px;">
            <el-carousel-item v-for="item in imagesbox" :key="item.id">
              <img :src="item.idView" class="image">
            </el-carousel-item>
          </el-carousel>
        </div>


      </el-main>
      <el-divider></el-divider>
      <!-- 下 -->
      <el-footer>

      </el-footer>
    </el-container>





  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        a: true,
        b: false,
        username: this.$route.query.username,
        imagesbox: [{
            id: 0,
            idView: require("@/IMG/1.png")
          },
          {
            id: 1,
            idView: require("@/IMG/2.png")
          },
          {
            id: 2,
            idView: require("@/IMG/3.png")
          },
          {
            id: 3,
            idView: require("@/IMG/4.png")
          }
        ]
      }
    },
    methods: {
      toreGister: function() {
        this.$router.push("/Register");
      },
      tolgin: function() {
        this.$router.push("/Login");
      },
      Personal: function() {
        if (false == this.a) {
          this.$router.push({
            path: "/Personal",
            query: {
              username: this.$route.query.username,
              account: this.$route.query.account
            },
          });

        } else {
          this.$router.push("/Login")
        }

      },
      shop: function() {
        if (false == this.a) {
          this.$router.push({
            path: "/Shopping",
            query: {
              username: this.$route.query.username,
              account: this.$route.query.account
            },
          });

        } else {
          this.$router.push("/Login")
        }
      },
      outlogin: function() {
        this.a = true;
        this.b = false;
        this.$route.query.username = null;

      }




    },
    created: function() {
      if (undefined != this.$route.query.username) {
        this.a = false;
        this.b = true;
      }


    }

  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
</style>
