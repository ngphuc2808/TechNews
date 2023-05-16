import { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { useRouter } from 'next/router';
import { category } from '@/src/utils/dataConfig';
import { useGetPostDetailByIdQuery } from '@/pages/api/services/productApis';
import { useGetAllCommentByPostIdQuery } from '@/pages/api/services/commentApis';
import { setLogin, setRegister } from '@/src/features/redux/slices/authSlice';
import ListHotNews from '../Home/ListHotNews';

function Post() {
  const dispatch = useDispatch();

  const { mode } = useSelector((state: any) => state.darkMode);
  const [comment, setComment] = useState<string>('');
  const textRef = useRef();
  const router = useRouter();

  const categoryPathDefault = { value: '', label: '' };

  const [categoryPath, setCategoryPath] = useState<iCategory>(categoryPathDefault);

  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (mode) {
      window.document.querySelector('html')?.classList.add('dark-mode');
      window.document.querySelector('body')?.classList.add('dark-mode');
    } else {
      window.document.querySelector('html')?.classList.remove('dark-mode');
      window.document.querySelector('body')?.classList.remove('dark-mode');
    }
  }, [mode]);

  useEffect(() => {
    if (router.query.category) {
      const newArr = category.find((value) => value.value === router.query.category);
      setCategoryPath(newArr || categoryPathDefault);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.category]);

  const { data: postData, isFetching: isFetchingPostData } = useGetPostDetailByIdQuery(router.query.id);

  const { data: commentData, isFetching: isFetchingCommentData } = useGetAllCommentByPostIdQuery(router.query.id);

  console.log(postData);

  const handleClickComment = () => {};

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
          {isFetchingPostData ? (
            <>
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
            </>
          ) : (
            <>
              <S.Overlay></S.Overlay>
              <S.Description>
                <S.CategoryTag>
                  <S.CategoryName>{postData?.categoryName}</S.CategoryName>
                </S.CategoryTag>
                <S.Title>{postData?.title}</S.Title>
                <S.TagList>
                  <S.TagItem>
                    By&nbsp;<S.AuthorName>{postData?.userName}</S.AuthorName>
                  </S.TagItem>
                  <S.TagItem>{postData?.postDate}</S.TagItem>
                  <S.TagItem>
                    <S.Number>{postData?.totalView} views</S.Number>
                  </S.TagItem>
                </S.TagList>
              </S.Description>
            </>
          )}
        </S.Banner>
        <S.Line darkMode={mode} />

        <S.Content>
          <ListHotNews title="Bài viết liên quan" />
        </S.Content>
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
              {isFetchingPostData ? (
                <>
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
                </>
              ) : (
                <>
                  <S.LastAuthorName>{postData?.userName}</S.LastAuthorName>
                  <S.TagList>
                    <S.TagItemLike>
                      <S.CustomIconLike check={postData?.isVoted} icon={faThumbsUp} />
                      <S.Number>{postData?.numberVote}</S.Number>
                    </S.TagItemLike>
                    <S.TagItemLike>
                      <S.CustomIconDislike check={!postData?.isDisliked} icon={faThumbsDown} />
                      <S.Number>{postData?.numberDislike}</S.Number>
                    </S.TagItemLike>
                  </S.TagList>
                </>
              )}
            </S.AuthorNameAndTotalLike>
          </S.AuthorInfo>
          <S.Line darkMode={mode} />
          <S.CommentArea>
            <S.TitleComment>Bình luận ({postData?.totalComment})</S.TitleComment>
            {localStorage.getItem('token') !== null ? (
              <>
                <S.HandleComment darkMode={mode}>
                  <S.TextAreaComment
                    width="100%"
                    placeholder="Nhập bình luận của bạn ở đây."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <Spacer y={1} />
                  <S.ButtonComment onClick={handleClickComment}>Bình luận</S.ButtonComment>
                </S.HandleComment>
              </>
            ) : (
              <></>
            )}

            <S.LineComment darkMode={mode} />
            <S.CommentScroll>
              {isFetchingCommentData
                ? comments.map((data, index) => <Comment key={index} data={data} darkMode={mode} />)
                : commentData.map((data, index) => <Comment key={index} data={data} darkMode={mode} />)}
            </S.CommentScroll>
          </S.CommentArea>
        </S.Content>
      </S.Container>

      <Footer />
    </Fragment>
  );
}

export default Post;
