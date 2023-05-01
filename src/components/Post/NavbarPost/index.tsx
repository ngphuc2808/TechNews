import { memo, useCallback, useEffect, useState } from 'react';
import * as S from './NavbarPost.module';
import Link from 'next/link';
import { category, navBarArray } from '@/src/utils/dataConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { iCategory, iMode } from '@/src/utils/interface';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setNavItem } from '@/src/features/redux/slices/navItemSlice';

function NavbarPost({ mode }: iMode) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.category) {
      dispatch(setNavItem('Category'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { key } = useSelector((state: any) => state.navItem);

  const handleSetPath = useCallback(
    (e: any, item: iCategory) => {
      if (router.query.category === item.key) {
        e.preventDefault();
      }
    },
    [router.query.category],
  );

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
              {item.key !== 'Category' ? <Link href={`/`}>{item.title}</Link> : <>{item.title}</>}
              {item.submenu && (
                <S.SubMenu darkMode={mode}>
                  {category.map((item, index) => (
                    <S.SubItem key={index}>
                      <Link href={`/category/${item.key}`} onClick={(e) => handleSetPath(e, item)}>
                        {item.name}
                      </Link>
                    </S.SubItem>
                  ))}
                </S.SubMenu>
              )}
            </S.MenuNavItem>
          ))}
        </S.MenuNav>
        <S.SearchArea>
          <S.SearchInput darkMode={mode} placeholder="Tìm kiếm..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchArea>
      </S.Container>
    </S.Wrapper>
  );
}

export default memo(NavbarPost);
