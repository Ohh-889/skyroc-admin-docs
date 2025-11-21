import type { MetaRecord } from 'nextra';

const CLI_ITEMS: MetaRecord = {
  command: '',
  'git-hooks': ''
};

const ICON_ITEMS: MetaRecord = {
  index: '概述',
  usage: ''
};

const THEME_ITEMS: MetaRecord = {
  // eslint-disable-next-line sort/object-properties
  index: '概述',
  config: '配置'
};

const REQUEST_ITEMS: MetaRecord = {
  // eslint-disable-next-line sort/object-properties
  index: '概述',
  usage: '使用',
  backend: '对接后端',
  proxy: '代理',
  'use-request': {
    items: {
      // eslint-disable-next-line sort/object-properties
      index: '快速上手',
      basic: '基础用法',
      'refresh-deps': '依赖刷新',
      __: {
        title: '更多',
        type: 'separator'
      },
      在线预览: {
        href: 'https://ahooks.js.org/zh-CN/hooks/use-request/index',
        title: 'ahooks useRequest 文档'
      }
    },
    title: 'useRequest'
  }
};

const ROUTE_ITEMS: MetaRecord = {
  // eslint-disable-next-line sort/object-properties
  index: '概述',
  create: '创建路由',
  cache: '路由缓存',
  guard: '路由守卫',
  handle: '路由元信息',
  __: {
    title: 'hooks',
    type: 'separator'
  },
  'use-router': 'useRouter',
  'use-route': 'useRoute'
};

const HOOKS_ITEMS: MetaRecord = {
  // eslint-disable-next-line sort/object-properties
  index: '概述',
  'use-table': 'useTable'
};

const PERSONAL_INSIGHTS_ITEMS: MetaRecord = {
  // eslint-disable-next-line sort/object-properties
  index: '前言',
  routes: '路由插件',
  schema: 'schema的封装',
  emitter: '事件总线'
};

const AUTH_ITEMS: MetaRecord = {
  // eslint-disable-next-line sort/object-properties
  index: '概述',
  menu: '菜单管理',
  tabs: '权限管理'
};

export default {
  // eslint-disable-next-line sort/object-properties
  guide: {
    items: {
      // eslint-disable-next-line sort/object-properties
      index: '',
      'quick-start': {
        href: '/guide/quick-start',
        title: '快速开始'
      },
      sync: {
        href: '/guide/sync',
        title: '同步代码'
      },
      theme: {
        items: THEME_ITEMS,
        title: '主题'
      },
      icon: {
        items: ICON_ITEMS,
        title: '系统图标'
      },
      error: '错误边界',
      i18n: '国际化',
      redux: 'Redux 与 Redux Toolkit',
      cli: {
        items: CLI_ITEMS,
        title: '命令行'
      },
      __: {
        title: '更多',
        type: 'separator'
      },
      在线预览: {
        href: 'https://react.soybeanjs.cn',
        title: '在线预览'
      },
      'next.js-link': {
        href: 'https://nextjs.org?utm_source=nextra.site&utm_medium=referral&utm_campaign=sidebar',
        title: 'Next.js Docs'
      }
    },
    title: '指引',
    type: 'page'
  },
  auth: {
    items: AUTH_ITEMS,
    title: '权限',
    type: 'page'
  },
  request: {
    items: REQUEST_ITEMS,
    title: '请求',
    type: 'page'
  },
  routes: {
    items: ROUTE_ITEMS,
    title: '路由',
    type: 'page'
  },
  hooks: {
    items: HOOKS_ITEMS,
    title: 'hooks',
    type: 'page'
  },
  faq: {
    title: '常见问题',
    type: 'page'
  },
  'personal-insights': {
    items: PERSONAL_INSIGHTS_ITEMS,
    title: '个人见解',
    type: 'page'
  },
  versions: {
    items: {
      __: {
        title: 'React',
        type: 'separator'
      },
      _2: {
        href: 'https://github.com/soybeanjs/skyroc-admin-react',
        title: 'github'
      },
      _3: {
        href: 'https://react.soybeanjs.cn/',
        title: '在线预览'
      },
      _4: {
        title: 'Vue',
        type: 'separator'
      },
      _5: {
        href: 'https://github.com/soybeanjs/skyroc-admin',
        title: 'github'
      },
      _6: {
        href: 'https://soybeanjs.cn/',
        title: '在线预览'
      }
    },
    title: '相关链接',
    type: 'menu'
  },
  index: {
    display: 'hidden',
    type: 'page'
  }
};
