import { Formik, ErrorMessage } from 'formik';
import FormTemplate from '../Global/FormTemplate';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';
import * as S from './Register.module';
import { signup } from '../../../pages/api/utils/auth';
import { useState } from 'react';

import { iUserRegister } from '@/src/utils/interface';
import { setUserInfo } from '@/src/features/redux/slices/userSlice';
import { useEffect } from 'react';
function Register() {
  const dispatch = useDispatch();

  const handleOpenLogin = () => {
    dispatch(setRegister(false));
    dispatch(setLogin(true));
  };

  const { info } = useSelector((state: any) => state.user);

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
    name: info.name || '',
    username: info.username || '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Vui lòng nhập thông tin!')
      .matches(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
        'Vui lòng nhập đúng định dạng tên!',
      ),
    username: Yup.string()
      .required('Vui lòng nhập thông tin!')
      .matches(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*.{4,}$/, 'Vui lòng nhập đúng định dạng tài khoản!'),

    email: Yup.string()
      .required('Vui lòng nhập thông tin!')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Vui lòng nhập đúng định dạng email!'),

    phone: Yup.string()
      .required('Vui lòng nhập thông tin!')
      .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Vui lòng nhập đúng định dạng số điện thoại!'),

    password: Yup.string()
      .required('Vui lòng nhập thông tin!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/,
        'Mật khẩu phải đủ 8 ký tự, 1 chữ in hoa, 1 chữ thường và 1 con số !',
      ),

    confirmPassword: Yup.string()
      .required('Vui lòng nhập thông tin!')
      .oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp!'),
  });

  const handleSubmit = async (values: iUserRegister) => {
    dispatch(setUserInfo({ name: values.name, username: values.username, email: values.email, phone: values.phone }));
    console.log(values);
    const axiosRes = await signup({
      username: values?.username,
      name: values?.name,
      password: values?.password,
      roles: ['USER'],
      email: 'phianh@gmail.com',
    });

    if (axiosRes.status === 200) {
      alert('Đăng ký thành công');
      window.location.href = 'http://localhost:3000';
    } else {
      alert('Đăng ký thất bại');
    }
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <FormTemplate title="Đăng ký">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <S.FormRegister>
            <S.Input placeholder="Họ tên..." name="name" error={errors.name && touched.name ? 1 : 0} />
            <ErrorMessage name="name" component={S.ErrorMsg} />
            <S.Input placeholder="Tài khoản..." name="username" error={errors.username && touched.username ? 1 : 0} />
            <ErrorMessage name="username" component={S.ErrorMsg} />
            <S.Input placeholder="Email..." name="email" error={errors.email && touched.email ? 1 : 0} />
            <ErrorMessage name="email" component={S.ErrorMsg} />
            <S.Input placeholder="Số điện thoại..." name="phone" error={errors.phone && touched.phone ? 1 : 0} />
            <ErrorMessage name="phone" component={S.ErrorMsg} />
            <S.Input
              placeholder="Mật khẩu..."
              type="password"
              name="password"
              error={errors.password && touched.password ? 1 : 0}
            />
            <ErrorMessage name="password" component={S.ErrorMsg} />
            <S.Input
              placeholder="Xác nhận mật khẩu..."
              type="password"
              name="confirmPassword"
              error={errors.confirmPassword && touched.confirmPassword ? 1 : 0}
            />
            <ErrorMessage name="confirmPassword" component={S.ErrorMsg} />
            <S.Button type="submit">Đăng ký</S.Button>
          </S.FormRegister>
        )}
      </Formik>
      <S.LoginButton onClick={handleOpenLogin}>Đăng nhập ở đây!</S.LoginButton>
    </FormTemplate>
  );
}

export default Register;
