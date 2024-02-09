import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ComponentLibrary } from '@brightly/brightlycomponents/brightlycomponents-vue/src'

const app = createApp(App)
app.use(ComponentLibrary)
createApp(App).mount('#app')
