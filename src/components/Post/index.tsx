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
import { useCreateCommentMutation } from '@/pages/api/services/commentApis';
import {
  useLikePostMutation,
  useDislikePostMutation,
  useGetAllPostsQuery,
  useGetPostRecommendMutation,
} from '@/pages/api/services/productApis';
import Register from '../Register';
import Login from '../Login';

function Post() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authentication);

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

  const { data: allPosts, isFetching: isFetchingAllPosts } = useGetAllPostsQuery();

  const [addComment] = useCreateCommentMutation();

  const [likePost] = useLikePostMutation();

  const [dislikePost] = useDislikePostMutation();

  const [getRecommend] = useGetPostRecommendMutation();

  const formData = {
    title: 'PSG 2-0 Olympic Lyons',
    data: [
      {
        id: 1,
        title: 'MU thất bị trước New Castle',
        content: 'MU thất bại cay đắng 0 2 trước đại gia tân thành New Castle',
        slug: 'mu-vs-new-castle-vong-29',
        status: 'Active',
        parentId: 0,
        userId: 1,
        numberVote: 1,
        numberDislike: 0,
        isVoted: 0,
        isDisliked: 0,
        userName: 'Dante',
        avatar: 'A',
        thumbnail: 'https://res.cloudinary.com/dqugpsayz/image/upload/v1683798501/NewsWebsite/Post/1.png',
        categoryName: 'Thể thao',
        categoryId: 4,
        postDate: '2023-04-02T18:34:00.000+00:00',
        totalView: 3,
        totalComment: 0,
      },
      {
        id: 3,
        title: 'ARS giành chiến thắng thuyết phục trước Crytal Palace',
        content: 'ARS chiến thắng 4 1 trước Crytal Palace',
        slug: 'ars-vs-crytal-palace-vong-20',
        status: 'Active',
        parentId: 1,
        userId: 1,
        numberVote: 1,
        numberDislike: 0,
        isVoted: 0,
        isDisliked: 0,
        userName: 'Dante',
        avatar: 'A',
        thumbnail: null,
        categoryName: 'Thể thao',
        categoryId: 4,
        postDate: '2023-04-02T18:42:42.000+00:00',
        totalView: 4,
        totalComment: 0,
      },
      {
        id: 4,
        title: 'PSG 2-0 Olympic Lyons',
        content: 'PSG giành chiến thắng, Messi giành cú đúp.',
        slug: 'psg-vs-lyons-vong-28',
        status: 'Active',
        parentId: 0,
        userId: 1,
        numberVote: 0,
        numberDislike: 0,
        isVoted: 0,
        isDisliked: 0,
        userName: 'Dante',
        avatar: 'A',
        thumbnail: null,
        categoryName: 'Y tế',
        categoryId: 3,
        postDate: '2023-04-02T19:26:15.000+00:00',
        totalView: 24,
        totalComment: 3,
      },
      {
        id: 5,
        title: 'PSG 2-0 Olympic Lyonss',
        content: 'PSG giành chiến thắng, Messi giành cú đúp.',
        slug: 'psg-vs-lyons-vong-28',
        status: 'Active',
        parentId: 0,
        userId: 1,
        numberVote: 0,
        numberDislike: 1,
        isVoted: 0,
        isDisliked: 0,
        userName: 'Dante',
        avatar: 'A',
        thumbnail: null,
        categoryName: 'Y tế',
        categoryId: 3,
        postDate: '2023-04-02T19:26:45.000+00:00',
        totalView: 6,
        totalComment: 4,
      },
      {
        id: 6,
        title: 'PSG 2-0 Olympic Lyonssss',
        content: 'PSG giành chiến thắng, Messi giành cú đúp.',
        slug: 'psg-vs-lyons-vong-28',
        status: 'Active',
        parentId: 0,
        userId: 1,
        numberVote: 0,
        numberDislike: 0,
        isVoted: 0,
        isDisliked: 0,
        userName: 'Dante',
        avatar: 'A',
        thumbnail: null,
        categoryName: 'Thể thao',
        categoryId: 4,
        postDate: '2023-04-02T19:28:52.000+00:00',
        totalView: 52,
        totalComment: 2,
      },
      {
        id: 7,
        title: 'MU 2-0 Olympic Lyons',
        content: 'PSG giành chiến thắng, Messi giành cú đúp.',
        slug: 'psg-vs-lyons-vong-28',
        status: 'Active',
        parentId: 0,
        userId: 1,
        numberVote: 0,
        numberDislike: 0,
        isVoted: 0,
        isDisliked: 0,
        userName: 'Dante',
        avatar: 'A',
        thumbnail: null,
        categoryName: 'Tài chính',
        categoryId: 5,
        postDate: '2023-04-02T19:28:52.000+00:00',
        totalView: 2,
        totalComment: 5,
      },
      {
        id: 8,
        title: 'PSG 2-0 Olympic Lyonsssss',
        content: 'PSG giành chiến thắng, Messi giành cú đúp.',
        slug: 'psg-vs-lyons-vong-28',
        status: 'Active',
        parentId: 0,
        userId: 1,
        numberVote: 0,
        numberDislike: 0,
        isVoted: 0,
        isDisliked: 0,
        userName: 'Dante',
        avatar: 'A',
        thumbnail: null,
        categoryName: 'Tài chính',
        categoryId: 5,
        postDate: '2023-04-02T19:28:52.000+00:00',
        totalView: 5,
        totalComment: 4,
      },
    ],
  };

  useEffect(() => {
    if (!isFetchingAllPosts) {
      // formData = {
      //   title: postData?.title,
      //   data: [...allPosts],
      // };

      // declare the data fetching function
      const fetchData = async () => {
        console.log(formData);
        const data = await getRecommend(formData);
        console.log(data);
      };

      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }
  }, [isFetchingAllPosts]);

  const handleClickComment = async () => {
    const formComment = {
      content: comment,
      postId: router.query.id,
    };
    await addComment(formComment);
    setComment('');
  };

  const handleLike = async () => {
    if (!isAuthenticated) {
      alert('Bạn cần phải đăng nhập để sử dụng chức năng này');
      return;
    }
    await likePost(router.query.id);
  };

  const handleDislike = async () => {
    if (!isAuthenticated) {
      alert('Bạn cần phải đăng nhập để sử dụng chức năng này');
      return;
    }
    await dislikePost(router.query.id);
  };

  return (
    <Fragment>
      {auth.register && <Register />}
      {auth.login && <Login />}
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
                src={
                  isFetchingCommentData
                    ? 'https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg'
                    : postData?.avatar
                }
                alt="image"
                fill
                sizes=""
                priority
              />
            </S.AuthorAvatar>
            <S.AuthorNameAndTotalLike>
              {isFetchingPostData ? (
                <>
                  <S.LastAuthorName></S.LastAuthorName>
                  <S.TagList>
                    <S.TagItemLike>
                      <S.CustomIconLike check={2} icon={faThumbsUp} />
                      <S.Number></S.Number>
                    </S.TagItemLike>
                    <S.TagItemLike>
                      <S.CustomIconDislike check={2} icon={faThumbsDown} />
                      <S.Number></S.Number>
                    </S.TagItemLike>
                  </S.TagList>
                </>
              ) : (
                <>
                  <S.LastAuthorName>{postData?.userName}</S.LastAuthorName>
                  <S.TagList>
                    <S.TagItemLike>
                      <S.CustomIconLike check={postData.isVoted} icon={faThumbsUp} onClick={handleLike} />
                      <S.Number>{postData?.numberVote}</S.Number>
                    </S.TagItemLike>
                    <S.TagItemLike>
                      <S.CustomIconDislike
                        check={postData.isDisliked ? 0 : 1}
                        icon={faThumbsDown}
                        onClick={handleDislike}
                      />
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
