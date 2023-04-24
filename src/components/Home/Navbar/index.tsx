import { useState } from 'react';
import * as S from './Navbar.module';
import { navBarArray } from '@/src/utils/dataConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Navbar() {
  const [activePage, setActivePage] = useState<string>('Home');
  const { mode } = useSelector((state: any) => state.darkMode);

  return (
    <S.Wrapper darkMode={mode}>
      <S.Container>
        <S.MenuNav>
          {navBarArray.map((item, index) => (
            <S.MenuNavItem key={index} active={item.key === activePage} submenu={item.submenu === true} onClick={() => setActivePage(item.key)}>
              {item.title}
              {item.submenu && <S.SubMenu>
                  <S.SubItem>
                    Sản Phẩm A
                  </S.SubItem>
                  <S.SubItem>
                    Sản Phẩm B
                  </S.SubItem>
                  <S.SubItem>
                    Sản Phẩm C
                  </S.SubItem>
                </S.SubMenu>}
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
