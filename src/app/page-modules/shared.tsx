import { Cpu, GitBranch, Globe, Layers, Lock, Palette, Smartphone, Zap } from 'lucide-react';

// 特性数据
export const features = [
  {
    description: '基于 React19 + ReactRouter V7 + Redux/toolkit + Ant Design 构建，采用现代前端技术。',
    icon: <Cpu className="w-8 h-8" />,
    title: '最新技术栈'
  },
  {
    description: '采用Vite构建，启动快速，HMR迅速响应，保证开发体验和应用性能。',
    icon: <Zap className="w-8 h-8" />,
    title: '高性能'
  },
  {
    description: '自动化的文件路由系统，提供类似Next.js的约定式路由体验。',
    icon: <GitBranch className="w-8 h-8" />,
    title: '文件路由系统'
  },
  {
    description: '内置基于角色的权限管理，轻松控制用户访问权限。',
    icon: <Lock className="w-8 h-8" />,
    title: '权限管理'
  },
  {
    description: '完美适配移动端设备，提供流畅的跨设备用户体验。',
    icon: <Smartphone className="w-8 h-8" />,
    title: '移动端适配'
  },
  {
    description: '内置多语言支持，轻松实现应用的国际化。',
    icon: <Globe className="w-8 h-8" />,
    title: '国际化支持'
  },
  {
    description: '丰富的主题配置，支持暗黑模式和多种主题色彩。',
    icon: <Palette className="w-8 h-8" />,
    title: '主题配置'
  },
  {
    description: '提供大量预设组件，满足各种后台管理系统的需求。',
    icon: <Layers className="w-8 h-8" />,
    title: '组件丰富'
  }
];

export const techStack = [
  'React 19',
  'ReactRouter V7',
  'Redux/toolkit',
  'Ant Design',
  'UnoCSS',
  'Vite 6',
  'TypeScript',
  '响应式设计'
];

// 项目配置信息
export const projectConfig = {
  cloneUrl: 'https://github.com/Ohh-889/skyroc-admin.git',
  docs: 'https://admin-docs.skyroc.me',
  forks: '126',
  github: 'https://github.com/Ohh-889/skyroc-admin',
  name: 'SkyrocAdmin',
  preview: 'https://skyroc-admin.com/',
  stars: '618',
  version: 'v2.4.0'
};
