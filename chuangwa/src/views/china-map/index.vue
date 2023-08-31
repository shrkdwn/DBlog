<template>
  <!-- <div>这里是测试界面</div> -->
  <div class="china-map" ref="chinaMap"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import chinaJSON from '@/assets/json/chinaChange.json'
import { onMounted, ref } from 'vue'
const chinaMap = ref()
onMounted(() => {
  drawChina()
})

const drawChina = () => {
  var myChart = echarts.init(chinaMap.value)
  echarts.registerMap('china', chinaJSON) //注册可用的地图
  var option = {
    //数据分段
    visualMap: {
      type: 'piecewise',
      show: false,
      splitList: [
        { start: 500, end: 600 },
        { start: 400, end: 500 },
        { start: 300, end: 400 },
        { start: 200, end: 300 },
        { start: 100, end: 200 },
        { start: 0, end: 100 },
      ],
      color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea'],
      itemWidth: 8,
      itemHeight: 8,
    },
    geo: {
      map: 'china',
      roam: false, //是否允许缩放，拖拽
      zoom: 1, //初始化大小
      //缩放大小限制
      scaleLimit: {
        min: 1, //最小
        max: 2, //最大
      },
      //省份地图添加背景
      regions: [
        {
          name: '南海诸岛',
          value: 0,
          itemStyle: {
            normal: {
              opacity: 0,
              label: {
                show: false,
              },
            },
          },
        },
      ],
      itemStyle: {
        areaColor: '#EEF3F6',
        color: 'red',
        borderColor: '#fff',
        borderWidth: 2,
      },
      //   高亮状态
      emphasis: {
        itemStyle: {
          areaColor: '#1af9e5',
          color: '#EEF3F6',
        },
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b0}: {c0}',
    },
    series: [
      {
        type: 'map',
        mapType: 'china',
        roam: false,
        data: [
          { name: '北京', value: Math.round(Math.random() * 500) },
          { name: '天津', value: Math.round(Math.random() * 500) },
          { name: '上海', value: Math.round(Math.random() * 500) },
          { name: '重庆', value: Math.round(Math.random() * 500) },
          { name: '河北', value: Math.round(Math.random() * 500) },
          { name: '河南', value: Math.round(Math.random() * 500) },
          { name: '云南', value: Math.round(Math.random() * 500) },
          { name: '辽宁', value: Math.round(Math.random() * 500) },
          { name: '黑龙江', value: Math.round(Math.random() * 500) },
          { name: '湖南', value: Math.round(Math.random() * 500) },
          { name: '安徽', value: Math.round(Math.random() * 500) },
          { name: '山东', value: Math.round(Math.random() * 500) },
          { name: '新疆', value: Math.round(Math.random() * 500) },
          { name: '江苏', value: Math.round(Math.random() * 500) },
          { name: '浙江', value: Math.round(Math.random() * 500) },
          { name: '江西', value: Math.round(Math.random() * 500) },
          { name: '湖北', value: Math.round(Math.random() * 500) },
          { name: '广西', value: Math.round(Math.random() * 500) },
          { name: '甘肃', value: Math.round(Math.random() * 500) },
          { name: '山西', value: Math.round(Math.random() * 500) },
          { name: '内蒙古', value: Math.round(Math.random() * 500) },
          { name: '陕西', value: Math.round(Math.random() * 500) },
          { name: '吉林', value: Math.round(Math.random() * 500) },
          { name: '福建', value: Math.round(Math.random() * 500) },
          { name: '贵州', value: Math.round(Math.random() * 500) },
          { name: '广东', value: Math.round(Math.random() * 500) },
          { name: '青海', value: Math.round(Math.random() * 500) },
          { name: '西藏', value: Math.round(Math.random() * 500) },
          { name: '四川', value: Math.round(Math.random() * 500) },
          { name: '宁夏', value: Math.round(Math.random() * 500) },
          { name: '海南', value: Math.round(Math.random() * 500) },
          { name: '台湾', value: Math.round(Math.random() * 500) },
          { name: '香港', value: Math.round(Math.random() * 500) },
          { name: '澳门', value: Math.round(Math.random() * 500) },
        ], //数据
        geoIndex: 0,
        label: {
          normal: {
            show: false, //省份名称,
          },
          emphasis: {
            show: false,
          },
        },
        emphasis: {
          //高亮状态下的多边形和标签样式
          // 控制地图滑过后的颜色
          label: {
            color: '#fff',
            fontSize: 12,
          },
          itemStyle: {
            areaColor: '#1bc1ad',
            borderColor: 'blue',
          },
        },
      },
    ],
  }
  myChart.setOption(option)
}
</script>

<style lang="less" scoped>
.china-map {
  width: 100%;
  height: 700px;
}
</style>
