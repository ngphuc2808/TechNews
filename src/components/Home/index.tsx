import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './HomePage.module';
import Navbar from './Navbar';
import HeaderTop from '../Global/HeaderTop';
import ScrollToTop from '../Global/ScrollToTopButton';
import ButtonDarkMode from '../Global/ButtonDarkMode';
import Footer from '../Global/Footer';
import Content from './Content';

function HomePage() {
  const { mode } = useSelector((state: any) => state.darkMode);

  useEffect(() => {
    if (mode) {
      window.document.querySelector('html')?.classList.add('dark-mode');
      window.document.querySelector('body')?.classList.add('dark-mode');
    } else {
      window.document.querySelector('html')?.classList.remove('dark-mode');
      window.document.querySelector('body')?.classList.remove('dark-mode');
    }
  }, [mode]);

  return (
    <Fragment>
      <S.Header>
        <HeaderTop />
        <Navbar />
      </S.Header>
      <S.Container>
        <ButtonDarkMode />
        <ScrollToTop />
        <Content />
      </S.Container>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
