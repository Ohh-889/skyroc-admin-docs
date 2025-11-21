# SkyrocAdmin 官方文档

> [SkyrocAdmin](https://github.com/Ohh-889/skyroc-admin) 的在线文档站点

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![PNPM Version](https://img.shields.io/badge/pnpm-%3E%3D8.0.0-orange.svg)](https://pnpm.io/)
[![Next.js](https://img.shields.io/badge/Next.js-15.2-black)](https://nextjs.org/)

## 简介

**SkyrocAdmin** 是一个基于 React 19、Vite 6、TypeScript、Ant Design 和 UnoCSS 的现代化企业级中后台管理系统模板。本文档站点提供完整的使用指南、API 文档和最佳实践。

**在线地址**:
- 文档站点: [https://admin-docs.skyroc.me](https://admin-docs.skyroc.me)
- 项目预览: [https://skyroc-admin.com](https://skyroc-admin.com)
- GitHub: [https://github.com/Ohh-889/skyroc-admin](https://github.com/Ohh-889/skyroc-admin)

## 技术栈

- **框架**: [Next.js 15](https://nextjs.org/) + [Nextra 4](https://nextra.site/)
- **语言**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **UI**: [React 19](https://react.dev/)
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/)
- **动画**: [Framer Motion](https://www.framer.com/motion/)
- **图标**: [Lucide React](https://lucide.dev/)

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装

```bash
# 克隆仓库
git clone https://github.com/Ohh-889/skyroc-admin-docs.git

# 进入目录
cd skyroc-admin-docs

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

开发服务器将在 `http://localhost:3000` 启动。

### 构建

```bash
# 生产构建
pnpm build

# 本地预览
pnpm preview
```

## 项目结构

```
soybean-admin-react-docs/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── guide/             # 指南文档
│   │   ├── hooks/             # Hooks 文档
│   │   ├── routes/            # 路由文档
│   │   ├── request/           # 请求文档
│   │   ├── personal-insights/ # 个人见解
│   │   ├── faq/               # 常见问题
│   │   ├── page-modules/      # 首页模块
│   │   ├── _meta.global.tsx   # 导航配置
│   │   └── page.tsx           # 首页
│   ├── components/             # React 组件
│   │   ├── common/            # 通用组件
│   │   ├── icons/             # 图标组件
│   │   └── ui/                # UI 组件
│   ├── lib/                    # 工具库
│   └── assets/                 # 静态资源
├── public/                     # 公共资源
├── next.config.mjs            # Next.js 配置
├── tailwind.config.js         # Tailwind 配置
├── tsconfig.json              # TypeScript 配置
└── package.json               # 依赖配置
```

## 文档编写

文档使用 MDX 格式，支持 Markdown 和 React 组件。

### 创建新文档

1. 在 `src/app` 目录下创建文件夹和 `page.mdx`
2. 编写文档内容
3. 在 `src/app/_meta.global.tsx` 中配置导航

### MDX 示例

```mdx
---
title: 文档标题
---

# 标题

普通文本内容...

## 代码示例

\`\`\`tsx
function Component() {
  return <div>Hello World</div>;
}
\`\`\`

## 使用组件

import { Button } from '@/components/ui/button';

<Button>点击按钮</Button>
```

## 可用命令

```bash
# 开发
pnpm dev          # 启动开发服务器

# 构建
pnpm build        # 生产构建
pnpm preview      # 预览构建产物

# 代码质量
pnpm lint         # 代码检查和修复
pnpm typecheck    # 类型检查
```


## 主项目特性

SkyrocAdmin 主要特性包括：

- **前沿技术**: React 19 + Vite 6 + TypeScript 5.7
- **状态管理**: Redux Toolkit + TanStack Query
- **路由系统**: React Router V7 + 约定式路由
- **UI 组件**: Ant Design 5.24
- **样式方案**: UnoCSS 原子化 CSS
- **主题系统**: 支持暗黑模式、多主题色
- **权限管理**: 基于 RBAC 的权限控制
- **国际化**: 完整的 i18n 方案
- **数据管理**: TanStack Query 优雅分层架构
- **响应式**: 完美支持移动端和桌面端

## 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

### 提交规范

使用 Conventional Commits 规范：

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式
- `refactor`: 重构
- `test`: 测试
- `chore`: 构建/工具

## 相关链接

- **主项目**: [SkyrocAdmin](https://github.com/Ohh-889/skyroc-admin)
- **预览地址**: [https://skyroc-admin.com](https://skyroc-admin.com)
- **文档地址**: [https://admin-docs.skyroc.me](https://admin-docs.skyroc.me)
- **问题反馈**: [Issues](https://github.com/Ohh-889/skyroc-admin/issues)

## 交流与支持

SkyrocAdmin 是完全开源免费的项目，致力于帮助开发者更便捷地进行中大型管理系统开发。我们提供了多种交流渠道，使用过程中遇到任何问题，欢迎随时在群内提问交流。

### QQ 交流群

<div align="center">
  <img src="https://assets.skyroc.me/qq-group01.jpg" alt="QQ交流群" width="200" />
  <p>扫码加入 QQ 交流群</p>
</div>

### 微信交流群

<div align="center">
  <img src="https://assets.skyroc.me/wx-avatar.jpg" alt="微信二维码" width="200" />
  <p>添加作者微信，邀请进群</p>
</div>

<div align="center">
  <img src="https://assets.skyroc.me/wx-group01.jpg" alt="微信群" width="200" />
  <p>或直接扫码加入微信群</p>
</div>

## 开源协议

本项目基于 [MIT](LICENSE) 协议开源。

## 致谢

- [Nextra](https://nextra.site/) - 优秀的文档框架
- [Next.js](https://nextjs.org/) - 强大的 React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 实用的 CSS 框架
- [Soybean Admin](https://github.com/soybeanjs/soybean-admin) - 原始项目灵感来源

---

<div align="center">

**如果这个项目对你有帮助，请给个 Star ⭐️**

Made with ❤️ by [Ohh-889](https://github.com/Ohh-889)

</div>
