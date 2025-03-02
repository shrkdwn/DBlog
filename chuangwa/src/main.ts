import { createApp } from 'vue'
import '@/assets/styles/main.less'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')
