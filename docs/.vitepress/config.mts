import { defineConfig } from 'vitepress'

import { nav, sidebar } from  './data/list'



//// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/web2026/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://sonnenlicht77.github.io/web2026/' }
    ]
  }
})
