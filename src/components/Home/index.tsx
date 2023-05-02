import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './HomePage.module';
import Navbar from '../Global/Navbar';
import HeaderTop from '../Global/HeaderTop';
import ScrollToTop from '../Global/ScrollToTopButton';
import ButtonDarkMode from '../Global/ButtonDarkMode';
import Footer from '../Global/Footer';
import Content from './Content';

import Register from '../Register';
import Login from '../Login';
function HomePage() {
  const { mode } = useSelector((state: any) => state.darkMode);

  const auth = useSelector((state: any) => state.auth);

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
      {auth.register && <Register />}
      {auth.login && <Login />}
      <S.Header>
        <HeaderTop />
        <Navbar />
      </S.Header>
      <S.Container>
        <ButtonDarkMode />
        <ScrollToTop />
        <Content mode={mode} />
      </S.Container>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
