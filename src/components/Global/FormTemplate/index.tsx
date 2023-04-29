import * as S from './FormTemplate.module';
import Image from 'next/image';
import images from '@/src/assets/imgs';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';

interface iChildrenProps {
  children: React.ReactNode;
  title: string;
}
function FormTemplate({ children, title }: iChildrenProps) {
  const dispatch = useDispatch();

  const auth = useSelector((state: any) => state.auth);

  const handleCloseAuth = () => {
    if (auth.register) {
      dispatch(setRegister(false));
      return;
    }
    if (auth.login) {
      dispatch(setLogin(false));
      return;
    }
  };
  return (
    <S.Wrapper>
      <S.Modal onClick={handleCloseAuth} />
      <S.Content>
        <S.Banner>
          <Image quality={100} src={images.banner} sizes="" alt="logo" priority style={{ objectFit: 'contain' }} />
        </S.Banner>
        <S.Detail>
          <S.CustomIcon icon={faXmark} onClick={handleCloseAuth} />
          <S.Title>{title}</S.Title>
          {children}
        </S.Detail>
      </S.Content>
    </S.Wrapper>
  );
}

export default FormTemplate;
