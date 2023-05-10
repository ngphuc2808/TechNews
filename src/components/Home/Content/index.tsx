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
    console.log(postData);
  }, [isFetchingPostData]);

  return (
    <Fragment>
      <S.Content>
        <S.LatestNews>
          <S.LatestNewsLeft>
            <Image
              quality={100}
              src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
              alt="image"
              fill
              sizes=""
              priority
            />
            <S.Overlay />
            <S.DescriptionNews number={0}>
              <S.CategoryTag>
                <S.CategoryName>Smart Watch</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href="/home">{isFetchingPostData ? 'Loading..' : postData[0]?.title}</Link>
              </S.NewsTitle>
              <S.AuthorTag>
                By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
              </S.AuthorTag>
            </S.DescriptionNews>
          </S.LatestNewsLeft>
          <S.LatestNewsRight>
            <S.Topic>
              <Image
                quality={100}
                src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
                alt="image"
                fill
                sizes=""
                priority
              />
              <S.Overlay />
              <S.DescriptionNews number={1}>
                <S.CategoryTag>
                  <S.CategoryName>Smart Watch</S.CategoryName>
                </S.CategoryTag>
                <S.NewsTitle>
                  <Link href="/home">{isFetchingPostData ? 'Loading..' : postData[1]?.title}</Link>
                </S.NewsTitle>
                <S.AuthorTag>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.AuthorTag>
              </S.DescriptionNews>
            </S.Topic>
            <S.Topic>
              <Image
                quality={100}
                src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
                alt="image"
                fill
                sizes=""
                priority
              />
              <S.Overlay />
              <S.DescriptionNews number={2}>
                <S.CategoryTag>
                  <S.CategoryName>Smart Watch</S.CategoryName>
                </S.CategoryTag>
                <S.NewsTitle>
                  <Link href="/home">{isFetchingPostData ? 'Loading..' : postData[2]?.title}</Link>
                </S.NewsTitle>
                <S.AuthorTag>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.AuthorTag>
              </S.DescriptionNews>
            </S.Topic>
          </S.LatestNewsRight>
        </S.LatestNews>
      </S.Content>
      <S.ContentBlack>
        <ListPost mode={mode} />
      </S.ContentBlack>
      <S.Content>
        <ListHotNews title="Nổi Bật" />
      </S.Content>
    </Fragment>
  );
}

export default Content;
