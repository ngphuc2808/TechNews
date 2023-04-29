import { useState, useCallback } from 'react';
import * as S from './NavbarPost.module';
import Link from 'next/link';
import { category, navBarArray } from '@/src/utils/dataConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setNameCategory } from '@/src/features/redux/slices/cateogrySlice';
import { iCategory } from '@/src/utils/interface';

function NavbarPost() {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState<string>('Home');
  const { mode } = useSelector((state: any) => state.darkMode);

  const handleSetPath = useCallback((item: iCategory) => {
    dispatch(setNameCategory(item));
  }, []);

  return (
    <S.Wrapper darkMode={mode}>
      <S.Container>
        <S.MenuNav>
          {navBarArray.map((item, index) => (
            <S.MenuNavItem
              key={index}
              active={item.key === activePage}
              submenu={item.submenu === true}
              onClick={() => setActivePage(item.key)}
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
          <S.SearchInput darkMode={mode} placeholder="Tìm kiếm..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchArea>
      </S.Container>
    </S.Wrapper>
  );
}

export default NavbarPost;
