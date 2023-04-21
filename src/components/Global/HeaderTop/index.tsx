import * as S from './HeaderTop.module';
import Image from 'next/image';
import images from '@/src/assets/imgs';
import { faCircleQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
function HeaderTop() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.MenuHeader>
          <S.MenuHeaderItem>
            <S.ItemTitle>
              <S.StyledFontAwesomeIconLeft icon={faCircleQuestion} />
              Hỗ trợ
            </S.ItemTitle>
          </S.MenuHeaderItem>
          <S.Separate />
          <S.MenuHeaderItem>
            Kết nối
            <S.StyledFontAwesomeIconRight icon={faFacebook} />
            <S.StyledFontAwesomeIconRight icon={faSquareInstagram} />
            <S.StyledFontAwesomeIconRight icon={faGithub} />
          </S.MenuHeaderItem>
        </S.MenuHeader>
        <S.Logo>
          <Image src={images.logo} alt="logo" priority />
        </S.Logo>
        <S.Entry>
          <S.StyledFontAwesomeIconLeft icon={faUser} />
          <S.ButtonEntry>Đăng ký</S.ButtonEntry>
          <S.Separate />
          <S.ButtonEntry>Đăng nhập</S.ButtonEntry>
        </S.Entry>
      </S.Container>
    </S.Wrapper>
  );
}

export default HeaderTop;
