import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'quasar/dist/quasar.css';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import Plugin from '@quasar/quasar-ui-qmarkdown'
import '@quasar/quasar-ui-qmarkdown/dist/index.css'

const app = createApp(App).use(Quasar, quasarUserOptions).use(store).use(ElementPlus).use(Plugin)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')