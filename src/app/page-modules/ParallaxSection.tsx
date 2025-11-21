'use client';
import { Button } from '@ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Cpu, Layers, Lock, Palette, Zap } from 'lucide-react';
import React from 'react';
import { Parallax } from 'react-parallax';

export const ParallaxSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      <Parallax
        bgImage="https://soybeanjs-1300612522.cos.ap-guangzhou.myqcloud.com/uPic/soybean-admin-v1-01.png"
        bgImageAlt="Skyroc Admin Dashboard"
        blur={1}
        strength={300}
        bgImageStyle={{
          objectFit: 'cover',
          objectPosition: 'center top'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-900/80 to-black/90 z-0" />

        <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              style={{ opacity, y }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/50 text-sm mb-3">
                专为开发者设计
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">高效开发体验</h2>
              <p className="text-xl text-gray-300 mb-8 border-l-4 border-blue-500 pl-4">
                代码规范严谨，架构清晰优雅，支持TypeScript类型检查，让开发更高效。提供丰富的组件和工具，加速您的后台管理系统开发。
              </p>

              <div className="flex gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex-1">
                  <Cpu className="w-6 h-6 text-blue-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-1">代码自动生成</h3>
                  <p className="text-sm text-gray-300">内置多种代码生成工具</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex-1">
                  <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-1">开发热重载</h3>
                  <p className="text-sm text-gray-300">毫秒级的热更新响应</p>
                </div>
              </div>

              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                了解更多 <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-75 animate-pulse" />
                <div className="relative bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-gray-400 text-xs">App.tsx</div>
                  </div>
                  <pre className="text-xs text-gray-300 overflow-x-auto">
                    <code>
                      {`import React from 'react';
import { useAppSelector } from '@/store';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <ConfigProvider theme={theme}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ConfigProvider>
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 点缀元素 - 交互式功能指示 */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* 顶部工具栏示意 */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-8 left-1/2 transform -translate-x-1/2 max-w-lg w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg hidden md:flex"
            initial={{ opacity: 0, y: -20 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center justify-between w-full px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-white/80 text-xs px-3 py-1 rounded-md bg-black/20 backdrop-blur-sm">
                SoybeanAdmin
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-1 rounded-full bg-white/20" />
                <div className="w-6 h-1 rounded-full bg-white/20" />
              </div>
            </div>
          </motion.div>

          {/* 左侧功能指示器 - 权限系统 */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-1/4 left-10 hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-75 animate-pulse-slow" />
              <div className="relative bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex flex-col items-center gap-2 max-w-[140px]">
                <Lock className="w-8 h-8 text-purple-400" />
                <div className="text-center">
                  <div className="text-white font-medium text-sm">权限管理</div>
                  <div className="text-white/60 text-xs">内置RBAC权限系统</div>
                </div>

                <div className="mt-1 flex gap-1">
                  <motion.div
                    animate={{ width: [8, 32, 8] }}
                    className="h-1 w-8 bg-purple-400/50 rounded-full"
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <motion.div
                    animate={{ width: [3, 10, 3] }}
                    className="h-1 w-3 bg-blue-400/50 rounded-full"
                    transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  />
                </div>
              </div>

              {/* 连接线 */}
              <motion.div
                animate={{ width: 80 }}
                className="absolute top-1/2 -right-20 w-20 border-t border-dashed border-purple-400/30"
                initial={{ width: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* 右侧功能指示器 - 主题配置 */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-1/3 right-10 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-75 animate-pulse-slow" />
              <div className="relative bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex flex-col items-center gap-2 max-w-[140px]">
                <Palette className="w-8 h-8 text-cyan-400" />
                <div className="text-center">
                  <div className="text-white font-medium text-sm">主题系统</div>
                  <div className="text-white/60 text-xs">支持多种主题配置</div>
                </div>

                <div className="flex gap-1 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                </div>
              </div>

              {/* 连接线 */}
              <motion.div
                animate={{ width: 80 }}
                className="absolute top-1/2 -left-20 w-20 border-t border-dashed border-cyan-400/30"
                initial={{ width: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* 底部功能指示器 - 组件系统 */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-1/5 left-1/2 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-75 animate-pulse-slow" />
              <div className="relative bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center gap-3 max-w-[220px]">
                <Layers className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">丰富组件</div>
                  <div className="text-white/60 text-xs">提供30+预设组件</div>
                </div>

                <div className="bg-black/20 backdrop-blur-sm p-1 rounded-md">
                  <motion.div
                    animate={{ opacity: [1, 0.6, 1] }}
                    className="text-xs text-green-400"
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    30+
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 交互指示元素 */}
          <div className="absolute bottom-10 right-10 hidden md:block">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="relative group hover-lift"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 2, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/5 backdrop-blur-md w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-cyan-400 font-medium text-xs">开始</div>
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="w-4 h-4 text-white/80 mx-auto mt-1" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};
