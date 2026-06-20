// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai-rumen.pages.dev',
  integrations: [
    starlight({
      title: 'AI 入门指南',
      description: '手把手教你使用 AI 工具，消除技术焦虑',
      defaultLocale: 'zh-CN',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      customCss: [
        './src/styles/custom.css',
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/ai-rumen/ai-rumen' },
      ],
      sidebar: [
        {
          label: '快速入门',
          collapsed: false,
          items: [
            { autogenerate: { directory: 'tutorials/getting-started' } },
          ],
        },
        {
          label: 'ChatGPT',
          collapsed: false,
          badge: { text: '热门', variant: 'success' },
          items: [
            { autogenerate: { directory: 'tutorials/chatgpt' } },
          ],
        },
        {
          label: 'Claude Code',
          collapsed: false,
          badge: { text: '新', variant: 'tip' },
          items: [
            { autogenerate: { directory: 'tutorials/claude-code' } },
          ],
        },
        {
          label: 'Cursor',
          collapsed: false,
          items: [
            { autogenerate: { directory: 'tutorials/cursor' } },
          ],
        },
        {
          label: 'DeepSeek',
          collapsed: true,
          items: [
            { autogenerate: { directory: 'tutorials/deepseek' } },
          ],
        },
        {
          label: 'Kimi',
          collapsed: true,
          items: [
            { autogenerate: { directory: 'tutorials/kimi' } },
          ],
        },
        {
          label: '参考资料',
          collapsed: true,
          items: [
            { autogenerate: { directory: 'resources' } },
          ],
        },
        { label: '关于我们', slug: 'about' },
        { label: '联系我们', slug: 'contact' },
      ],
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
