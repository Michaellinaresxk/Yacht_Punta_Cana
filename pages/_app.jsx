import '../styles/globals.css';
import { theme } from '../styles/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/layout/Layout';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
