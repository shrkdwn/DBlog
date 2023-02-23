/// <reference types="vite/client" />

// 解决 typescript只能理解.ts文件，无法理解.vue文件 （在main.ts中引入App.vue报错，找不到模块）
declare module '*.vue'{
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{},{},any>
  export default component
}
