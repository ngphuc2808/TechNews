import { Fragment } from 'react';
import * as S from './Post.module';
import HeaderTop from '../Global/HeaderTop';
import NavbarPost from './NavbarPost';
import ButtonDarkMode from '../Global/ButtonDarkMode';
import ScrollToTop from '../Global/ScrollToTopButton';
import Footer from '../Global/Footer';
import ContentCategory from './ContentCategory';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { iTitle } from '@/src/utils/interface';
import { category } from '@/src/utils/dataConfig';
import { useRouter } from 'next/router';
import { setNameCategory } from '@/src/features/redux/slices/cateogrySlice';

function Post({ title }: iTitle) {
  const router = useRouter();
  const dispatch = useDispatch();

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

  const categoryPath = useSelector((state: any) => state.category);

  useEffect(() => {
    if (!categoryPath.path.name) {
      const newArr = category.find((value) => value.key === router.query.category);
      dispatch(setNameCategory(newArr));
    }
  }, []);

  return (
    <Fragment>
      <S.Header>
        <HeaderTop />
        <NavbarPost />
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
            <S.Item>
              <Link href={`/category/${title}`}>{title}</Link>
            </S.Item>
          </S.ListLink>
        </S.BreadCrumb>
        <S.Title darkMode={mode}>
          <S.TitleContent>
            <S.Name>{title}</S.Name>
          </S.TitleContent>
        </S.Title>
        <ContentCategory />
      </S.Container>
      <Footer />
    </Fragment>
  );
}

export default Post;
