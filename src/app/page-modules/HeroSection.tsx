'use client';
import { Button } from '@ui/button';
import { motion } from 'framer-motion';
import { Code, GitBranch, Zap } from 'lucide-react';
import React from 'react';

import { ScrollToNext } from './ScrollComponents';
import { ParallaxBackground, TechTag } from './otherComponents';
import { projectConfig, techStack } from './shared';

interface HeroSectionProps {
  onDocs: () => void;
  onStart: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDocs, onStart }) => {
  return (
    <section className="relative h-screen flex items-center justify-center py-12 px-4 overflow-hidden">
      <ParallaxBackground />

      {/* 浮动3D装饰元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 代码块装饰 */}
        <motion.div
          animate={{ opacity: 0.7, y: 0 }}
          className="absolute top-[15%] right-[10%] w-32 h-32 hidden md:block"
          initial={{ opacity: 0, y: -50 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md blur opacity-50" />
            <div className="relative bg-black/50 backdrop-blur-md p-3 rounded-md border border-white/20 shadow-lg">
              <div className="flex space-x-1 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <pre className="text-[8px] text-gray-300 overflow-hidden">
                <code>{`import { useRoutes } from 'react-router';
import { routes } from './routes';

export default function App() {
  return useRoutes(routes);
}`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* 特性卡片装饰 */}
        <motion.div
          animate={{ opacity: 0.8, x: 0 }}
          className="absolute bottom-[25%] left-[8%] w-40 hidden md:block"
          initial={{ opacity: 0, x: -30 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-lg">
            <div className="text-blue-400 mb-1">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">高性能</h4>
            <p className="text-[8px] text-gray-300">Vite构建，速度快</p>
          </div>
        </motion.div>

        {/* UI组件装饰 */}
        <motion.div
          animate={{ opacity: 0.9, scale: 1 }}
          className="absolute top-[30%] left-[12%] hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="bg-gradient-to-r from-blue-500/80 to-cyan-500/80 p-2 rounded-md shadow-lg text-xs text-white font-medium">
            SkyrocAdmin
          </div>
        </motion.div>

        {/* 3D旋转组件 */}
        <motion.div
          animate={{ opacity: 0.7, rotateY: 0, x: 0 }}
          className="absolute bottom-[20%] right-[15%] w-36 hidden md:block"
          initial={{ opacity: 0, rotateY: -30, x: 50 }}
          style={{ perspective: '1000px' }}
          transition={{ delay: 1.7, duration: 1 }}
        >
          <div className="relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur opacity-60" />
            <div className="relative bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/20 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="bg-blue-500/30 w-6 h-1.5 rounded-full" />
                <div className="bg-cyan-500/30 w-3 h-3 rounded-full" />
              </div>
              <div className="space-y-1.5">
                <div className="bg-white/10 h-1.5 rounded-full w-full" />
                <div className="bg-white/10 h-1.5 rounded-full w-3/4" />
                <div className="bg-white/10 h-1.5 rounded-full w-1/2" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 浮动图形 */}
        <motion.div
          className="absolute top-[35%] right-[25%] w-5 h-5 border-2 border-blue-400/50 rounded-full"
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            y: [0, -15, 0]
          }}
        />
        <motion.div
          className="absolute top-[15%] left-[30%] w-4 h-4 border-2 border-cyan-400/50 rounded-sm rotate-45"
          transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
            y: [0, 20, 0]
          }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[35%] w-6 h-6 border-2 border-purple-400/50 rounded-md"
          transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
          animate={{
            rotate: [0, -360],
            scale: [1, 0.9, 1],
            y: [0, -25, 0]
          }}
        />
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="mb-3 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <img
              alt="Soybean Admin Logo"
              className="w-20 h-20 mx-auto relative z-10"
              src="/favicon.svg"
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-70 z-0 animate-pulse" />

            {/* 光环效果 */}
            <div className="absolute -inset-6 rounded-full z-0">
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping-slow" />
              <div className="absolute inset-3 rounded-full border-2 border-cyan-400/30 animate-spin-slow" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-3 text-white"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-gradient">
            SkyrocAdmin
          </span>
        </motion.h1>

        {/* 添加互动标语 */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-2"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-white/10 text-sm text-blue-300">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400"
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="ml-3">为开发者而生 · 优雅设计 · 高效开发</span>
          </div>
        </motion.div>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          清新优雅的中后台管理模板
          <br />
          <span className="text-blue-400">采用最新前端技术栈</span>
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {techStack.map((tech, index) => (
            <TechTag
              key={index}
              name={tech}
            />
          ))}
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 group"
            onClick={onStart}
          >
            <span>开始使用</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              className="inline-block ml-1"
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              →
            </motion.span>
          </Button>

          <Button
            className="border-white/30  hover:bg-white/10 px-6 py-2 rounded-full text-base font-medium transition-all duration-300 backdrop-blur-sm shadow-lg group"
            variant="outline"
            onClick={onDocs}
          >
            <span className="relative inline-block">
              查看文档
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
          </Button>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 inline-flex items-center gap-1 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-gray-300 text-sm"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          近期更新: {projectConfig.version}版本发布 — 全新设计，优化性能
        </motion.div>

        {/* 添加GitHub统计 */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 flex gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
            <div className="text-yellow-400">★</div>
            <span>{projectConfig.stars}+ Stars</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
            <div className="text-blue-400">
              <GitBranch className="w-3.5 h-3.5" />
            </div>
            <span>{projectConfig.forks}+ Forks</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
            <div className="text-green-400">
              <Code className="w-3.5 h-3.5" />
            </div>
            <span>MIT 开源</span>
          </div>
        </motion.div>
      </motion.div>

      {/* 镜像反光效果 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />

      <ScrollToNext targetId="features" />
    </section>
  );
};
