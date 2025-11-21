'use client';
import { motion } from 'framer-motion';
import { GitBranch, Globe, Layers, Lock, Palette, Zap } from 'lucide-react';
import React from 'react';

import { StatCard } from './Card';
import { ScreenshotDisplay } from './otherComponents';

export const ScreenshotSection: React.FC = () => {
  const iconItems = [
    { color: 'text-yellow-400', Icon: Zap },
    { color: 'text-green-400', Icon: GitBranch },
    { color: 'text-blue-400', Icon: Layers }
  ];

  const iconItemsLeft = [
    { color: 'text-blue-400', Icon: Globe },
    { color: 'text-purple-400', Icon: Palette },
    { color: 'text-red-400', Icon: Lock }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900/50 to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div
            animate={{ scaleX: [0, 1] }}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            initial={{ scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ scaleX: 1 }}
          />

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative inline-block">
            <span className="relative z-10">优雅的界面设计</span>
            <motion.div
              animate={{ scaleX: [0, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              initial={{ scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ scaleX: 1 }}
            />
          </h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            现代化 UI 设计，提供
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
              卓越的用户体验
            </span>
          </motion.p>
        </motion.div>

        <div className="relative">
          <ScreenshotDisplay />
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-3/4 h-10 bg-blue-500/20 blur-3xl" />

          {/* 右侧图标组 */}
          <motion.div
            className="absolute top-10 right-10 flex-col gap-3 z-10 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {iconItems.map(({ color, Icon }, index) => (
              <motion.div
                animate={{ y: [0, -5, 0] }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group"
                key={index}
                whileHover={{ scale: 1.15 }}
                transition={{
                  delay: index * 0.2,
                  duration: 3,
                  ease: 'easeInOut',
                  repeat: Infinity
                }}
              >
                <Icon className={`w-6 h-6 ${color} group-hover:scale-125 transition-transform`} />
              </motion.div>
            ))}
          </motion.div>

          {/* 左侧图标组 */}
          <motion.div
            className="absolute top-1/2 left-8 transform -translate-y-1/2 flex-col gap-3 z-10 hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {iconItemsLeft.map(({ color, Icon }, index) => (
              <motion.div
                animate={{ y: [0, 5, 0] }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group"
                key={index}
                whileHover={{ scale: 1.15 }}
                transition={{
                  delay: index * 0.2,
                  duration: 3,
                  ease: 'easeInOut',
                  repeat: Infinity
                }}
              >
                <Icon className={`w-6 h-6 ${color} group-hover:scale-125 transition-transform`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 统计卡片 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { delay: 0, gradient: 'from-blue-500 to-cyan-500', label: '预设组件', number: '30+' },
            { delay: 0.1, gradient: 'from-cyan-500 to-green-500', label: '主题配置', number: '8+' },
            { delay: 0.2, gradient: 'from-purple-500 to-blue-500', label: '用户满意度', number: '99%' },
            { delay: 0.3, gradient: 'from-blue-500 to-indigo-500', label: '技术支持', number: '24/7' }
          ].map((stat, index) => (
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              key={index}
              transition={{ delay: stat.delay + 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500`}
              />
              <StatCard
                delay={stat.delay}
                label={stat.label}
                number={stat.number}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      {/* 粒子效果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100]
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            transition={{
              delay: Math.random() * 5,
              duration: 3,
              ease: 'easeOut',
              repeat: Infinity,
              repeatDelay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </section>
  );
};
