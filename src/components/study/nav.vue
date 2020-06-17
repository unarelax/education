<template>
<div>
    <div class="bar">
      <div class="wrap">
        <div class="img">
          <a href="">
            <img src="@/assets/logo.png" alt="">
          </a>
        </div>
        <div class="nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1"><a href="" target="_blank">精品课程</a></el-menu-item>
              <el-menu-item index="2"><a href="" target="_blank">云课堂</a></el-menu-item>
              <el-menu-item index="3"><a href="" target="_blank">素养</a></el-menu-item>
              <el-menu-item index="4"><a href="" target="_blank">微课中心</a></el-menu-item>
              <el-menu-item index="5"><a href="" target="_blank">下载客户端</a></el-menu-item>
            </el-menu>
        </div>
      </div>
      <div class="nav-right">
        <div class="search">
          <el-input v-model="input" placeholder="课程搜索" style="border-radius: 20px;" suffix-icon="el-icon-search" />
        </div>
        <el-button type="danger" size="mini" style="color: #C2121F; background-color:#fff; border-color: #C2121F;" round>登录</el-button>
        <el-button type="danger" size="mini" style="background-color: #C2121F; border-color: #C2121F;" round>注册</el-button>
      </div>
    </div>
      <div class="wrap">
          <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item >素养</el-breadcrumb-item>
            <el-breadcrumb-item>推荐</el-breadcrumb-item>
            <el-breadcrumb-item>宪法系列剧</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'navBar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.el-button.is-round {
    border-radius: 100px;
    padding: 5px 9px;
    border: 2px solid #DCDFE6;
}
.el-input__inner {
    border-radius: 100px;
    border: 2px solid #DCDFE6;
    height: 28px;
    line-height: 28px;
}

.el-input__icon {
  color: #676767;
}

.el-button+.el-button {
    margin-left: 20px;
}

</style>
<style scoped>
a{ 
  text-decoration:none 
}
.bar{
  /* width: 100%; */
  position: fixed;
  top: 0;
  left:0;
  right:0;
  z-index: 99999;
  background-color:#fffffe;
  height: 58px;
  /* background-color:red; */
}
.wrap{
  width: 1000px;
  margin: 0 auto;
  position: relative;
}
.img{
    display: inline-block;
    position: absolute;
    left: 0;
    height: 58px;
}
.img>a>img{
    height: 100%;
}
.nav{
    display: inline-block;
    position: absolute;
    left: 0;
    padding-left: 220px;
}
.el-menu.el-menu--horizontal {
    font-weight:800;
    border-bottom: none;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #c2121f;
    color: #c2121f;
}

.bread{
  padding-top: 15px;
  padding-bottom: 15px;
}

.nav-right{
  position: absolute;
  left: 0;
  height: 58px;
  line-height: 58px;
  padding-left: 895px;
  width: 362px;
}

.search{
  display: inline-block;
  width: 180px;
  height: 30px;
  padding-right: 50px;
}

</style>
