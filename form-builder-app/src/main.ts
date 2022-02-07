import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { Quasar } from 'quasar'
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/main.css"
import '@quasar/extras/material-icons/material-icons.css' // Import icon libraries
import 'quasar/src/css/index.sass' // Import Quasar css

const app = createApp(App)
app.use(router)
app.use(Quasar, {
	plugins: {}, // impost Quasar plugins and add here
})
app.mount('#app')
