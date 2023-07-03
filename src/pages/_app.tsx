import type { AppProps } from 'next/app';
import { PriceProvider } from '@/context/PriceProvider';
import '@/styles/fonts.css';
import '@/styles/global.css';
import Layout from '@/Components/Layout';
import { DefaultSeo } from 'next-seo';

const DEFAULT_SEO = {
  title: '기름값 계산기 - 쉽고 빠른 주유비 계산',
  description: '쉽고 빠르게 주유비, 기름값, 유류비 계산을 해보세요!',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://fuelcostcalculator.vercel.app/',
    title: '기름값 계산기 - 쉽고 빠른 주유비 계산',
    site_name: '기름값 계산기 - 쉽고 빠른 주유비 계산',
    images: [
      {
        url: 'https://fuelcostcalculator.vercel.app/logo.png',
        width: 285,
        height: 167,
        alt: '대표 이미지',
      },
    ],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <PriceProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PriceProvider>
    </>
  );
}
