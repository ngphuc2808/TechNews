import * as S from './BlockContent.module';
import Image from 'next/image';
import Link from 'next/link';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { iDataPosts } from '@/src/utils/interface';
import { useRouter } from 'next/router';

function BlockContent({ data, mode }: iDataPosts) {
  const [like, setLike] = useState<number>();

  const router = useRouter();

  return (
    <S.BlockContent>
      <S.PictureContent>
        <Image quality={100} src={data?.thumbnail} alt="image" fill sizes="" priority />
      </S.PictureContent>
      <S.DescriptionNews number={1}>
        <S.CategoryTag>
          <S.CategoryName>{data?.categoryName}</S.CategoryName>
        </S.CategoryTag>
        <S.NewsTitle darkMode={mode} homePage={router.pathname === '/'}>
          <Link href="/home">{data?.title}</Link>
        </S.NewsTitle>
        <S.TagList>
          <S.TagItem>
            By&nbsp;<S.AuthorName>{data?.userName}</S.AuthorName>
          </S.TagItem>
          <S.TagItem>{data?.numberVote}</S.TagItem>
          <S.TagItem>
            <S.CustomIconLike check={data?.isVoted} icon={faThumbsUp} onClick={() => setLike(1)} />
            <S.Number>{data.like}</S.Number>
          </S.TagItem>
          {/* <S.TagItem>
            <S.CustomIconDislike check={like === 0 ? 0 : 1} icon={faThumbsDown} onClick={() => setLike(0)} />
            <S.Number>{data.dislike}</S.Number>
          </S.TagItem> */}
        </S.TagList>
        <S.DesContent darkMode={mode} homePage={router.pathname === '/'}>
          {data.content}
        </S.DesContent>
      </S.DescriptionNews>
    </S.BlockContent>
  );
}

export default BlockContent;
