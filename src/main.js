import { createApp } from 'vue'
import App from './App.vue'
import Tab from './home.vue'
import router from './router'

createApp(App).use(router).mount('#app')
createApp(Tab).use(router).mount('#tab')
