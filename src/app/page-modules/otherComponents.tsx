import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';

export const TechTag = ({ name }: { name: string }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20 cursor-default group">
      <span className="relative">
        {name}
        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </span>
    </div>
  );
};

// 自定义组件：视差背景
export const ParallaxBackground = () => {
  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      bgImageAlt="Background"
      blur={0}
      strength={200}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-blue-900/90" />
    </Parallax>
  );
};

// 截图展示组件
export const ScreenshotDisplay = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      className="relative mt-10 rounded-lg overflow-hidden border border-white/20 shadow-2xl shadow-blue-500/10"
      initial="hidden"
      ref={ref}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <img
        alt="Skyroc Admin Dashboard"
        className="w-full h-auto rounded-lg"
        src="https://camo.githubusercontent.com/1fedd722f7eef3913562538c302d17655b4668438d02f0ac81b94c942bf532de/68747470733a2f2f736f796265616e6a732d313330303631323532322e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f755069632f736f796265616e2d61646d696e2d76312d30322e706e67"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </motion.div>
  );
};
