import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";

createApp(App)
  .use(router) // 플러그인 연결
  .use(store)
  .mount("#app");
