import { Fragment, MouseEvent, memo, useCallback, useEffect } from 'react';
import * as S from './NavbarPost.module';
import Link from 'next/link';
import { category, navBarArray } from '@/src/utils/dataConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { iCategory, iMode } from '@/src/utils/interface';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setNavItem } from '@/src/features/redux/slices/navItemSlice';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';

function NavbarPost({ mode }: iMode) {
  const router = useRouter();
  const dispatch = useDispatch();

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

  const handleSetPath = useCallback(
    (e: MouseEvent, item: iCategory) => {
      if (router.query.category === item.value) {
        e.preventDefault();
      }
    },
    [router.query.category],
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
                onClick={item.key !== 'Category' ? () => dispatch(setNavItem(item.key)) : undefined}
              >
                {item.key !== 'Category' ? <Link href={`/`}>{item.title}</Link> : <>{item.title}</>}
                {item.submenu && (
                  <S.SubMenu darkMode={mode}>
                    {category.map((item, index) => (
                      <S.SubItem key={index}>
                        <Link href={`/category/${item.value}`} onClick={(e) => handleSetPath(e, item)}>
                          {item.label}
                        </Link>
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
            <S.SearchInput darkMode={mode} placeholder="Tìm kiếm..." />
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
                onClick={item.key !== 'Category' ? () => dispatch(setNavItem(item.key)) : undefined}
              >
                {item.key !== 'Category' ? <Link href={`/`}>{item.title}</Link> : <>{item.title}</>}
                {item.submenu && (
                  <S.SubMenuMobile darkMode={mode}>
                    {category.map((item, index) => (
                      <S.SubItemMobile darkMode={mode} key={index} onClick={(e) => handleSetPath(e, item)}>
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

export default memo(NavbarPost);
