import { createApp } from 'vue'
import App from './App.vue'
import Tab from './home.vue'
import router from './router'
<<<<<<< HEAD

createApp(App).use(router).mount('#app')
createApp(Tab).use(router).mount('#tab')
=======

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')

>>>>>>> da5e9809b37df7227647e4fd7d43a07b5a8053a4
