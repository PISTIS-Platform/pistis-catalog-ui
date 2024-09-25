// vite.config.ts
import vue from "file:///C:/Users/ade77772/Documents/Pistis/catalog/github-version/pistis-catalog-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/ade77772/Documents/Pistis/catalog/github-version/pistis-catalog-ui/node_modules/vite/dist/node/index.js";
import { lstatSync } from "node:fs";
import path2 from "path";

// config/index.js
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\ade77772\\Documents\\Pistis\\catalog\\github-version\\pistis-catalog-ui\\config";
var config_default = {
  dev: {
    // env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {},
    cssSourceMap: false
  },
  test: {
    // env: require('./prod.env'),
    port: 8080,
    index: path.resolve(__vite_injected_original_dirname, "../dist/index.html"),
    assetsRoot: path.resolve(__vite_injected_original_dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    productionSourceMap: true,
    productionCompression: false,
    productionBrotliExtensions: ["js", "css", "html", "svg"],
    productionGzipExtensions: ["js", "css", "html", "svg"],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  build: {
    // env: require('./prod.env'),
    port: 8080,
    index: path.resolve(__vite_injected_original_dirname, "../dist/index.html"),
    assetsRoot: path.resolve(__vite_injected_original_dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/srv/catalog",
    productionSourceMap: true,
    productionCompression: false,
    productionBrotliExtensions: ["js", "css", "html", "svg"],
    productionGzipExtensions: ["js", "css", "html", "svg"],
    bundleAnalyzerReport: process.env.npm_config_report
  }
};

// vite.config.ts
var __vite_injected_original_dirname2 = "C:\\Users\\ade77772\\Documents\\Pistis\\catalog\\github-version\\pistis-catalog-ui";
var isSymlink = (pkg) => {
  const packagePath = path2.resolve("..", "..", "node_modules", pkg);
  try {
    return lstatSync(packagePath).isSymbolicLink();
  } catch {
    return false;
  }
};
var buildMode = process.env.NODE_ENV === "production" ? process.env.BUILD_MODE === "test" ? "test" : "build" : "dev";
var buildConfig = {
  BASE_PATH: config_default[buildMode].assetsPublicPath,
  SERVICE_URL: config_default[buildMode].serviceUrl
};
var vite_config_default = defineConfig({
  base: buildConfig.BASE_PATH,
  define: {},
  plugins: [
    vue({
      template: {
        compilerOptions: {
          whitespace: "preserve",
          compatConfig: {
            MODE: 3
          }
        }
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path2.resolve(__vite_injected_original_dirname2, "src")
      },
      {
        find: "@modules-scss",
        replacement: isSymlink("@piveau/piveau-hub-ui-modules") ? path2.resolve(__vite_injected_original_dirname2, "..", "..", "node_modules", "@piveau/piveau-hub-ui-modules", "dist", "scss") : path2.resolve(__vite_injected_original_dirname2, "node_modules", "@piveau/piveau-hub-ui-modules", "dist", "scss")
      },
      {
        find: /^~(.*)$/,
        replacement: "$1"
      },
      {
        find: "lodash",
        replacement: "lodash-es"
      },
      {
        find: "vue-i18n",
        replacement: "vue-i18n/dist/vue-i18n.cjs.js"
      }
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    preserveSymlinks: false
  },
  server: {
    port: 8080
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "app.[hash].js"
      }
    }
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"]
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiY29uZmlnL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWRlNzc3NzJcXFxcRG9jdW1lbnRzXFxcXFBpc3Rpc1xcXFxjYXRhbG9nXFxcXGdpdGh1Yi12ZXJzaW9uXFxcXHBpc3Rpcy1jYXRhbG9nLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZGU3Nzc3MlxcXFxEb2N1bWVudHNcXFxcUGlzdGlzXFxcXGNhdGFsb2dcXFxcZ2l0aHViLXZlcnNpb25cXFxccGlzdGlzLWNhdGFsb2ctdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FkZTc3NzcyL0RvY3VtZW50cy9QaXN0aXMvY2F0YWxvZy9naXRodWItdmVyc2lvbi9waXN0aXMtY2F0YWxvZy11aS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IGxzdGF0U3luYyB9IGZyb20gJ25vZGU6ZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5jb25zdCBpc1N5bWxpbmsgPSAocGtnOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBwYWNrYWdlUGF0aCA9IHBhdGgucmVzb2x2ZSgnLi4nLCAnLi4nLCAnbm9kZV9tb2R1bGVzJywgcGtnKTtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGxzdGF0U3luYyhwYWNrYWdlUGF0aCkuaXNTeW1ib2xpY0xpbmsoKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkTW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICA/IHByb2Nlc3MuZW52LkJVSUxEX01PREUgPT09ICd0ZXN0JyBcclxuICA/ICd0ZXN0J1xyXG4gIDogJ2J1aWxkJ1xyXG4gIDogJ2Rldic7XHJcblxyXG5cclxuY29uc3QgYnVpbGRDb25maWcgPSB7XHJcbiAgQkFTRV9QQVRIOiBjb25maWdbYnVpbGRNb2RlXS5hc3NldHNQdWJsaWNQYXRoLFxyXG4gIFNFUlZJQ0VfVVJMOiBjb25maWdbYnVpbGRNb2RlXS5zZXJ2aWNlVXJsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiBidWlsZENvbmZpZy5CQVNFX1BBVEgsXHJcbiAgZGVmaW5lOiB7fSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoeyBcclxuICAgICAgdGVtcGxhdGU6IHsgXHJcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7IFxyXG4gICAgICAgICAgd2hpdGVzcGFjZTogJ3ByZXNlcnZlJyAsXHJcbiAgICAgICAgICBjb21wYXRDb25maWc6IHtcclxuICAgICAgICAgICAgTU9ERTogMyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6ICdAJyxcclxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogJ0Btb2R1bGVzLXNjc3MnLFxyXG4gICAgICAgIHJlcGxhY2VtZW50OiBpc1N5bWxpbmsoJ0BwaXZlYXUvcGl2ZWF1LWh1Yi11aS1tb2R1bGVzJykgP1xyXG4gICAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJ25vZGVfbW9kdWxlcycsICdAcGl2ZWF1L3BpdmVhdS1odWItdWktbW9kdWxlcycsICdkaXN0JywgJ3Njc3MnKVxyXG4gICAgICAgICAgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJywgJ0BwaXZlYXUvcGl2ZWF1LWh1Yi11aS1tb2R1bGVzJywgJ2Rpc3QnLCAnc2NzcycpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogL15+KC4qKSQvLFxyXG4gICAgICAgIHJlcGxhY2VtZW50OiAnJDEnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogJ2xvZGFzaCcsXHJcbiAgICAgICAgcmVwbGFjZW1lbnQ6ICdsb2Rhc2gtZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogJ3Z1ZS1pMThuJyxcclxuICAgICAgICByZXBsYWNlbWVudDogJ3Z1ZS1pMThuL2Rpc3QvdnVlLWkxOG4uY2pzLmpzJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBleHRlbnNpb25zOiBbJy5tanMnLCAnLmpzJywgJy50cycsICcuanN4JywgJy50c3gnLCAnLmpzb24nLCAnLnZ1ZSddLFxyXG4gICAgcHJlc2VydmVTeW1saW5rczogZmFsc2UsXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDgwODBcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXBwLltoYXNoXS5qcycsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgZXhjbHVkZTogWydqcy1iaWctZGVjaW1hbCddLFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBxdWlldERlcHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFkZTc3NzcyXFxcXERvY3VtZW50c1xcXFxQaXN0aXNcXFxcY2F0YWxvZ1xcXFxnaXRodWItdmVyc2lvblxcXFxwaXN0aXMtY2F0YWxvZy11aVxcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFkZTc3NzcyXFxcXERvY3VtZW50c1xcXFxQaXN0aXNcXFxcY2F0YWxvZ1xcXFxnaXRodWItdmVyc2lvblxcXFxwaXN0aXMtY2F0YWxvZy11aVxcXFxjb25maWdcXFxcaW5kZXguanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FkZTc3NzcyL0RvY3VtZW50cy9QaXN0aXMvY2F0YWxvZy9naXRodWItdmVyc2lvbi9waXN0aXMtY2F0YWxvZy11aS9jb25maWcvaW5kZXguanNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkZXY6IHtcclxuICAgIC8vIGVudjogcmVxdWlyZSgnLi9kZXYuZW52JyksXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gICAgYXV0b09wZW5Ccm93c2VyOiB0cnVlLFxyXG4gICAgYXNzZXRzU3ViRGlyZWN0b3J5OiAnc3RhdGljJyxcclxuICAgIGFzc2V0c1B1YmxpY1BhdGg6ICcvJyxcclxuICAgIHByb3h5VGFibGU6IHt9LFxyXG4gICAgY3NzU291cmNlTWFwOiBmYWxzZVxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgLy8gZW52OiByZXF1aXJlKCcuL3Byb2QuZW52JyksXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gICAgaW5kZXg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9kaXN0L2luZGV4Lmh0bWwnKSxcclxuICAgIGFzc2V0c1Jvb3Q6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9kaXN0JyksXHJcbiAgICBhc3NldHNTdWJEaXJlY3Rvcnk6ICdzdGF0aWMnLFxyXG4gICAgYXNzZXRzUHVibGljUGF0aDogJy8nLFxyXG4gICAgcHJvZHVjdGlvblNvdXJjZU1hcDogdHJ1ZSxcclxuICAgIHByb2R1Y3Rpb25Db21wcmVzc2lvbjogZmFsc2UsXHJcbiAgICBwcm9kdWN0aW9uQnJvdGxpRXh0ZW5zaW9uczogWydqcycsICdjc3MnLCAnaHRtbCcsICdzdmcnXSxcclxuICAgIHByb2R1Y3Rpb25HemlwRXh0ZW5zaW9uczogWydqcycsICdjc3MnLCAnaHRtbCcsICdzdmcnXSxcclxuICAgIGJ1bmRsZUFuYWx5emVyUmVwb3J0OiBwcm9jZXNzLmVudi5ucG1fY29uZmlnX3JlcG9ydFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIC8vIGVudjogcmVxdWlyZSgnLi9wcm9kLmVudicpLFxyXG4gICAgcG9ydDogODA4MCxcclxuICAgIGluZGV4OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vZGlzdC9pbmRleC5odG1sJyksXHJcbiAgICBhc3NldHNSb290OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vZGlzdCcpLFxyXG4gICAgYXNzZXRzU3ViRGlyZWN0b3J5OiAnc3RhdGljJyxcclxuICAgIGFzc2V0c1B1YmxpY1BhdGg6ICcvc3J2L2NhdGFsb2cnLFxyXG4gICAgcHJvZHVjdGlvblNvdXJjZU1hcDogdHJ1ZSxcclxuICAgIHByb2R1Y3Rpb25Db21wcmVzc2lvbjogZmFsc2UsXHJcbiAgICBwcm9kdWN0aW9uQnJvdGxpRXh0ZW5zaW9uczogWydqcycsICdjc3MnLCAnaHRtbCcsICdzdmcnXSxcclxuICAgIHByb2R1Y3Rpb25HemlwRXh0ZW5zaW9uczogWydqcycsICdjc3MnLCAnaHRtbCcsICdzdmcnXSxcclxuICAgIGJ1bmRsZUFuYWx5emVyUmVwb3J0OiBwcm9jZXNzLmVudi5ucG1fY29uZmlnX3JlcG9ydFxyXG4gIH1cclxufTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtYSxPQUFPLFNBQVM7QUFDbmIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxpQkFBaUI7QUFDMUIsT0FBT0EsV0FBVTs7O0FDSDZaLE9BQU8sVUFBVTtBQUEvYixJQUFNLG1DQUFtQztBQUV6QyxJQUFPLGlCQUFRO0FBQUEsRUFDYixLQUFLO0FBQUE7QUFBQSxJQUVILE1BQU07QUFBQSxJQUNOLGlCQUFpQjtBQUFBLElBQ2pCLG9CQUFvQjtBQUFBLElBQ3BCLGtCQUFrQjtBQUFBLElBQ2xCLFlBQVksQ0FBQztBQUFBLElBQ2IsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxNQUFNO0FBQUE7QUFBQSxJQUVKLE1BQU07QUFBQSxJQUNOLE9BQU8sS0FBSyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLElBQ25ELFlBQVksS0FBSyxRQUFRLGtDQUFXLFNBQVM7QUFBQSxJQUM3QyxvQkFBb0I7QUFBQSxJQUNwQixrQkFBa0I7QUFBQSxJQUNsQixxQkFBcUI7QUFBQSxJQUNyQix1QkFBdUI7QUFBQSxJQUN2Qiw0QkFBNEIsQ0FBQyxNQUFNLE9BQU8sUUFBUSxLQUFLO0FBQUEsSUFDdkQsMEJBQTBCLENBQUMsTUFBTSxPQUFPLFFBQVEsS0FBSztBQUFBLElBQ3JELHNCQUFzQixRQUFRLElBQUk7QUFBQSxFQUNwQztBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCxNQUFNO0FBQUEsSUFDTixPQUFPLEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxJQUNuRCxZQUFZLEtBQUssUUFBUSxrQ0FBVyxTQUFTO0FBQUEsSUFDN0Msb0JBQW9CO0FBQUEsSUFDcEIsa0JBQWtCO0FBQUEsSUFDbEIscUJBQXFCO0FBQUEsSUFDckIsdUJBQXVCO0FBQUEsSUFDdkIsNEJBQTRCLENBQUMsTUFBTSxPQUFPLFFBQVEsS0FBSztBQUFBLElBQ3ZELDBCQUEwQixDQUFDLE1BQU0sT0FBTyxRQUFRLEtBQUs7QUFBQSxJQUNyRCxzQkFBc0IsUUFBUSxJQUFJO0FBQUEsRUFDcEM7QUFDRjs7O0FEdENBLElBQU1DLG9DQUFtQztBQU16QyxJQUFNLFlBQVksQ0FBQyxRQUFnQjtBQUNqQyxRQUFNLGNBQWNDLE1BQUssUUFBUSxNQUFNLE1BQU0sZ0JBQWdCLEdBQUc7QUFDaEUsTUFBSTtBQUNGLFdBQU8sVUFBVSxXQUFXLEVBQUUsZUFBZTtBQUFBLEVBQy9DLFFBQVE7QUFDTixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBRUEsSUFBTSxZQUFZLFFBQVEsSUFBSSxhQUFhLGVBQ3ZDLFFBQVEsSUFBSSxlQUFlLFNBQzNCLFNBQ0EsVUFDQTtBQUdKLElBQU0sY0FBYztBQUFBLEVBQ2xCLFdBQVcsZUFBTyxTQUFTLEVBQUU7QUFBQSxFQUM3QixhQUFhLGVBQU8sU0FBUyxFQUFFO0FBQ2pDO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTSxZQUFZO0FBQUEsRUFDbEIsUUFBUSxDQUFDO0FBQUEsRUFDVCxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsUUFDUixpQkFBaUI7QUFBQSxVQUNmLFlBQVk7QUFBQSxVQUNaLGNBQWM7QUFBQSxZQUNaLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYUEsTUFBSyxRQUFRQyxtQ0FBVyxLQUFLO0FBQUEsTUFDNUM7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFVBQVUsK0JBQStCLElBQ3BERCxNQUFLLFFBQVFDLG1DQUFXLE1BQU0sTUFBTSxnQkFBZ0IsaUNBQWlDLFFBQVEsTUFBTSxJQUNqR0QsTUFBSyxRQUFRQyxtQ0FBVyxnQkFBZ0IsaUNBQWlDLFFBQVEsTUFBTTtBQUFBLE1BQzdGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWSxDQUFDLFFBQVEsT0FBTyxPQUFPLFFBQVEsUUFBUSxTQUFTLE1BQU07QUFBQSxJQUNsRSxrQkFBa0I7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxFQUM1QjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K
