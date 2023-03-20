import { createApp } from 'vue'
import '@/assets/styles/main.less'
import App from './App.vue'
import router from './router'
import DefaultLayout from './layouts/index.vue'
import EmptyLayout from './layouts/empty.vue' 



const app = createApp(App)
app.use(router).mount('#app')
app.component('default-layout',DefaultLayout)
app.component('empty-layout',EmptyLayout)
