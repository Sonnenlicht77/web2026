import { defineConfig } from 'vitepress'

import { nav, sidebar } from  './data/list'



//// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/web2026/',
  title: "...ING",
  description: "2026 年前端开发的思考与实践",
  themeConfig: {
    nav: nav,
    sidebar: sidebar,
    logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://sonnenlicht77.github.io/web2026/' }
    ]
  }
})
