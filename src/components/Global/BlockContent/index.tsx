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
        <Image
          quality={100}
          src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
          alt="image"
          fill
          sizes=""
          priority
        />
      </S.PictureContent>
      <S.DescriptionNews number={1}>
        <S.CategoryTag>
          <S.CategoryName>{data.category}</S.CategoryName>
        </S.CategoryTag>
        <S.NewsTitle darkMode={mode} homePage={router.pathname === '/'}>
          <Link href="/home">{data.title}</Link>
        </S.NewsTitle>
        <S.TagList>
          <S.TagItem>
            By&nbsp;<S.AuthorName>{data.author}</S.AuthorName>
          </S.TagItem>
          <S.TagItem>{data.date}</S.TagItem>
          <S.TagItem>
            <S.CustomIconLike check={like === 1 ? 1 : 0} icon={faThumbsUp} onClick={() => setLike(1)} />
            <S.Number>{data.like}</S.Number>
          </S.TagItem>
          <S.TagItem>
            <S.CustomIconDislike check={like === 0 ? 0 : 1} icon={faThumbsDown} onClick={() => setLike(0)} />
            <S.Number>{data.dislike}</S.Number>
          </S.TagItem>
        </S.TagList>
        <S.DesContent darkMode={mode} homePage={router.pathname === '/'}>
          {data.content}
        </S.DesContent>
      </S.DescriptionNews>
    </S.BlockContent>
  );
}

export default BlockContent;
