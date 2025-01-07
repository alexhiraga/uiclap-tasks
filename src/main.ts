import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue'
import router from './router'
import MdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MdiVue, {
    icons: mdijs
});

app.mount('#app')
