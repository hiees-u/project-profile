import { createApp } from 'vue'
import './style.css'
import { Renderer, Camera, Scene, GltfModel, AmbientLight, HemisphereLight } from 'troisjs'
import App from './App.vue'
import { createVfm } from 'vue-final-modal'

const app = createApp(App)
const vfm = createVfm()

app.component('Renderer', Renderer)
app.component('Camera', Camera)
app.component('Scene', Scene)
app.component('AmbientLight', AmbientLight)
app.component('GltfModel', GltfModel)
app.component('HemisphereLight', HemisphereLight)

app.use(vfm).mount('#app')
