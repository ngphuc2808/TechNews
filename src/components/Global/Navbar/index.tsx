import { Fragment, memo, useCallback, useState } from 'react';
import * as S from './Navbar.module';
import { category, navBarArray } from '@/src/utils/dataConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { iCategory } from '@/src/utils/interface';
import { setNameCategory } from '@/src/features/redux/slices/cateogrySlice';
import { setNavItem } from '@/src/features/redux/slices/navItemSlice';
import { useGetCategoriesQuery } from '@/pages/api/services/catApis';
import { text } from 'stream/consumers';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';

function Navbar() {
  const dispatch = useDispatch();

  const { data: catData, isFetching: isFetchingCat } = useGetCategoriesQuery();

  // console.log(catData);

  const handleOpenRegister = () => {
    dispatch(setLogin(false));
    dispatch(setRegister(true));
  };

  const handleOpenLogin = () => {
    dispatch(setRegister(false));
    dispatch(setLogin(true));
  };

  const { key } = useSelector((state: any) => state.navItem);

  const { mode } = useSelector((state: any) => state.darkMode);

  const handleSetPath = (item: iCategory) => {
    dispatch(setNameCategory(item));
  };

  const handleSetNavItem = useCallback(
    (item: string) => dispatch(setNavItem(item)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

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
              onClick={item.key !== 'Category' ? () => handleSetNavItem(item.key) : undefined}
            >
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
                          <Link href={`/category/${item?.id}`}>{item?.title}</Link>
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

export default memo(Navbar);
