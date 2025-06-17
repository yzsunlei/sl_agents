import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "MyAgents",
  description: "有用的AI智能体集合",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '使用MyAgents', link: '/' },
      { text: 'Agent 介绍', link: '/agent-desc' },
      { text: 'Agent 平台', link: '/agent-platform' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yzsunlei/sl_agents' },
      { icon: 'gitee', link: 'https://gitee.com/yzsunlei/sl_agents' },
    ],

    footer: {
      copyright: "Copyright © 2016-2025 <a href='https://www.yzsunlei.com/' target='_blank'>yzsunlei.com</a> ｜ <a href='https://beian.miit.gov.cn/' target='_blank'>鄂ICP备14015590号-8</a>",
    }
  }
})
