import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import '../styles/globals.css';
import store from '@/src/features/redux/store';

import LoadingPage from '@/src/components/Global/LoadingPage';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReduxProvider store={store}>
      <Head>
        <title>Technology News</title>
      </Head>
      {loading ? <Component {...pageProps} /> : <LoadingPage />}
    </ReduxProvider>
  );
}
