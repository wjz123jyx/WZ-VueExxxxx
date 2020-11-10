<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="$store.state.users.userInfo.name">
            <!-- <router-link to="/login">登录</router-link> -->
            <a href="javascript"><i class="iconfont icongeren2" style="margin-right:5px;color:#67a;font-width:900;"></i>{{$store.state.users.userInfo.name}}</a>
            <!-- <router-link to="/register" class="register">免费注册</router-link> -->
            <a href="javascript:;" class="register" @click="logout">退出登录</a>
          </p>
          <p v-else>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <!-- <a href="###">我的订单</a> -->
          <router-link to="/center"><i class="iconfont icondingdan-" style="margin-right:5px;font-width:999;"></i>我的订单</router-link>
          <!-- <a href="###">我的购物车</a> -->
          <router-link to="/shopcart"><i class="iconfont icongouwuche" style="color:red;margin-right:5px;font-width:900;"></i>我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" title="尚品汇"><img src="./images/logo.png" alt="" /></router-link>
      </h1>
      <div class="searchArea">
        <form action="javascript:;" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
            @keyup.enter='toSearch'
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      keyword:''
    }
  },
  mounted(){
    this.$bus.$on('clearKeyword',this.clearKeyword)
  },
  methods: {
    // 搜索框搜索
    toSearch(){
      let location = {
        name:'search',
        params:{
          keyword:this.keyword
        },
      }

      if(this.$route.query){
        location.query = this.$route.query
      }

      if(this.$route.path !== '/home'){
        this.$router.replace(location)
      }else{
        this.$router.push(location)
      }
    },
    clearKeyword(){
      this.keyword = '';
    },
    // 退出登录
    async logout(){
      try {
        const result = await this.$store.dispatch('userLogout');
        if(result === 'ok'){
          alert('退出登录成功');
        }else{
          alert('退出失败');
        }
      } catch (error) {
          alert('退出失败');
      }
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>