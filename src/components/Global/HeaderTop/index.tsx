import * as S from './HeaderTop.module';
import Image from 'next/image';
import images from '@/src/assets/imgs';
import { faCircleQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';
// import { useGetProfileQuery } from '@/pages/api/services/userApis';

function HeaderTop() {
  const dispatch = useDispatch();

  // const { data: user } = useGetProfileQuery({
  //   skip: !localStorage.getItem('user'),
  // });

  const { isAuthenticated } = useSelector((state) => state.authentication);

  const handleOpenRegister = () => {
    dispatch(setLogin(false));
    dispatch(setRegister(true));
  };

  const handleOpenLogin = () => {
    dispatch(setRegister(false));
    dispatch(setLogin(true));
  };

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
          <Image quality={100} src={images.logo} sizes="" alt="logo" priority />
        </S.Logo>
        <S.Entry>
          <S.StyledFontAwesomeIconLeft icon={faUser} />
          {!isAuthenticated ? (
            <>
              <S.ButtonEntry onClick={handleOpenRegister}>Đăng ký</S.ButtonEntry>
              <S.Separate />
              <S.ButtonEntry onClick={handleOpenLogin}>Đăng nhập</S.ButtonEntry>
            </>
          ) : (
            <S.ButtonEntry>Logged in</S.ButtonEntry>
          )}
        </S.Entry>
      </S.Container>
    </S.Wrapper>
  );
}

export default HeaderTop;
