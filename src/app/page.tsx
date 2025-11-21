'use client';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';

// 为CSS动画添加自定义类
import './page-modules/animations.css';
import { BackgroundDecorations } from './page-modules/BackgroundDecorations';
import { FeaturesSection } from './page-modules/FeaturesSection';
import { GetStartedSection } from './page-modules/GetStartedSection';
import { HeroSection } from './page-modules/HeroSection';
import { MobileSection } from './page-modules/MobileSection';
import { ParallaxSection } from './page-modules/ParallaxSection';
import { ScreenshotSection } from './page-modules/ScreenshotSection';
import { ScrollIndicator } from './page-modules/ScrollComponents';
import { projectConfig } from './page-modules/shared';

const Page = () => {
  const { push } = useRouter();

  const { setTheme, theme } = useTheme();

  const prevTheme = useRef(theme);

  // 首页强制使用暗色模式 - 只操作 html，不操作 body
  useEffect(() => {
    if (prevTheme.current !== 'dark') {
      setTheme('dark');
    }
    return () => {
      if (prevTheme.current) {
        setTheme(prevTheme.current as 'dark' | 'light');
      }
    };
  }, [theme, setTheme]);

  function goStart() {
    push('/guide/quick-start');
  }

  function goDocs() {
    push('/guide');
  }

  function goPreview() {
    window.open(projectConfig.preview);
  }

  function goGitHub() {
    window.open(projectConfig.github);
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black min-h-screen">
      <ScrollIndicator />
      <BackgroundDecorations />

      <HeroSection
        onDocs={goDocs}
        onStart={goStart}
      />
      <ScreenshotSection />
      <FeaturesSection />
      <ParallaxSection />
      <MobileSection
        onGitHub={goGitHub}
        onPreview={goPreview}
      />
      <GetStartedSection
        onDocs={goDocs}
        onStart={goStart}
      />
    </div>
  );
};

Page.theme = 'dark';

export default Page;
