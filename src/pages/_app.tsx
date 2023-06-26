import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { PriceProvider } from '@/context/PriceProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <PriceProvider>
        <Component {...pageProps} />
      </PriceProvider>
    </>
  );
}
