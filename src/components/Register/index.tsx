import { Formik, ErrorMessage } from 'formik';
import FormTemplate from '../Global/FormTemplate';
import * as S from './Register.module';
import { signup } from '../../../pages/api/utils/auth';
import { useState } from 'react';

function Register() {
  // const [formData, setFormData] = useState({
  //   name: 'Dante',
  //   email: '',
  //   phone: '',
  //   username: 'thanhnha1',
  //   password: '1234567',
  //   retypePassword: '1234567',
  // });

  // const handleSubmit = async () => {
  //   const axiosRes = await signup({
  //     ...formData,
  //     name: formData.username,
  //     roles: ['USER'],
  //   });
  // };

  const initialValues = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  };
  // const handleSubmit = () => {
  //   console.log('Register!');
  // };
  return (
    <FormTemplate title="Đăng ký">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
        {({ errors, touched }) => (
          <S.FormRegister>
            <S.Input placeholder="Họ tên..." name="name" />
            <S.Input placeholder="Tài khoản..." name="username" />
            <S.Input placeholder="Mật khẩu..." type="password" name="password" />
            <S.Input placeholder="Xác nhận mật khẩu..." type="password" name="confirmPassword" />
            <S.Button type="submit">Đăng ký</S.Button>
          </S.FormRegister>
        )}
      </Formik>
    </FormTemplate>
  );
}

export default Register;
