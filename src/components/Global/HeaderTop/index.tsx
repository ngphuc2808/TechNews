import * as S from './HeaderTop.module';
import Image from 'next/image';
import images from '@/src/assets/imgs';
import { faCircleQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';
import { logout } from '@/pages/api/features/auth';
import { useGetProfileQuery } from '@/pages/api/services/userApis';
import Link from 'next/link';

function HeaderTop() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.authentication);

  const { data: user } = useGetProfileQuery({
    skip: !isAuthenticated,
  });

  const handleLogout = () => {
    // setAnchorElAuth(null);

    window.location.href = 'http://localhost:3000';

    dispatch(logout());
  };

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
          {/* <S.MenuHeaderItem>
            <S.ItemTitle>
              <S.StyledFontAwesomeIconLeft icon={faCircleQuestion} />
              Hỗ trợ
            </S.ItemTitle>
          </S.MenuHeaderItem>
          <S.Separate /> */}
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
            <>
              <b>Hi, {user?.fullname}</b>
              <S.Separate />

              <Link href="/profile">
                {' '}
                <S.ButtonEntry>Trang cá nhân</S.ButtonEntry>
              </Link>
              <S.Separate />
              <S.ButtonEntry onClick={handleLogout}>Đăng xuất</S.ButtonEntry>
            </>
          )}
        </S.Entry>
      </S.Container>
    </S.Wrapper>
  );
}

export default HeaderTop;
