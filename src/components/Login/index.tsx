import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormTemplate from '../Global/FormTemplate';
import * as S from './Login.module';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';
import { iUserLogin } from '@/src/utils/interface';
import { getUserLogin } from '@/pages/api/utils/auth';
import { setUser } from '@/pages/api/features/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleOpenRegister = () => {
    dispatch(setLogin(false));
    dispatch(setRegister(true));
  };

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Vui lòng nhập thông tin!')
      .matches(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*.{6,}$/, 'Vui lòng nhập đúng định dạng tài khoản!'),

    password: Yup.string().required('Vui lòng nhập thông tin!'),
  });

  const handleSubmit = async (values: iUserLogin) => {
    // console.log(values);
    const { data, status } = await getUserLogin(values);

    if (status == 200) {
      dispatch(setUser(data));
      alert('Dang nhap thanh cong');
      window.location.href = 'http://localhost:3000';
    } else {
      alert('Sai thong tin dang nhap');
    }
  };

  return (
    <FormTemplate title="Đăng nhập">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <S.FormLogin>
            <S.Input placeholder="Tài khoản..." name="username" error={errors.username && touched.username ? 1 : 0} />
            <ErrorMessage name="username" component={S.ErrorMsg} />
            <S.Input
              placeholder="Mật khẩu..."
              type="password"
              name="password"
              error={errors.password && touched.password ? 1 : 0}
            />
            <ErrorMessage name="password" component={S.ErrorMsg} />
            <S.Button type="submit">Đăng nhập</S.Button>
          </S.FormLogin>
        )}
      </Formik>
      <S.RegisterButton onClick={handleOpenRegister}>Đăng ký ở đây!</S.RegisterButton>
    </FormTemplate>
  );
}

export default Login;
