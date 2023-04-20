import HeaderTop from '@/src/components/Global/HeaderTop';
import Navbar from '@/src/components/Navbar';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Technology News</title>
      </Head>
      <HeaderTop />
      <Navbar />
    </>
  );
};

export default Home;
