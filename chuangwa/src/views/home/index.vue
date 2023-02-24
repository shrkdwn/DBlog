<template>
  <div class="home-box">
    <div>
      <audio controls src="~assets/music/mtgy.mp3"></audio>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="less" scoped>
.home-box {
  padding-top: 70px;
  width: 100%;
  height: calc(100vh);
  background-image: url(@/assets/images/home_bg.jpg);
  background-size: cover;
}
</style>
