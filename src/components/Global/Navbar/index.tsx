import { memo, useCallback, useState } from 'react';
import * as S from './Navbar.module';
import { category, navBarArray } from '@/src/utils/dataConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { iCategory } from '@/src/utils/interface';
import { setNameCategory } from '@/src/features/redux/slices/cateogrySlice';
import { setNavItem } from '@/src/features/redux/slices/navItemSlice';

function Navbar() {
  const dispatch = useDispatch();

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
                      <Link href={`/category/${item.key}`}>{item.name}</Link>
                    </S.SubItem>
                  ))}
                </S.SubMenu>
              )}
            </S.MenuNavItem>
          ))}
        </S.MenuNav>
        <S.SearchArea>
          <S.SearchInput placeholder="Tìm kiếm..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchArea>
      </S.Container>
    </S.Wrapper>
  );
}

export default memo(Navbar);