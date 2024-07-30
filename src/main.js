import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Bootstrap CSS,JS
import "bootstrap";

//Aos
import 'aos/dist/aos.css'

//CSS
import "./assets/scss/main.scss";
//Font Awesome
import './assets/fonts/fontawesome-all.min.css';
//Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



const app = createApp(App)

app.use(router)

app.mount('#app')
