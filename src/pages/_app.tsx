import type { AppProps } from 'next/app';
import '@/styles/fonts.css';
import CssBaseline from '@mui/material/CssBaseline';
import { PriceProvider } from '@/context/PriceProvider';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'TheJamsil3Regular', sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PriceProvider>
        <Component {...pageProps} />
      </PriceProvider>
    </ThemeProvider>
  );
}
