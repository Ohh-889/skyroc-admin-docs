'use client';
import { motion } from 'framer-motion';
import React from 'react';

import { FeatureCard } from './Card';
import { features } from './shared';

export const FeaturesSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-black via-blue-950/30 to-black relative"
      id="features"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute left-1/3 top-1/3 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse" />
        <div className="absolute right-1/4 top-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse" />
        <div className="absolute left-1/2 bottom-1/4 w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50 animate-pulse" />
        <div className="absolute right-1/3 bottom-1/3 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            <span className="relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                强大
              </span>
              功能
            </span>
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
            为中后台开发提供
            <span className="text-blue-400 font-semibold"> 全方位解决方案</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              key={index}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
              <FeatureCard
                delay={index * 0.1}
                description={feature.description}
                icon={feature.icon}
                title={feature.title}
              />
            </motion.div>
          ))}
        </div>

        {/* 底部装饰 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-500/30">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              className="w-2 h-2 rounded-full bg-blue-400"
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-300 text-sm">持续更新，不断优化</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
