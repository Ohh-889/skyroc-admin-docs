'use client';
import { motion } from 'framer-motion';
import React from 'react';

export const BackgroundDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* 模糊光斑 */}
        <div className="absolute top-[10%] left-[15%] w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-[8rem] opacity-60" />
        <div className="absolute top-[40%] right-[15%] w-[25rem] h-[25rem] bg-cyan-500/20 rounded-full blur-[8rem] opacity-60" />
        <div className="absolute bottom-[15%] left-[35%] w-[20rem] h-[20rem] bg-indigo-500/20 rounded-full blur-[8rem] opacity-60" />

        {/* 网格图案 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyQTJFMzUiIG9wYWNpdHk9Ii4zIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9Ii41Ij48cGF0aCBkPSJNMzAgMEwzMCA2ME0wIDMwTDYwIDMwIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

        {/* 浮动图形 */}
        <motion.div
          animate={{ rotate: 360, y: [0, 20, 0] }}
          className="absolute top-[20%] left-[10%] w-8 h-8 border border-blue-400/30 rounded-md"
          transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -30, 0] }}
          className="absolute top-[30%] right-[20%] w-12 h-12 border border-cyan-400/30 rounded-full"
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        />
        <motion.div
          animate={{ rotate: 180, y: [0, 15, 0] }}
          className="absolute bottom-[25%] left-[25%] w-6 h-6 border border-indigo-400/30 rounded-sm"
          transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
        />
        <motion.div
          animate={{ rotate: -180, y: [0, -25, 0] }}
          className="absolute bottom-[15%] right-[15%] w-10 h-10 border border-blue-400/30 rotate-45"
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
        />
      </div>
    </div>
  );
};
