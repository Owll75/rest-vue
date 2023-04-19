import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import Rest from './components/Rest.vue'

const app = createApp(App)

app.use(router)
app.component('Rest', Rest)
app.mount('#app')
