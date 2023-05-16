import * as S from './ListPost.module';
import Image from 'next/image';
import Link from 'next/link';
import { widgetArray } from '@/src/utils/dataConfig';
import { useState } from 'react';
import { iMode } from '@/src/utils/interface';
import GroupBlockContent from './GroupBlockContent';
import { post } from '@/src/utils/dataConfig';
import { useGetAllPostsSortByCommentQuery, useGetAllPostsSortByViewQuery } from '@/pages/api/services/productApis';

function ListPost({ mode }: iMode) {
  const [activeWidget, setActiveWidget] = useState<string>('Popular');

  const { data: sortViewPosts, isFetching: isFetchingSortViewPosts } = useGetAllPostsSortByViewQuery();

  const { data: sortCommentPosts, isFetching: isFetchingSortCommentPosts } = useGetAllPostsSortByCommentQuery();

  // const [currentPosts, setCurrentPosts] = useState(post);

  return (
    <S.Wrapper>
      <S.LeftInfo>
        <S.Title>Tin Mới</S.Title>
        <GroupBlockContent mode={mode} />
      </S.LeftInfo>
      <S.RightInfo>
        <S.ListWidget>
          {widgetArray.map((item, index) => (
            <S.ItemWidget
              key={index}
              active={activeWidget === item.key}
              onClick={() => {
                setActiveWidget(item.key);
              }}
            >
              {item.title}
            </S.ItemWidget>
          ))}
        </S.ListWidget>
        {activeWidget === 'Trendy'
          ? sortViewPosts?.postDTOList?.slice(0, 4).map((item, index) => (
              <S.TabContent>
                <S.ImageCard>
                  <Image quality={100} src={item?.thumbnail} alt="image" fill sizes="" priority />
                </S.ImageCard>
                <S.DescriptionNews number={1}>
                  <S.NewsTitle>
                    <Link href="/home">{item?.title}</Link>
                  </S.NewsTitle>
                  <S.TagList>
                    <S.TagItem>
                      By&nbsp;<S.AuthorName>{item?.userName}</S.AuthorName>
                    </S.TagItem>
                  </S.TagList>
                  <S.TagList>
                    <S.TagItem>
                      Views: &nbsp;<S.AuthorName>{item?.totalView}</S.AuthorName>
                    </S.TagItem>
                  </S.TagList>
                </S.DescriptionNews>
              </S.TabContent>
            ))
          : sortCommentPosts?.postDTOList?.slice(0, 4).map((item, index) => (
              <S.TabContent>
                <S.ImageCard>
                  <Image quality={100} src={item?.thumbnail} alt="image" fill sizes="" priority />
                </S.ImageCard>
                <S.DescriptionNews number={1}>
                  <S.NewsTitle>
                    <Link href="/home">{item?.title}</Link>
                  </S.NewsTitle>
                  <S.TagList>
                    <S.TagItem>
                      By&nbsp;<S.AuthorName>{item?.userName}</S.AuthorName>
                    </S.TagItem>
                  </S.TagList>
                  <S.TagList>
                    <S.TagItem>
                      Comments: &nbsp;<S.AuthorName>{item?.totalComment}</S.AuthorName>
                    </S.TagItem>
                  </S.TagList>
                </S.DescriptionNews>
              </S.TabContent>
            ))}
      </S.RightInfo>
    </S.Wrapper>
  );
}

export default ListPost;
