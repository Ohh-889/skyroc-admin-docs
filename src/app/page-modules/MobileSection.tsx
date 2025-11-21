'use client';
import { Button } from '@ui/button';
import { motion } from 'framer-motion';
import React from 'react';

interface MobileSectionProps {
  onGitHub: () => void;
  onPreview: () => void;
}

export const MobileSection: React.FC<MobileSectionProps> = ({ onGitHub, onPreview }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-900/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        {/* 网格装饰 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyQTJFMzUiIG9wYWNpdHk9Ii4zIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9Ii41Ij48cGF0aCBkPSJNMzAgMEwzMCA2ME0wIDMwTDYwIDMwIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-500/50 text-sm mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-semibold">
                🚀 全设备兼容
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              移动端
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">完美适配</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              响应式设计，从桌面到移动端的完美体验，一套代码适配所有设备
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { desc: '智能调整元素布局', icon: '📱', title: '自适应布局' },
                { desc: '交互体验升级', icon: '👆', title: '触控优化' },
                { desc: '移动端流畅运行', icon: '⚡', title: '性能优化' },
                { desc: '屏幕旋转自适应', icon: '🔄', title: '动态适配' }
              ].map((item, index) => (
                <motion.div
                  className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  key={index}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                onClick={onPreview}
              >
                <span>立即体验</span>
                <span className="text-lg">→</span>
              </Button>
              <Button
                className="border-2 border-white/30 hover:border-white/60 hover:bg-white/10 px-6 py-3 rounded-full text-base transition-all duration-300 backdrop-blur-sm"
                variant="outline"
                onClick={onGitHub}
              >
                了解更多
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative flex items-center justify-center">
              {/* 背景光晕效果 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[300px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
              </div>

              {/* 手机框架装饰 */}
              <div className="relative z-10">
                <motion.div
                  className="relative"
                  animate={{
                    rotateY: [0, 5, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 5,
                    ease: 'easeInOut',
                    repeat: Infinity
                  }}
                >
                  <img
                    alt="Mobile Version"
                    className="h-[500px] md:h-[600px] w-auto object-contain drop-shadow-2xl"
                    src="https://assets.skyroc.me/mobile-admin.jpg"
                  />
                </motion.div>

                {/* 浮动特性标签 */}
                {[
                  { color: 'from-blue-500 to-cyan-500', right: '-10%', text: '移动优先', top: '15%' },
                  { color: 'from-purple-500 to-pink-500', left: '-10%', text: '多主题', top: '50%' },
                  { bottom: '20%', color: 'from-indigo-500 to-blue-500', right: '-5%', text: '暗黑模式' }
                ].map((tag, index) => (
                  <motion.div
                    className="absolute z-20 hidden md:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    key={index}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    animate={{
                      scale: [1, 1.05, 1],
                      y: [0, -5, 0]
                    }}
                    style={{
                      bottom: tag.bottom,
                      left: tag.left,
                      right: tag.right,
                      top: tag.top
                    }}
                    transition={{
                      delay: index * 0.2,
                      duration: 3,
                      ease: 'easeInOut',
                      repeat: Infinity
                    }}
                  >
                    <div
                      className={`bg-gradient-to-r ${tag.color} backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl`}
                    >
                      <span className="text-white text-sm font-semibold whitespace-nowrap">✨ {tag.text}</span>
                    </div>
                  </motion.div>
                ))}

                {/* 装饰性几何图形 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  className="absolute top-1/4 -left-8 w-16 h-16 border-2 border-blue-400/30 rounded-lg hidden lg:block"
                  transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  className="absolute bottom-1/3 -right-8 w-20 h-20 border-2 border-cyan-400/30 rounded-full hidden lg:block"
                  transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
