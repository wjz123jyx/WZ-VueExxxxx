<template>
  <!-- 项目的最外层 -->
  <div class="outer">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer';
export default {
  name: "App",
  components:{
    Header,
    Footer
  },
  mounted(){
    this.getCategoryList();
  },
  methods:{
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },
  }
};
</script>

<style lang="less" scoped>
</style>