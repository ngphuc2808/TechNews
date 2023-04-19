import * as S from './HeaderTop.module';
import Image from 'next/image';
import images from '@/src/assets/imgs';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <S.HeaderTop>
      <S.Container>
        <S.MenuHeader>
          <S.MenuHeaderItem>About</S.MenuHeaderItem>
          <S.MenuHeaderItem>Contact</S.MenuHeaderItem>
        </S.MenuHeader>
        <S.Logo>
          <Image src={images.logo} alt="logo" priority />
        </S.Logo>
        <S.Entry>
          <S.StyledFontAwesomeIcon icon={faUser} />
          <S.ButtonEntry>Register</S.ButtonEntry>
          <S.Separate />
          <S.ButtonEntry>Log in</S.ButtonEntry>
        </S.Entry>
      </S.Container>
    </S.HeaderTop>
  );
}

export default Header;
