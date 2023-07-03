import { Container, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ThemeProvider, createTheme } from '@mui/material';
import Footer from './Footer';

interface ILayoutProps {
  children: React.ReactNode;
}
const theme = createTheme({
  typography: {
    fontFamily: "'TheJamsil3Regular', sans-serif",
  },
});
function Layout({ children }: ILayoutProps) {
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
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="initial"
          animate="visible"
          variants={pageVariants}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '480px',
              minHeight: '100vh',
              margin: 'auto',
            }}
          >
            {children}
            <Footer />
          </Container>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default Layout;
