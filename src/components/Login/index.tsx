import { Formik, ErrorMessage } from 'formik';

import FormTemplate from '../Global/FormTemplate';
import * as S from './Login.module';

function Login() {
  const initialValues = {
    username: '',
    password: '',
  };
  const handleSubmit = () => {
    console.log('Login!');
  };
  return (
    <FormTemplate title="Đăng nhập">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
        {({ errors, touched }) => (
          <S.FormLogin>
            <S.Input placeholder="Tài khoản..." name="username" />
            <S.Input placeholder="Mật khẩu..." type="password" name="password" />
            <S.Button type="submit">Đăng nhập</S.Button>
          </S.FormLogin>
        )}
      </Formik>
    </FormTemplate>
  );
}

export default Login;
