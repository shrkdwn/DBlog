<template>
  <div class="nature-box">
    <div class="audio-box">
      <button
        class="btn btn-animation"
        :class="isPlay ? 'pause' : 'play'"
        @click="audioBtnClick"
      />
      <div class="volumn-control">
        <input class="rangInput" type="range" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
// 变量
const isPlay = ref(false);
// 方法
const audioBtnClick = () => {
  isPlay.value = !isPlay.value;
};
</script>
<style lang="less" scoped>
.nature-box {
  padding-top: 70px;
  width: 100%;
  height: calc(100vh - 70px);
  background-image: url("@/assets/images/nature_bg.jpg");
  background-size: cover;
  .audio-box {
    text-align: center;
    .btn {
      height: 130px;
      width: 130px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 50%;
      background-color: transparent;
      outline: none;
      border: none;
      animation: btn-animation 5s linear infinite;
      cursor: pointer;
    }
    .pause {
      background-image: url("@/assets/images/pause.png");
    }
    .play {
      background-image: url("@/assets/images/play.png");
    }
    .volumn-control {
      margin: 0 auto;
      width: 150px;
      color: #fff;
      .rangInput {
        width: 100%;
      }
    }
  }
}
@keyframes btn-animation {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.15);
  }
  40% {
    box-shadow: 0 0 0 100px rgba(255, 255, 255, 0);
  }
  80% {
    box-shadow: 0 0 0 100px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
}
input[type="range"] {
  -webkit-appearance: none;
  /* background:transparent; */ /* jdueck added dec2020 to fix firefox bug */
  /* width: 100%; */
  margin: 6.05px 0;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2.9px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #310000, 0px 0px 0px #4b0000;
  background: #ffffff;
  border-radius: 0px;
  border: 0px solid #000000;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #ffffff;
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6.05px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #ffffff;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 2.9px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #310000, 0px 0px 0px #4b0000;
  background: #ffffff;
  border-radius: 0px;
  border: 0px solid #000000;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #ffffff;
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 2.9px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #f2f2f2;
  border: 0px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #310000, 0px 0px 0px #4b0000;
}
input[type="range"]::-ms-fill-upper {
  background: #ffffff;
  border: 0px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #310000, 0px 0px 0px #4b0000;
}
input[type="range"]::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #ffffff;
  height: 15px;
  width: 15px;
  border-radius: 0px;
  background: #ffffff;
  cursor: pointer;
  height: 17.9px; /* was 2.9px */
}
input[type="range"]:focus::-ms-fill-lower {
  background: #ffffff;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #ffffff;
}
</style>
