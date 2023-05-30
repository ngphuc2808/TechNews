import { FormEvent, Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import * as S from './Profile.module';
import HeaderTop from '../Global/HeaderTop';
import Navbar from '../Global/Navbar';
import Footer from '../Global/Footer';
import ButtonDarkMode from '../Global/ButtonDarkMode';
import ScrollToTop from '../Global/ScrollToTopButton';
import { faCamera, faCheck, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { iUserProfile } from '@/src/utils/interface';
import { post } from '@/src/utils/dataConfig';
import Pagination from '../Global/Pagination';
import CropImage from './CropImage';
import {
  useGetProfileQuery,
  useChangeProfileMutation,
  useUploadAvatarMutation,
  useChangePasswordMutation,
} from '@/pages/api/services/userApis';
import { useGetPostsByUserIdQuery, useGetAllPostsByUserIdQuery } from '@/pages/api/services/productApis';

function Profile() {
  const { mode } = useSelector((state: any) => state.darkMode);

  const [cropImage, setCropImage] = useState<string | ArrayBuffer | null>(null);
  const [modalCrop, setModalCrop] = useState<boolean>(false);
  const [previewAvt, setPreviewAvt] = useState<string>(
    'https://i.pinimg.com/236x/73/e7/e7/73e7e7763e2b425e9a8481806f5e81b4.jpg',
  );

  const [avatar, setAvatar] = useState<string>('');
  const [image, setImage] = useState();

  const [createAvatarImage, { isLoading: isLoadingImg }] = useUploadAvatarMutation();
  const [changeProfile, { isLoading: isLoadingChangeProfile }] = useChangeProfileMutation();
  const [changePassword, { isLoading: isLoadingChangePassword }] = useChangePasswordMutation();

  const handleCrop = (e: FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget;

    console.log(input.files[0]);
    setImage(input.files[0]);

    if (input.files?.length) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setModalCrop(true);
        setCropImage(reader.result);
      });
      reader.readAsDataURL(input.files[0]);
    }

    e.currentTarget.value = '';
  };

  useEffect(() => {
    if (!isAuthenticated) window.location.href = 'http://localhost:3000/';
  }, []);

  useEffect(() => {
    if (mode) {
      window.document.querySelector('html')?.classList.add('dark-mode');
      window.document.querySelector('body')?.classList.add('dark-mode');
    } else {
      window.document.querySelector('html')?.classList.remove('dark-mode');
      window.document.querySelector('body')?.classList.remove('dark-mode');
    }
  }, [mode]);

  const [editName, setEditName] = useState<boolean>(false);

  const initialValues = {
    avatar: '',
    fullname: '',
    dob: new Date(),
    gender: 'male',
    address: '',
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Vui lòng nhập đúng định dạng Email!'),
  });

  const handleSubmit = async (values: iUserProfile) => {
    const newVal = {
      fullname: values.name,
      // dob: values.dob.toLocaleDateString(),
      // dob: new Date(values.dob),
      gender: values.gender,
      address: values.address,
      phone: values.phone,
    };

    try {
      if (
        (values.password !== '' && values.password !== undefined) ||
        (values.confirmPassword !== '' && values.confirmPassword !== undefined) ||
        (values.newPassword !== '' && values.newPassword !== undefined)
      ) {
        const data = await changePassword({
          curPassword: values.password,
          newPassword: values.newPassword,
          rePassword: values.confirmPassword,
        });
        // console.log(data);
        // return;
        if (data?.error.originalStatus === 400) {
          alert(data?.error.data);
          return;
        }
      }

      await changeProfile({ ...newVal });
      if (image !== undefined) {
        alert('uploading');
        const files = new FormData();
        files.append('image', image);
        await createAvatarImage({ files });
      }
    } catch (error) {
      alert('Đã có lỗi xảy ra');
      return;
    }
    alert('Cập nhật thành công');

    location.reload();
  };

  const { isAuthenticated } = useSelector((state) => state.authentication);

  const { data: user } = useGetProfileQuery({
    skip: !isAuthenticated,
  });

  const { data: postsData, isFetching: isFetchingPostsData } = useGetPostsByUserIdQuery({
    userId: JSON.parse(localStorage.getItem('user')).id,
    pageNo: 1,
    pageSize: 999,
  });

  // console.log(user);

  return (
    <Fragment>
      <S.Header>
        <HeaderTop />
        <Navbar />
      </S.Header>
      <S.Container>
        <ButtonDarkMode />
        <ScrollToTop />
        <S.Content>
          <S.Title>Thông tin cá nhân</S.Title>
          <S.InfoBoard darkMode={mode}>
            <S.Left darkMode={mode}>
              <S.Avatar>
                <Image
                  src={user?.avatar === '' ? previewAvt : user?.avatar}
                  alt="avatar"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {editName && (
                  <S.CameraZone htmlFor="avatar">
                    <S.CustomIconCamera icon={faCamera} />
                    <input type="file" id="avatar" name="avatar" onChange={(e) => handleCrop(e)} />
                  </S.CameraZone>
                )}
              </S.Avatar>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ setFieldValue, values, errors, touched }) => (
                  <Fragment>
                    <>
                      {modalCrop && (
                        <CropImage
                          image={cropImage}
                          setModalCrop={setModalCrop}
                          setPreviewAvt={setPreviewAvt}
                          setFieldValue={setFieldValue}
                        />
                      )}
                    </>
                    <S.NewForm>
                      <S.GroupName darkMode={mode}>
                        {editName ? (
                          <>
                            <S.EditName name="name" placeholder="Họ tên..." />
                            <S.Button type="submit">
                              <S.CustomIconCheck icon={faCheck} />
                            </S.Button>
                            <S.CustomIconX icon={faXmark} onClick={() => setEditName(false)} />
                          </>
                        ) : (
                          <>
                            <S.Name>{user?.fullname}</S.Name>
                            <S.CustomIcon icon={faPen} onClick={() => setEditName(true)} />
                          </>
                        )}
                      </S.GroupName>
                      <S.GroupInfo darkMode={mode}>
                        <S.Info>
                          <S.InfoContent>Ngày sinh</S.InfoContent>
                          {editName ? (
                            <S.DatePickerElement>
                              <DatePicker
                                name="dob"
                                dateFormat="dd / MM / yyyy"
                                wrapperClassName="date_picker"
                                selected={new Date(values.dob)}
                                onChange={(value) => {
                                  setFieldValue('dob', value);
                                }}
                              />
                              <S.DatePickerWrapperStyles darkMode={mode} />
                            </S.DatePickerElement>
                          ) : (
                            <S.InfoText>{new Date('09/08/2001').toJSON().slice(0, 10)}</S.InfoText>
                          )}
                        </S.Info>
                        <S.Info>
                          <S.InfoContent>Giới tính</S.InfoContent>
                          {editName ? (
                            <S.GroupGender>
                              <S.Label htmlFor="male">
                                <Field id="male" type="radio" name="gender" value="male" />
                                Nam
                              </S.Label>

                              <S.Label htmlFor="female">
                                <Field id="female" type="radio" name="gender" value="female" />
                                Nữ
                              </S.Label>
                            </S.GroupGender>
                          ) : (
                            <S.InfoText>{user?.gender === 'female' ? 'Nữ' : 'Nam'}</S.InfoText>
                          )}
                        </S.Info>
                        <S.Info>
                          <S.InfoContent>Nơi sống</S.InfoContent>
                          {editName ? (
                            <S.Input name="address" placeholder="Nơi sống..." />
                          ) : (
                            <S.InfoText>{user?.address}</S.InfoText>
                          )}
                        </S.Info>
                        <S.Info>
                          <S.InfoContent>Số điện thoại</S.InfoContent>
                          {editName ? (
                            <S.Input name="phone" placeholder="Nơi sống..." />
                          ) : (
                            <S.InfoText>{user?.phone}</S.InfoText>
                          )}
                        </S.Info>
                        <S.Info>
                          <S.InfoContent>Email</S.InfoContent>
                          <S.InfoText>{user?.email}</S.InfoText>
                        </S.Info>
                        <S.Info>
                          <S.InfoContent>Đổi mật khẩu</S.InfoContent>
                          {editName ? (
                            <>
                              <S.Input type="password" name="password" placeholder="Mật khẩu hiện tại..." />
                              <S.Input type="password" name="newPassword" placeholder="Mật khẩu mới..." />
                              <S.Input type="password" name="confirmPassword" placeholder="Nhập lại mật khẩu mới..." />
                            </>
                          ) : (
                            <S.InfoText></S.InfoText>
                          )}
                        </S.Info>
                      </S.GroupInfo>
                    </S.NewForm>
                  </Fragment>
                )}
              </Formik>
            </S.Left>
            <S.Right>
              <S.TitleRight darkMode={mode}>Bài Đăng</S.TitleRight>
              <S.ListPost>
                <Pagination data={isFetchingPostsData ? post : postsData?.postDTOList} mode={mode} profilePage={true} />
              </S.ListPost>
            </S.Right>
          </S.InfoBoard>
        </S.Content>
      </S.Container>
      <Footer />
    </Fragment>
  );
}
export default Profile;
