import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const pinia = createPinia()


import 'virtual:windi.css'


createApp(App).use(router).use(pinia).mount('#app')
