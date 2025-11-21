import { Logo, QQ } from '@icons';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Layout, Navbar } from 'nextra-theme-docs';
import { Toaster } from 'sonner';

import '@css/global.css';
import GlobalFooter from './globalFooter';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  appleWebApp: {
    title: 'Soybean-React-Docs'
  },
  applicationName: 'skyroc-admin-react-docs',
  authors: [{ name: 'Ohh-889', url: 'https://github.com/Ohh-889' }],
  description: 'skyroc-admin-react官方文档',
  generator: 'skyroc-admin',
  icons: {
    icon: '/favicon.svg'
  },
  keywords: ['skyroc-admin', 'skyroc-admin-docs', 'react', 'admin', 'template'],
  title: {
    default: 'skyroc-admin-docs',
    template: '%s | skyroc-admin'
  }
};
const navbar = (
  <Navbar
    chatIcon={<QQ className="w-[24px] h-[24px] " />}
    chatLink="https://qun.qq.com/universal-share/share?ac=1&authKey=pzAdzMMdtdAGaqaxEFDu2mJVqRDVftIy0jZC3sXaZhiYsB3ODixc2%2F9hjI3ZxyId&busi_data=eyJncm91cENvZGUiOiIxMDI1MDczNTYyIiwidG9rZW4iOiJoN01icUgwVFlQOXE2VXM5NXo0VjF3bWxqQm9Hdlo1ZEZhWmxzaTg3WTlkZnBFeVJqMW5rSThVanUxdSt6N0dXIiwidWluIjoiMTUwOTMyNjI2NiJ9&data=mB42uAgndU14YMpWumQRfu39SFzrCmh4JdwPl3nKJVdb4J3zdO68DlmT3atlOeGqwL_bon2QmITo6t4y54YDjQ&svctype=4&tempid=h5_group_info"
    logo={<Logo className="w-[32px] h-[32px] text-[var(--soybean)]" />}
    projectLink="https://github.com/Ohh-889/skyroc-admin"
  />
);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <html
      suppressHydrationWarning
      dir="ltr"
      lang="en"
    >
      <Head />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout
          docsRepositoryBase="https://github.com/Ohh-889/skyroc-admin-docs"
          editLink="在github上编辑此页面"
          footer={<GlobalFooter />}
          navbar={navbar}
          pageMap={pageMap}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          feedback={{
            content: '反馈',
            labels: 'feedback'
          }}
        >
          {children}
        </Layout>

        <Toaster />
      </body>
    </html>
  );
}
