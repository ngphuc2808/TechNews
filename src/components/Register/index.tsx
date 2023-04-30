import { Formik, ErrorMessage } from 'formik';
import FormTemplate from '../Global/FormTemplate';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';
import * as S from './Register.module';
import { iUserRegister } from '@/src/utils/interface';
import { setUserInfo } from '@/src/features/redux/slices/userSlice';
function Register() {
  const dispatch = useDispatch();

  const handleOpenLogin = () => {
    dispatch(setRegister(false));
    dispatch(setLogin(true));
  };

  const { info } = useSelector((state: any) => state.user);

  const initialValues = {
    name: info.name || '',
    username: info.username || '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('This field is required.')
      .matches(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
        'Please enter the correct name format!',
      ),

    username: Yup.string()
      .required('This field is required.')
      .matches(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*.{4,}$/, 'Please enter the correct username format!'),

    password: Yup.string()
      .required('This field is required.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/,
        'Password minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number.',
      ),

    confirmPassword: Yup.string()
      .required('This field is required.')
      .oneOf([Yup.ref('password')], 'Passwords must match.'),
  });

  const handleSubmit = (values: iUserRegister) => {
    dispatch(setUserInfo(values));
  };

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
