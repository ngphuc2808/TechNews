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
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';

function Navbar() {
  const dispatch = useDispatch();

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

  return (
    <Fragment>
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
                <Link href={`/`}>{item.title}</Link>
                {item.submenu && (
                  <S.SubMenu darkMode={mode}>
                    {category.map((item, index) => (
                      <S.SubItem key={index} onClick={() => handleSetPath(item)}>
                        <Link href={`/category/${item.value}`}>{item.label}</Link>
                      </S.SubItem>
                    ))}
                  </S.SubMenu>
                )}
              </S.MenuNavItem>
            ))}
          </S.MenuNav>
          <S.LabelMobile htmlFor="inputMenu">
            <S.CustomIconBars icon={faBars} />
          </S.LabelMobile>
          <S.SearchArea>
            <S.SearchInput placeholder="Tìm kiếm..." />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </S.SearchArea>
        </S.Container>
      </S.Wrapper>
      <S.MenuMobile>
        <S.InputMobile id="inputMenu" type="checkbox" hidden />
        <S.LabelMobile htmlFor="inputMenu">
          <S.Modal />
        </S.LabelMobile>
        <S.MenuNavMobile darkMode={mode}>
          <S.LabelMobile htmlFor="inputMenu">
            <S.CustomIconCloseMenu icon={faXmark} />
          </S.LabelMobile>
          <S.Entry>
            <S.StyledFontAwesomeIconLeft icon={faUser} />
            <S.ButtonEntry onClick={handleOpenRegister}>Đăng ký</S.ButtonEntry>
            <S.SeparateMobile darkMode={mode} />
            <S.ButtonEntry onClick={handleOpenLogin}>Đăng nhập</S.ButtonEntry>
          </S.Entry>
          <S.MenuBarMobile>
            {navBarArray.map((item, index) => (
              <S.MenuNavItem
                key={index}
                active={item.key === key}
                submenu={item.submenu === true}
                onClick={item.key !== 'Category' ? () => handleSetNavItem(item.key) : undefined}
              >
                <Link href={`/`}>{item.title}</Link>
                {item.submenu && (
                  <S.SubMenuMobile darkMode={mode}>
                    {category.map((item, index) => (
                      <S.SubItemMobile darkMode={mode} key={index} onClick={() => handleSetPath(item)}>
                        <Link href={`/category/${item.value}`}>{item.label}</Link>
                      </S.SubItemMobile>
                    ))}
                  </S.SubMenuMobile>
                )}
              </S.MenuNavItem>
            ))}
          </S.MenuBarMobile>
        </S.MenuNavMobile>
      </S.MenuMobile>
    </Fragment>
  );
}

export default memo(Navbar);
