<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      mode="default"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      mode="default"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted, reactive } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import registerMenu from '@/utils/wangEditor.js'
import { withSelect } from '@/utils/formatPaint'
import { Boot } from '@wangeditor/editor'
// 插件必须在创建编辑器之前注册
Boot.registerPlugin(withSelect)
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')
const toolbarConfig = {
  insertKeys: {
    index: 5, // 插入的位置，基于当前的 toolbarKeys
    keys: ['FormatPaintMenuConf'],
  },
}
const editorConfig = { placeholder: '请输入内容...' }

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！

  registerMenu(editorRef.value, toolbarConfig) // 注册自定义菜单。这个是5.4那边声明的
  initMediaMenuEvent()
}
const copyHtml = () => {
  copy(editorRef.value.getHtml())
}
const copy = (data) => {
  const el = document.createElement('input')
  // 给input元素赋值需要复制的文本
  el.setAttribute('value', data)
  // 将input元素插入页面
  document.body.appendChild(el)
  // 选中input元素的文本
  el.select()
  // 复制内容到剪贴板
  document.execCommand('copy')
  // 删除input元素
  document.body.removeChild(el)
  alert('复制HTML成功！')
}

// 事件监听
const initMediaMenuEvent = () => {
  const editor = editorRef.value
  // 在点击事件中，根据具体菜单，可以触发响应的功能，这里可以为每个事件创建一个el-dialog弹窗。我们就可以完全按照自己的需求开发后续功能
  editor.on('CopyHtmlClick', () => {
    copyHtml()
  })
}
</script>
<style></style>
