import Navbar from './Navbar';
import HeaderTop from '../Global/HeaderTop';
import * as S from './HomePage.module';
import { Fragment } from 'react';
import ScrollToTop from '../Global/ScrollToTopButton';
import ButtonDarkMode from '../Global/ButtonDarkMode';
function HomePage() {
  return (
    <Fragment>
      <S.Header>
        <HeaderTop />
        <Navbar />
      </S.Header>
      <S.Container>
        <ButtonDarkMode />
        <ScrollToTop />
        <S.Content>ABCX</S.Content>
      </S.Container>
    </Fragment>
  );
}

export default HomePage;
