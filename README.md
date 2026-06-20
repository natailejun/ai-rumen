# AI 入门指南

手把手教你用好 AI 工具，从零开始消除技术焦虑。

**技术栈：** Astro 6 + Starlight ~0.40

## 本地开发

```bash
npm install          # 安装依赖
npm run dev          # 开发服务器 → http://localhost:4321
npm run build        # 生产构建 → dist/
npm run preview      # 本地预览生产版本
```

## 项目结构

```
src/
├── pages/index.astro         # 独立首页（非 Starlight 文档页）
├── content/docs/tutorials/    # 教程内容（MDX）
├── components/                # 自定义 Astro 组件
├── styles/custom.css          # 全局样式（设计 tokens、玻璃拟态、动画）
└── assets/                    # 图片、logo 等静态资源
```

教程内容覆盖：ChatGPT、Claude Code、Cursor、DeepSeek、Kimi、快速入门。

## 部署

网站部署在 Cloudflare Pages：https://ai-rumen.pages.dev
