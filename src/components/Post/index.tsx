import { Fragment, useState } from 'react';
import * as S from './Post.module';
import HeaderTop from '../Global/HeaderTop';
import NavbarPost from './NavbarPost';
import ButtonDarkMode from '../Global/ButtonDarkMode';
import ScrollToTop from '../Global/ScrollToTopButton';
import Footer from '../Global/Footer';
import ContentCategory from './ContentCategory';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { category } from '@/src/utils/dataConfig';
import { useRouter } from 'next/router';
import Register from '../Register';
import Login from '../Login';
import { iCategory } from '@/src/utils/interface';

function Post() {
  const router = useRouter();

  const categoryPathDefault = { name: '', key: '' };

  const [categoryPath, setCategoryPath] = useState<iCategory>(categoryPathDefault);

  const { mode } = useSelector((state: any) => state.darkMode);
  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (router.query.category) {
      const newArr = category.find((value) => value.key === router.query.category);
      setCategoryPath(newArr || categoryPathDefault);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.category]);

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
        <NavbarPost mode={mode} />
      </S.Header>
      <S.Container>
        <ButtonDarkMode />
        <ScrollToTop />
        <S.BreadCrumb>
          <S.ListLink>
            <S.Item>
              <Link href="/">Trang chủ</Link>
            </S.Item>
            <S.Slash>/</S.Slash>
            <S.Item>{categoryPath.name}</S.Item>
          </S.ListLink>
        </S.BreadCrumb>
        <S.Title darkMode={mode}>
          <S.TitleContent>
            <S.Name>{categoryPath.name}</S.Name>
          </S.TitleContent>
        </S.Title>
        <ContentCategory mode={mode} />
      </S.Container>
      <Footer />
    </Fragment>
  );
}

export default Post;
