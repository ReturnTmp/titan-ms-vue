import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";


import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';


import "./api/mock.js";
import "./assets/less/index.less";
import http from './axios';
import router from "./router";
import store from "./store";


const app = createApp(App);

app.use(ElementPlus,{
  locale: zhCn,
});
app.use(router);
app.use(store);

app.config.globalProperties.$http = http;
// app.config.globalProperties.$confirm = ElementPlus.MessageBox.$confirm;
// app.config.globalProperties.$message = ElementPlus.MessageBox;

app.mount("#app");

