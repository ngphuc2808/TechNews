import Link from 'next/link';
import Image from 'next/image';
import * as S from './Content.module';
import { Fragment, useEffect } from 'react';
import ListHotNews from '../ListHotNews';
import ListPost from '../ListPost';
import { iMode } from '@/src/utils/interface';
import { useGetAllPostsQuery } from '@/pages/api/services/productApis';

function Content({ mode }: iMode) {
  const { data: postData, isFetching: isFetchingPostData } = useGetAllPostsQuery();

  useEffect(() => {
    // console.log(postData);
  }, [isFetchingPostData]);

  // console.log(postData);

  return (
    <Fragment>
      <S.Content>
        <S.LatestNews>
          <S.LatestNewsLeft>
            <Image
              quality={100}
              src={isFetchingPostData ? '' : postData[0]?.thumbnail}
              alt="image"
              fill
              sizes=""
              priority
            />
            <S.Overlay />
            <S.DescriptionNews number={0}>
              <S.CategoryTag>
                <S.CategoryName>{isFetchingPostData ? 'Loading..' : postData[0]?.categoryName}</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href={isFetchingPostData ? '/post' : `/post?id=${postData[0]?.id}`}>
                  {isFetchingPostData ? 'Loading..' : <div dangerouslySetInnerHTML={{ __html: postData[0]?.title }} />}
                </Link>
              </S.NewsTitle>
              <S.AuthorTag>
                By&nbsp;<S.AuthorName>{isFetchingPostData ? 'Loading..' : postData[0]?.userName}</S.AuthorName>
              </S.AuthorTag>
            </S.DescriptionNews>
          </S.LatestNewsLeft>
          <S.LatestNewsRight>
            <S.Topic>
              <Image
                quality={100}
                src={isFetchingPostData ? '' : postData[1]?.thumbnail}
                alt="image"
                fill
                sizes=""
                priority
              />
              <S.Overlay />
              <S.DescriptionNews number={1}>
                <S.CategoryTag>
                  <S.CategoryName>{isFetchingPostData ? 'Loading..' : postData[1]?.categoryName}</S.CategoryName>
                </S.CategoryTag>
                <S.NewsTitle>
                  <Link href={isFetchingPostData ? '/post' : `/post?id=${postData[1]?.id}`}>
                    {isFetchingPostData ? (
                      'Loading..'
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: postData[1]?.title }} />
                    )}
                  </Link>{' '}
                </S.NewsTitle>
                <S.AuthorTag>
                  By&nbsp;<S.AuthorName>{isFetchingPostData ? 'Loading..' : postData[1]?.userName}</S.AuthorName>
                </S.AuthorTag>
              </S.DescriptionNews>
            </S.Topic>
            <S.Topic>
              <Image
                quality={100}
                src={isFetchingPostData ? '' : postData[2]?.thumbnail}
                alt="image"
                fill
                sizes=""
                priority
              />
              <S.Overlay />
              <S.DescriptionNews number={2}>
                <S.CategoryTag>
                  <S.CategoryName>{isFetchingPostData ? 'Loading..' : postData[2]?.categoryName}</S.CategoryName>
                </S.CategoryTag>
                <S.NewsTitle>
                  <Link href={isFetchingPostData ? '/post' : `/post?id=${postData[2]?.id}`}>
                    {isFetchingPostData ? (
                      'Loading..'
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: postData[2]?.title }} />
                    )}
                  </Link>{' '}
                </S.NewsTitle>
                <S.AuthorTag>
                  By&nbsp;<S.AuthorName>{isFetchingPostData ? 'Loading..' : postData[2]?.userName}</S.AuthorName>
                </S.AuthorTag>
              </S.DescriptionNews>
            </S.Topic>
          </S.LatestNewsRight>
        </S.LatestNews>
      </S.Content>
      <S.ContentBlack>
        <ListPost mode={mode} />
      </S.ContentBlack>
      {/* <S.Content>
        <ListHotNews title="Nổi Bật" />
      </S.Content> */}
    </Fragment>
  );
}

export default Content;
