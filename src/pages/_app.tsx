import type { AppProps } from 'next/app';
import { PriceProvider } from '@/context/PriceProvider';
import '@/styles/fonts.css';
import '@/styles/global.css';
import Layout from '@/Components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PriceProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PriceProvider>
  );
}
