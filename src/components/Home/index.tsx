import { Fragment, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import * as S from './HomePage.module';
import Navbar from './Navbar';
import HeaderTop from '../Global/HeaderTop';
import ScrollToTop from '../Global/ScrollToTopButton';
import ButtonDarkMode from '../Global/ButtonDarkMode';
import Footer from '../Global/Footer';
import ListHotNews from './ListHotNews';
import ListPost from './ListPost';

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
        <S.Content>
          <S.LatestNews>
            <S.LatestNewsLeft>
              <Image
                quality={100}
                src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
                alt="image"
                fill
                sizes=""
                priority
              />
              <S.Overlay />
              <S.DescriptionNews number={0}>
                <S.CategoryTag>
                  <S.CategoryName>Smart Watch</S.CategoryName>
                </S.CategoryTag>
                <S.NewsTitle>
                  <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
                </S.NewsTitle>
                <S.AuthorTag>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.AuthorTag>
              </S.DescriptionNews>
            </S.LatestNewsLeft>
            <S.LatestNewsRight>
              <S.Topic>
                <Image
                  quality={100}
                  src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
                  alt="image"
                  fill
                  sizes=""
                  priority
                />
                <S.Overlay />
                <S.DescriptionNews number={1}>
                  <S.CategoryTag>
                    <S.CategoryName>Smart Watch</S.CategoryName>
                  </S.CategoryTag>
                  <S.NewsTitle>
                    <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
                  </S.NewsTitle>
                  <S.AuthorTag>
                    By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                  </S.AuthorTag>
                </S.DescriptionNews>
              </S.Topic>
              <S.Topic>
                <Image
                  quality={100}
                  src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
                  alt="image"
                  fill
                  sizes=""
                  priority
                />
                <S.Overlay />
                <S.DescriptionNews number={2}>
                  <S.CategoryTag>
                    <S.CategoryName>Smart Watch</S.CategoryName>
                  </S.CategoryTag>
                  <S.NewsTitle>
                    <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
                  </S.NewsTitle>
                  <S.AuthorTag>
                    By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                  </S.AuthorTag>
                </S.DescriptionNews>
              </S.Topic>
            </S.LatestNewsRight>
          </S.LatestNews>
        </S.Content>
        <S.ContentBlack>
          <ListPost />
        </S.ContentBlack>
        <S.Content>
          <ListHotNews title="Nổi Bật" />
        </S.Content>
      </S.Container>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
