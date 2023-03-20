<template>
  <div class="header-box">
    <!-- 头部来个左右布局吧！ -->
    <div class="left-box">
      <span style="color:#bfe5ff">//</span>
      <span style="color:#fff">断</span>
      <span style="color:#7a7a7a">桥</span>
      <!-- <span style="color:#b6cfcb">残</span> -->
      <!-- <span style="color:#fbfbc7">雪</span> -->
      <!-- <img src="@/assets/images/xue.png" alt /> -->
      <!-- <span>//</span> -->
    </div>
    <div class="right-box">
      <ul class="nav">
        <li class="nav-item" v-for="item in navList" @click="toJump(item.path)">
          <h1>{{ item.name }}</h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// 变量
const router = useRouter();
const navList = ref<Array<{ name: string; path: string }>>([
  { name: "首页", path: "/" },
  { name: "碎碎念", path: "/info" }
]);
// 函数
const toJump = (path: string) => {
  router.push(path);
};
</script>

<style lang="less">
.header-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  box-sizing: border-box;
  .left-box {
    font-size: 28px;
  }

  .right-box {
    .nav {
      display: flex;

      .nav-item {
        margin-left: 20px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
