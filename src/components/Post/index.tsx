import { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './Post.module';
import HeaderTop from '../Global/HeaderTop';
import NavbarPost from '../Global/NavbarPost';
import ButtonDarkMode from '../Global/ButtonDarkMode';
import ScrollToTop from '../Global/ScrollToTopButton';
import Footer from '../Global/Footer';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { comments } from '@/src/utils/dataConfig';
import Comment from './Comment';
import { Textarea, Spacer } from '@nextui-org/react';

function Post() {
  const { mode } = useSelector((state: any) => state.darkMode);
  const [comment, setComment] = useState<string>('');
  const textRef = useRef();

  useEffect(() => {
    if (mode) {
      window.document.querySelector('html')?.classList.add('dark-mode');
      window.document.querySelector('body')?.classList.add('dark-mode');
    } else {
      window.document.querySelector('html')?.classList.remove('dark-mode');
      window.document.querySelector('body')?.classList.remove('dark-mode');
    }
  }, [mode]);
  return (
    <Fragment>
      <S.Header>
        <HeaderTop />
        <NavbarPost mode={mode} />
      </S.Header>
      <S.Container>
        <ButtonDarkMode />
        <ScrollToTop />
        <S.Banner>
          {/* <S.BannerImage dangerouslySetInnerHTML={{ __html: content.banner }} /> */}
          <S.Overlay></S.Overlay>
          <S.Description>
            <S.CategoryTag>
              <S.CategoryName>Watch</S.CategoryName>
            </S.CategoryTag>
            <S.Title>Tiêu đề</S.Title>
            <S.TagList>
              <S.TagItem>
                By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
              </S.TagItem>
              <S.TagItem>06/05/2023</S.TagItem>
              <S.TagItem>
                <S.Number>100 Views</S.Number>
              </S.TagItem>
            </S.TagList>
          </S.Description>
        </S.Banner>
        <S.Content darkMode={mode}>
          {/* <div dangerouslySetInnerHTML={{ __html: content.body }}></div> */}
          <S.PostShares>
            <S.TitleShare darkMode={mode}>Share:</S.TitleShare>
            <S.IconShare>
              <S.CustomIconFacebook icon={faFacebookF} />
            </S.IconShare>
            <S.IconShare>
              <S.CustomIconTwitter icon={faTwitter} />
            </S.IconShare>
          </S.PostShares>
          <S.Line darkMode={mode} />
          <S.AuthorInfo>
            <S.AuthorAvatar>
              <Image
                quality={100}
                src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
                alt="image"
                fill
                sizes=""
                priority
              />
            </S.AuthorAvatar>
            <S.AuthorNameAndTotalLike>
              <S.LastAuthorName>Phúc NH</S.LastAuthorName>
              <S.TagList>
                <S.TagItemLike>
                  <S.CustomIconLike check={2} icon={faThumbsUp} />
                  <S.Number>100</S.Number>
                </S.TagItemLike>
                <S.TagItemLike>
                  <S.CustomIconDislike check={2} icon={faThumbsDown} />
                  <S.Number>100</S.Number>
                </S.TagItemLike>
              </S.TagList>
            </S.AuthorNameAndTotalLike>
          </S.AuthorInfo>
          <S.Line darkMode={mode} />
          <S.CommentArea>
            <S.TitleComment>Bình luận</S.TitleComment>
            <S.HandleComment darkMode={mode}>
              <S.TextAreaComment
                width="100%"
                placeholder="Nhập bình luận của bạn ở đây."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Spacer y={1} />
              <S.ButtonComment>Bình luận</S.ButtonComment>
            </S.HandleComment>
            <S.LineComment darkMode={mode} />
            <S.CommentScroll>
              {comments.map((data, index) => (
                <Comment key={index} data={data} darkMode={mode} />
              ))}
            </S.CommentScroll>
          </S.CommentArea>
        </S.Content>
      </S.Container>
      <Footer />
    </Fragment>
  );
}

export default Post;
