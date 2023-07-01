import type { AppProps } from 'next/app';
import '@/styles/fonts.css';
import '@/styles/global.css';
import CssBaseline from '@mui/material/CssBaseline';
import { PriceProvider } from '@/context/PriceProvider';
import { ThemeProvider, createTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
const theme = createTheme({
  typography: {
    fontFamily: "'TheJamsil3Regular', sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageVariants = {
    initial: {
      opacity: 0,
      y: '-8%',
    },
    visible: {
      opacity: 1,
      y: '0',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PriceProvider>
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={pageVariants}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </PriceProvider>
    </ThemeProvider>
  );
}
