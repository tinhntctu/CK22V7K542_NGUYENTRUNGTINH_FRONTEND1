import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router từ file router.js

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/main.css";

// Tạo ứng dụng và sử dụng router, sau đó mount ứng dụng vào #app
createApp(App).use(router).mount("#app");