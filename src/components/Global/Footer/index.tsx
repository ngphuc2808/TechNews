import * as S from './Footer.module';
import { listMemberGroup } from '@/src/utils/dataConfig';
import Image from 'next/image';
import images from '@/src/assets/imgs';
import { faFacebook, faGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <S.Wrapper>
      <S.Content>
        {listMemberGroup.map((item, index) => (
          <S.BlockInfo key={index}>
            <S.Name>{item.name}</S.Name>
            <S.ListInfo>
              <S.ItemInfo>{item.phone}</S.ItemInfo>
              <S.ItemInfo>{item.mail}</S.ItemInfo>
              <S.ItemInfo>{item.role}</S.ItemInfo>
            </S.ListInfo>
          </S.BlockInfo>
        ))}
      </S.Content>
      <S.Mid>
        <S.Logo>
          <Image quality={100} src={images.logo} sizes="" alt="logo" priority />
        </S.Logo>
        <S.Connect>
          <S.Title>Kêt nối với chúng tôi</S.Title>
          <S.StyledFontAwesomeIcon icon={faFacebook} />
          <S.StyledFontAwesomeIcon icon={faSquareInstagram} />
          <S.StyledFontAwesomeIcon icon={faGithub} />
        </S.Connect>
      </S.Mid>
      <S.Bottom>
        <S.Description>2023 - Clone by Group 03</S.Description>
      </S.Bottom>
    </S.Wrapper>
  );
}

export default Footer;
