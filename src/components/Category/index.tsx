import { Fragment, useState } from 'react';
import * as S from './Category.module';
import HeaderTop from '../Global/HeaderTop';
import NavbarPost from '../Global/NavbarPost';
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
// import { useGetAllPostsByCatQuery } from '@/pages/api/services/productApis';

function Category() {
  const router = useRouter();

  const categoryPathDefault = { value: '', label: '' };

  const [categoryPath, setCategoryPath] = useState<iCategory>(categoryPathDefault);

  const auth = useSelector((state: any) => state.auth);

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

  useEffect(() => {
    if (router.query.category) {
      const newArr = category.find((value) => value.value === router.query.category);
      setCategoryPath(newArr || categoryPathDefault);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.category]);

  // const { data: postsData, isFetching: isFetchingPostsData } = useGetAllPostsByCatQuery({
  //   catId: router.query?.category,
  //   pageNo: 1,
  //   pageSize: 5,
  // });
  // console.log(postsData);

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
            <S.Item>{categoryPath.label}</S.Item>
          </S.ListLink>
        </S.BreadCrumb>
        <S.Title darkMode={mode}>
          <S.TitleContent>
            <S.Name>{categoryPath.label}</S.Name>
          </S.TitleContent>
        </S.Title>
        <ContentCategory mode={mode} />
      </S.Container>
      <Footer />
    </Fragment>
  );
}

export default Category;
