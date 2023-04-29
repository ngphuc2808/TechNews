import { useCallback, useState } from 'react';
import * as S from './Navbar.module';
import { category, navBarArray } from '@/src/utils/dataConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { iCategory } from '@/src/utils/interface';
import { setNameCategory } from '@/src/features/redux/slices/cateogrySlice';

function Navbar() {
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
          <S.SearchInput placeholder="Tìm kiếm..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchArea>
      </S.Container>
    </S.Wrapper>
  );
}

export default Navbar;
