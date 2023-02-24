<template>
  <div class="header-box">
    <!-- 头部来个左右布局吧！ -->
    <div class="left-box">这里是头部左边，来个网站logo吧</div>
    <div class="right-box">
      <h1>这里是头部右侧菜单栏,还没想好写什么</h1>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>
