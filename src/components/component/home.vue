<template>
        <el-container direction="vertical"> 
        <v-header></v-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
</template>

<script>
import vHeader from "./header.vue";
export default {
  data() {
    return {};
  },
  components: {
    vHeader
  }
};
</script>

<style>
.el-main{
    padding: 20px  0 0 0;
}
</style>
