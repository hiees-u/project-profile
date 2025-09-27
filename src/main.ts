import { createApp } from 'vue'
import './style.css'
import { Renderer, Camera, Scene, GltfModel, AmbientLight, HemisphereLight } from 'troisjs'
import App from './App.vue'

const app = createApp(App)

app.component('Renderer', Renderer)
app.component('Camera', Camera)
app.component('Scene', Scene)
app.component('AmbientLight', AmbientLight)
app.component('GltfModel', GltfModel)
app.component('HemisphereLight', HemisphereLight)

app.mount('#app')
