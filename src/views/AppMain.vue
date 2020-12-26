<template>
  <el-container class="main-container">
    
    <el-container>
      <el-header class="main-header">
        <Zhuye></Zhuye>

        <!--3.使用组件-->
      </el-header>
      <el-main class="main-center">
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- <el-container>
			<el-main class="main-center">
        <router-view></router-view>
       </el-main>
		</el-container> -->
  </el-container>
</template>

<script>
  // 1.导入组件
  import Zhuye from '@/components/Zhuye.vue'




  // 导出模块
  export default {
    data: function() {
      return {
        collapsed: false
      }

    },
    components: { //2.注册组件
      Zhuye,
    
    },

  };
</script>



<style>
</style>
