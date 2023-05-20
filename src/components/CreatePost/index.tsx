import { Fragment, useState, useMemo, useRef, useEffect } from 'react';
import Select from 'react-select';
import dynamic from 'next/dynamic';
import * as S from './CreatePost.module';
import HeaderTop from '../Global/HeaderTop';
import Navbar from '../Global/Navbar';
import ButtonDarkMode from '../Global/ButtonDarkMode';
import ScrollToTop from '../Global/ScrollToTopButton';
import Footer from '../Global/Footer';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { iContent } from '@/src/utils/interface';
import { category } from '@/src/utils/dataConfig';
import {
  useCreatePostMutation,
  useCreatePostImageMutation,
  useCreatePostUserRoleMutation,
} from '@/pages/api/services/productApis';
import { useGetActiveCategoriesQuery } from '@/pages/api/services/catApis';
import LoadingPage from '@/src/components/Global/LoadingPage';

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');

    const { default: BF } = await import('quill-blot-formatter');
    RQ.Quill.register('modules/blotFormatter', BF);

    return ({ forwardedRef, ...props }: any) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
  },
);

function CreatePost() {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Handler DarkMode
  const { mode } = useSelector((state: any) => state.darkMode);

  useEffect(() => {
    if (mode) {
      window.document.querySelector('html')?.classList.add('dark-mode');
      window.document.querySelector('body')?.classList.add('dark-mode');
    } else {
      window.document.querySelector('html')?.classList.remove('dark-mode');
      window.document.querySelector('body')?.classList.remove('dark-mode');
    }
  }, [mode]);

  // Handler Content
  const defaultContent: iContent = {
    category: '',
    title: '',
    banner: '',
    body: '',
  };

  const [content, setContentPost] = useState<iContent>(defaultContent);

  // Create post apis
  const [createPost, { isLoading: isLoadingPost }] = useCreatePostMutation();
  const [createPostUserRole, { isLoading: isLoadingPostUserRole }] = useCreatePostUserRoleMutation();
  const [createPostImage, { isLoading: isLoadingImg }] = useCreatePostImageMutation();

  const [image, setImage] = useState();

  const handleSubmit = async () => {
    if (image === undefined) {
      alert('Vui lòng thêm ảnh thumbnail!');
      return;
    }
    if (content.title === '' || content.body === '') {
      alert('Vui lòng thêm nội dung bài viết!');
      return;
    }
    // setLoading(true);
    try {
      const { data: newPost } = await createPost({
        title: content.title,
        content: content.body,
        categoryId: content.category,
      });
      const { id } = newPost;

      // Upload images for product

      const files = new FormData();
      files.append('image', image);
      await createPostImage({ id, files });
    } catch (error) {
      alert('Đã có lỗi xảy ra');
    }
    // const timer = setTimeout(() => {
    //   setLoading(true);
    // }, 3000);
    setTimeout(navigateProfile, 3000);
    // navigateProfile();
  };

  const navigateProfile = () => {
    window.location.href = 'http://localhost:3000/profile';
  };

  // Handler Image
  const quillRef: any = useRef(null);

  const bannerRef: any = useRef(null);

  const uploadFile = async (file: File) => {
    setImage(file);

    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'createpost');
    form.append('cloud_name', 'createcontentpost');

    const response = await fetch('https://api.cloudinary.com/v1_1/createcontentpost/image/upload', {
      method: 'POST',
      body: form,
    }).then((response) => {
      return response.json();
    });

    console.log(response);

    return { url: response.secure_url };
  };

  const imageHandler = async () => {
    // get editor
    const editor = quillRef.current.getEditor();

    const input: any = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('alt', 'image');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const { url } = await uploadFile(file);

      try {
        const link = url;
        editor.insertEmbed(editor.getSelection(), 'image', link);
      } catch (err) {
        console.log('upload err:', err);
      }
    };
  };

  const bannerHandler = async () => {
    // get editor
    const editor = bannerRef.current.getEditor();

    const input: any = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('alt', 'image');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];

      const { url } = await uploadFile(file);

      try {
        const link = url;
        editor.insertEmbed(editor.getSelection(), 'image', link);
      } catch (err) {
        console.log('upload err:', err);
      }
    };
  };

  const modules = useMemo(
    () => ({
      blotFormatter: {},
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, { list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image', 'video', 'code', 'code-block'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const modulesTitle = useMemo(
    () => ({
      blotFormatter: {},
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          ['clean'],
        ],
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const modulesBanner = useMemo(
    () => ({
      blotFormatter: {},
      toolbar: {
        container: ['image'],
        handlers: {
          image: bannerHandler,
        },
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'imageBlot',
  ];

  const { data: catData, isFetching: isFetchingCatData } = useGetActiveCategoriesQuery();

  const [catDataShow, setCatDataShow] = useState([]);

  return (
    <Fragment>
      <S.Header>
        <HeaderTop />
        <Navbar />
      </S.Header>
      <S.Container>
        <ButtonDarkMode />
        <ScrollToTop />
        <S.Content darkMode={mode}>
          <S.DivTop>
            <S.DivTitle>
              <S.HeaderTitle>
                <S.TitlePost darkMode={mode}>Tiêu đề</S.TitlePost>
                {isFetchingCatData ? (
                  <>
                    <Select
                      onChange={(e: any) => setContentPost({ ...content, category: e.value })}
                      placeholder="Danh mục"
                      options={category}
                    />
                  </>
                ) : (
                  <>
                    <Select
                      onChange={(e: any) => setContentPost({ ...content, category: e.value })}
                      placeholder="Danh mục"
                      options={category}
                    />
                  </>
                )}
              </S.HeaderTitle>
              <ReactQuill
                theme="snow"
                modules={modulesTitle}
                formats={formats}
                onChange={(e: string) => setContentPost({ ...content, title: e })}
                value={content.title}
              />
            </S.DivTitle>
            <S.DivTitle>
              <S.Title darkMode={mode}>Ảnh nền</S.Title>
              <ReactQuill
                theme="snow"
                forwardedRef={bannerRef}
                modules={modulesBanner}
                formats={formats}
                onChange={(e: string) => setContentPost({ ...content, banner: e })}
                value={content.banner}
              />
            </S.DivTitle>
          </S.DivTop>
          <S.DivContent>
            <S.Title darkMode={mode}>Nội dung</S.Title>
            <ReactQuill
              forwardedRef={quillRef}
              theme="snow"
              modules={modules}
              formats={formats}
              onChange={(e: string) => {
                setContentPost({ ...content, body: e });
              }}
              value={content.body}
            />
          </S.DivContent>
          <S.DivButton onClick={handleSubmit}>
            <S.Button>Đăng bài</S.Button>
          </S.DivButton>
        </S.Content>
      </S.Container>
      <Footer />
    </Fragment>
  );
}

export default CreatePost;
