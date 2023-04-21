import Head from 'next/head';
import HomePage from '@/src/components/Home';
import { useEffect, useState } from 'react';
import LoadingPage from '@/src/components/Global/LoadingPage';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>Technology News</title>
      </Head>
      {loading ? <HomePage /> : <LoadingPage />}
    </>
  );
};

export default Home;
