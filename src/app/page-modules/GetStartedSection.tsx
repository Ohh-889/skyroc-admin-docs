'use client';
import { Button } from '@ui/button';
import { motion } from 'framer-motion';
import { Code, Copy, Download, Github } from 'lucide-react';
import React, { useState } from 'react';

import { projectConfig } from './shared';

interface GetStartedSectionProps {
  onDocs: () => void;
  onStart: () => void;
}

export const GetStartedSection: React.FC<GetStartedSectionProps> = ({ onDocs, onStart }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`git clone ${projectConfig.cloneUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900/30 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyQTJFMzUiIG9wYWNpdHk9Ii4zIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9Ii41Ij48cGF0aCBkPSJNMzAgMEwzMCA2ME0wIDMwTDYwIDMwIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* 头部图标和标题 */}
          <div className="text-center mb-12">
            <motion.div
              animate={{ rotate: [0, 360] }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/50"
              transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            >
              <Code className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                准备好开始了吗？
              </span>
            </h2>
            <p className="text-xl text-gray-300">只需几个简单的步骤，即可开始使用 SkyrocAdmin 构建您的后台管理系统</p>
          </div>

          {/* 代码区域 */}
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-950/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden mb-8">
            {/* 装饰元素 */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />

            {/* 窗口控制按钮 */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-sm text-gray-300 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Download className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">已复制！</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>复制代码</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* 代码内容 */}
            <div className="relative z-10">
              <pre className="text-sm md:text-base text-gray-300 overflow-x-auto">
                <code className="language-bash">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-gray-500 select-none">1</span>
                    <span>
                      <span className="text-gray-500"># 克隆项目</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-gray-500 select-none">2</span>
                    <span>
                      <span className="text-blue-400">git clone</span>{' '}
                      <span className="text-cyan-300">{projectConfig.cloneUrl}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-gray-500 select-none">3</span>
                    <span>
                      <span className="text-gray-500"># 安装依赖</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-gray-500 select-none">4</span>
                    <span>
                      <span className="text-purple-400">pnpm</span> <span className="text-yellow-300">i</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-gray-500 select-none">5</span>
                    <span>
                      <span className="text-gray-500"># 启动项目</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-gray-500 select-none">6</span>
                    <span>
                      <span className="text-purple-400">pnpm</span> <span className="text-green-300">dev</span>
                    </span>
                  </div>
                </code>
              </pre>
            </div>

            {/* 简单标记 */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              className="absolute -right-4 -top-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm px-4 py-2 rounded-lg shadow-xl font-semibold"
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ 简单三步
            </motion.div>
          </div>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center gap-2"
                onClick={onStart}
              >
                <Download className="w-5 h-5" />
                立即开始
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="border-2 border-white/30 hover:border-white/60 hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                variant="outline"
                onClick={onDocs}
              >
                查看文档
              </Button>
            </motion.div>
          </div>

          {/* GitHub Stars 指示器 */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="flex items-center gap-4 bg-gradient-to-r from-gray-900/60 to-blue-950/40 backdrop-blur-md px-6 py-4 rounded-full border border-white/10 shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
              >
                <Github className="w-6 h-6 text-white" />
              </motion.div>

              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  className="text-yellow-400 text-xl"
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ★
                </motion.div>
                <span className="text-gray-300 font-medium">
                  已获得超过 <span className="text-white font-bold">{projectConfig.stars}+</span> GitHub Stars
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
