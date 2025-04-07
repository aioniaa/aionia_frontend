
import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入iconfont图标文件
import '@/assets/iconfont/iconfont.css';

const app = createApp(App)
app.use(router)
app.mount('#app')
