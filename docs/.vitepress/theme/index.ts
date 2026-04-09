
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import LayoutHome from './cpn/LayoutHome.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 可以在这里添加全局组件或插件
    app.component('home-layout', LayoutHome)
  }
} as Theme