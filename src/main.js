import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n';

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
app.use(i18n)

app.mount('#app')
