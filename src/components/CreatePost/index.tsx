import { Fragment, useState, useMemo, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import * as S from './CreatePost.module';
import HeaderTop from '../Global/HeaderTop';
import Navbar from '../Global/Navbar';
import ButtonDarkMode from '../Global/ButtonDarkMode';
import ScrollToTop from '../Global/ScrollToTopButton';
import Footer from '../Global/Footer';

import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
import { iContent } from '@/src/utils/interface';

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
    title: '',
    body: '',
  };
  const [content, setContent] = useState<iContent>(defaultContent);

  const handleSubmit = () => {
    console.log(content);
  };

  // Handler Image
  const quillRef: any = useRef(null);

  const uploadFile = async (file: File) => {
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

    input.onchange = async (e: any) => {
      const file = input.files[0];

      file.preview = URL.createObjectURL(file);

      const fileAvt = new File([file], 'Phuc', { type: file.type });

      const { url } = await uploadFile(fileAvt);

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
          <S.DivTitle>
            <S.Title>Tiêu đề</S.Title>
            <ReactQuill
              theme="snow"
              modules={modulesTitle}
              formats={formats}
              onChange={(e: string) => setContent({ ...content, title: e })}
              value={content.title}
            />
          </S.DivTitle>
          <S.DivContent>
            <S.Title>Nội dung</S.Title>
            <ReactQuill
              forwardedRef={quillRef}
              theme="snow"
              modules={modules}
              formats={formats}
              onChange={(e: string) => setContent({ ...content, body: e })}
              value={content.body}
            />
          </S.DivContent>
          <S.DivButton onClick={handleSubmit}>
            <S.Button>Đăng bài</S.Button>
          </S.DivButton>
        </S.Content>
      </S.Container>
      {/* {body ? <div dangerouslySetInnerHTML={{ __html: body }}></div> : undefined} */}
      <Footer />
    </Fragment>
  );
}

CreatePost.displayName = 'CreatePost';

export default CreatePost;
