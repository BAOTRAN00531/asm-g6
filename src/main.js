import { createApp } from 'vue'
// import './style.css'
import './assets/main.css';
import App from './App.vue'

// Import các thành phần cần thiết từ Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faEnvelope, faPhone, faGlobe, faMapMarkerAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Thêm các icon vào thư viện
library.add(faUser, faEnvelope, faPhone, faGlobe, faMapMarkerAlt, faCog)

const app = createApp(App)

// Đăng ký component FontAwesomeIcon toàn cục
app.component('font-awesome-icon', FontAwesomeIcon)


createApp(App).mount('#app')
