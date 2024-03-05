// import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

import vue from "@vitejs/plugin-vue";
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from "vite";
import importDynamicModule from 'vite-plugin-dynamic-import-module';
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const baseUrl = env.VITE_APP_BASE_URL;
  let host = baseUrl.split(":")[0];
  let port = baseUrl.split(":")[1];
  let https = false;

  return {
    plugins: [
      vue(),
      importDynamicModule(),
      // 关闭 import-analysis 插件
      { name: "vite:import-analysis", disabled: true },
      Components({
        // 从哪些目录扫描组件
        dirs: ["src/views"],
      }),
    ],
    server: {
      https,
      host,
      port,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.json', '.vue']
    },
    // logLevel: 'error'
  };
});
