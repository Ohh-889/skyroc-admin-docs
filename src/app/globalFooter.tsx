'use client';
import { motion } from 'framer-motion';
import { Book, Code, FileText, Github, Heart, Mail, MessageCircle, Star, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

import { projectConfig } from './page-modules/shared';

const GlobalFooter = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // 使用 useState 避免 hydration 错误
  const [isHomePage, setIsHomePage] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsHomePage(pathname === '/');
  }, [pathname]);

  // 根据页面类型选择不同的样式
  const footerStyles = useMemo(() => {
    if (isHomePage) {
      // 首页：使用暗色渐变背景，与首页风格一致
      return {
        bgCard: 'bg-white/5',
        borderCard: 'border-white/10',
        container: 'relative bg-gradient-to-b from-gray-900/50 to-black border-t border-white/5 overflow-hidden',
        hoverBorder: 'hover:border-blue-500/50',
        textMuted: 'text-gray-500',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-400'
      };
    }
    // 其他页面：使用更融合的颜色，与文档页面背景协调
    // 使用 dark: 前缀来适配暗色模式，同时与浅色模式兼容
    return {
      bgCard: 'bg-gray-50 dark:bg-gray-900/50',
      borderCard: 'border-gray-200 dark:border-gray-800',
      container:
        'relative bg-white dark:bg-[#111] border-t border-gray-200 dark:border-gray-800 overflow-hidden transition-colors duration-200',
      hoverBorder: 'hover:border-blue-500 dark:hover:border-blue-400',
      textMuted: 'text-gray-500 dark:text-gray-500',
      textPrimary: 'text-gray-900 dark:text-gray-100',
      textSecondary: 'text-gray-600 dark:text-gray-400'
    };
  }, [isHomePage]);

  const quickLinks = [
    { href: '/guide/quick-start', icon: Zap, label: '快速开始' },
    { href: '/guide', icon: Book, label: '使用指南' },
    { href: '/auth', icon: Code, label: '权限管理' },
    { href: '/routes', icon: FileText, label: '路由系统' }
  ];

  const resources = [
    { href: projectConfig.github, icon: Github, label: 'GitHub' },
    { href: 'https://gitee.com/sjgk_dl/react-admin', icon: Github, label: 'Gitee' },
    { href: projectConfig.docs, icon: Book, label: '在线文档' },
    { href: projectConfig.preview, icon: Code, label: '在线预览' }
  ];

  const community = [
    {
      href: 'https://qun.qq.com/universal-share/share?ac=1&authKey=pzAdzMMdtdAGaqaxEFDu2mJVqRDVftIy0jZC3sXaZhiYsB3ODixc2%2F9hjI3ZxyId&busi_data=eyJncm91cENvZGUiOiIxMDI1MDczNTYyIiwidG9rZW4iOiJoN01icUgwVFlQOXE2VXM5NXo0VjF3bWxqQm9Hdlo1ZEZhWmxzaTg3WTlkZnBFeVJqMW5rSThVanUxdSt6N0dXIiwidWluIjoiMTUwOTMyNjI2NiJ9&data=mB42uAgndU14YMpWumQRfu39SFzrCmh4JdwPl3nKJVdb4J3zdO68DlmT3atlOeGqwL_bon2QmITo6t4y54YDjQ&svctype=4&tempid=h5_group_info',
      icon: MessageCircle,
      label: 'QQ 交流群'
    },
    { href: `${projectConfig.github}/issues`, icon: MessageCircle, label: '问题反馈' },
    { href: `${projectConfig.github}/discussions`, icon: MessageCircle, label: '讨论区' },
    { href: 'mailto:admin@skyroc.me', icon: Mail, label: '邮件联系' }
  ];

  // 在客户端渲染前，使用默认样式避免闪烁
  // 首页默认使用暗色样式，避免白色闪烁
  if (!isMounted) {
    return (
      <footer
        className="relative bg-gradient-to-b from-gray-900/50 to-black border-t border-white/5 overflow-hidden"
        style={{ backgroundColor: 'rgb(17, 24, 39)', color: 'rgb(229, 231, 235)' }}
      >
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <img
                    alt="Skyroc Admin Logo"
                    className="w-10 h-10"
                    src="/favicon.svg"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50 -z-10" />
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  SkyrocAdmin
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                清新优雅的中后台管理模板
                <br />
                采用最新前端技术栈
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={footerStyles.container}>
      {/* 背景装饰 - 只在首页显示 */}
      {isHomePage && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyQTJFMzUiIG9wYWNpdHk9Ii4yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9Ii41Ij48cGF0aCBkPSJNMzAgMEwzMCA2ME0wIDMwTDYwIDMwIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
        </div>
      )}

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* 主要内容区 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo 和简介 */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <img
                  alt="Skyroc Admin Logo"
                  className="w-10 h-10"
                  src="/favicon.svg"
                />
                {isHomePage && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50 -z-10" />
                )}
              </div>
              <h3
                className={`text-xl font-bold ${
                  isHomePage
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'
                    : footerStyles.textPrimary
                }`}
              >
                SkyrocAdmin
              </h3>
            </div>

            <p className={`${footerStyles.textSecondary} text-sm mb-4 leading-relaxed`}>
              清新优雅的中后台管理模板
              <br />
              采用最新前端技术栈
            </p>

            {/* GitHub Stars */}
            <a
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${footerStyles.bgCard} hover:opacity-80 border ${footerStyles.borderCard} ${footerStyles.hoverBorder} transition-all duration-300 group`}
              href={projectConfig.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Star className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className={`text-sm ${footerStyles.textSecondary} group-hover:${footerStyles.textPrimary}`}>
                {projectConfig.stars}+ Stars
              </span>
            </a>
          </motion.div>

          {/* 快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className={`${footerStyles.textPrimary} font-semibold mb-4 flex items-center gap-2`}>
              <Zap className={`w-4 h-4 ${isHomePage ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'}`} />
              快速链接
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className={`flex items-center gap-2 ${footerStyles.textSecondary} ${isHomePage ? 'hover:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'} transition-colors duration-300 text-sm group`}
                    href={link.href}
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 资源 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className={`${footerStyles.textPrimary} font-semibold mb-4 flex items-center gap-2`}>
              <Code className={`w-4 h-4 ${isHomePage ? 'text-cyan-400' : 'text-blue-600 dark:text-blue-400'}`} />
              资源
            </h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    className={`flex items-center gap-2 ${footerStyles.textSecondary} ${isHomePage ? 'hover:text-cyan-400' : 'hover:text-blue-600 dark:hover:text-blue-400'} transition-colors duration-300 text-sm group`}
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 社区 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className={`${footerStyles.textPrimary} font-semibold mb-4 flex items-center gap-2`}>
              <MessageCircle
                className={`w-4 h-4 ${isHomePage ? 'text-green-400' : 'text-blue-600 dark:text-blue-400'}`}
              />
              社区
            </h4>
            <ul className="space-y-3">
              {community.map((link, index) => (
                <li key={index}>
                  <a
                    className={`flex items-center gap-2 ${footerStyles.textSecondary} ${isHomePage ? 'hover:text-green-400' : 'hover:text-blue-600 dark:hover:text-blue-400'} transition-colors duration-300 text-sm group`}
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 分隔线 */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className={`w-full border-t ${footerStyles.borderCard}`} />
          </div>
          <div className="relative flex justify-center">
            <div className={`${footerStyles.bgCard} px-4 py-1 rounded-full border ${footerStyles.borderCard}`}>
              <div className={`flex items-center gap-2 text-xs ${footerStyles.textSecondary}`}>
                <Heart className="w-3 h-3 text-red-400" />
                <span>感谢您的支持</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className={`flex flex-col md:flex-row items-center gap-2 text-sm ${footerStyles.textMuted}`}>
            <span>© {currentYear} SkyrocAdmin.</span>
            <span className="hidden md:inline">•</span>
            <a
              className={`${isHomePage ? 'hover:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'} transition-colors`}
              href="https://opensource.org/licenses/MIT"
              rel="noopener noreferrer"
              target="_blank"
            >
              MIT License
            </a>
            <span className="hidden md:inline">•</span>
            <span>
              基于{' '}
              <a
                className={`${isHomePage ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'} transition-colors`}
                href="https://github.com/soybeanjs/soybean-admin"
                rel="noopener noreferrer"
                target="_blank"
              >
                Soybean Admin
              </a>{' '}
              开发
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              className={`${footerStyles.textMuted} hover:${footerStyles.textPrimary} text-sm transition-colors`}
              href="/faq"
            >
              常见问题
            </a>
            <span className={footerStyles.textMuted}>•</span>
            <a
              className={`${footerStyles.textMuted} hover:${footerStyles.textPrimary} text-sm transition-colors`}
              href="/guide"
            >
              使用指南
            </a>
            <span className={footerStyles.textMuted}>•</span>
            <a
              className={`${footerStyles.textMuted} hover:${footerStyles.textPrimary} text-sm transition-colors`}
              href={`${projectConfig.github}/blob/master/CHANGELOG.md`}
              rel="noopener noreferrer"
              target="_blank"
            >
              更新日志
            </a>
          </div>
        </motion.div>

        {/* 技术栈标签 */}
        <motion.div
          className={`mt-8 pt-6 border-t ${footerStyles.borderCard}`}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className={`text-xs ${footerStyles.textMuted}`}>技术栈：</span>
            {['React 19', 'Vite 6', 'TypeScript', 'Ant Design', 'Redux Toolkit', 'UnoCSS'].map((tech, index) => (
              <span
                className={`px-3 py-1 rounded-full ${footerStyles.bgCard} border ${footerStyles.borderCard} text-xs ${footerStyles.textSecondary} hover:${footerStyles.textPrimary} ${footerStyles.hoverBorder} transition-all duration-300 cursor-default`}
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
