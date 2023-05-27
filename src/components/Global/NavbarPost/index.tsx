import { Fragment, MouseEvent, memo, useCallback, useEffect, useState } from 'react';
import * as S from './NavbarPost.module';
import Link from 'next/link';
import { category, navBarArray } from '@/src/utils/dataConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { iCategory, iMode } from '@/src/utils/interface';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setNavItem } from '@/src/features/redux/slices/navItemSlice';
import { useGetCategoriesQuery } from '@/pages/api/services/catApis';
import { setNameCategory } from '@/src/features/redux/slices/cateogrySlice';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';

function NavbarPost({ mode }: iMode) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: catData, isFetching: isFetchingCat } = useGetCategoriesQuery();

  const handleOpenRegister = () => {
    dispatch(setLogin(false));
    dispatch(setRegister(true));
  };

  const handleOpenLogin = () => {
    dispatch(setRegister(false));
    dispatch(setLogin(true));
  };

  useEffect(() => {
    if (router.query.category) {
      dispatch(setNavItem('Category'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { key } = useSelector((state: any) => state.navItem);

  // const handleSetPath = useCallback(
  //   (e: MouseEvent, item: iCategory) => {
  //     if (router.query.category === item?.value) {
  //       e.preventDefault();
  //     }
  //   },
  //   [router.query.category],
  // );

  const handleSetPath = (item: iCategory) => {
    dispatch(setNameCategory(item));
  };

  const [searchText, setSearchText] = useState('');
  const handleTypeSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <S.Wrapper darkMode={mode}>
      <S.Container>
        <S.MenuNav>
          {navBarArray.map((item, index) => (
            <S.MenuNavItem
              key={index}
              active={item.key === key}
              submenu={item.submenu === true}
              onClick={item.key !== 'Category' ? () => dispatch(setNavItem(item.key)) : undefined}
            >
              {/* {item.key !== 'Category' ? <Link href={`/`}>{item.title}</Link> : <>{item.title}</>} */}
              <Link href={item?.href}>{item.title}</Link>

              {item.submenu && (
                <S.SubMenu darkMode={mode}>
                  {isFetchingCat
                    ? category.map((item, index) => (
                        <S.SubItem key={index} onClick={() => handleSetPath(item)}>
                          <Link href={`/category/${item.value}`}>{item.label}</Link>
                        </S.SubItem>
                      ))
                    : catData?.map((item, index) => (
                        <S.SubItem key={index} onClick={() => handleSetPath(item)}>
                          {/* <Link href={`/category/${item?.id}`}>{item?.title}</Link> */}
                          <Link href={`/category/${item?.id}`}>
                            <div dangerouslySetInnerHTML={{ __html: item?.title }} />
                          </Link>
                        </S.SubItem>
                      ))}
                </S.SubMenu>
              )}
            </S.MenuNavItem>
          ))}
        </S.MenuNav>
        <S.SearchArea>
          <S.SearchInput placeholder="Tìm kiếm..." value={searchText} onChange={handleTypeSearch} />
          <Link href={`/category/-1?search=${searchText}`}>
            {' '}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </S.SearchArea>
      </S.Container>
    </S.Wrapper>
  );
}

export default memo(NavbarPost);
