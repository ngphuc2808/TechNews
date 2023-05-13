import * as S from './ListPostCategory.module';
import Image from 'next/image';
import Link from 'next/link';
import { widgetArray } from '@/src/utils/dataConfig';
import { useState } from 'react';
import { iMode } from '@/src/utils/interface';
import { post } from '@/src/utils/dataConfig';
import Pagination from '../../Global/Pagination';
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { category } from '@/src/utils/dataConfig';
import { useGetAllPostsByCatQuery } from '@/pages/api/services/productApis';
import { iCategory } from '@/src/utils/interface';

function ListPostCategory({ mode }: iMode) {
  const [activeWidget, setActiveWidget] = useState<string>('Recent');
  const router = useRouter();
  const categoryPathDefault = { value: '', label: '' };

  const [categoryPath, setCategoryPath] = useState<iCategory>(categoryPathDefault);
  useEffect(() => {
    if (router.query.category) {
      const newArr = category.find((value) => value.value === router.query.category);
      setCategoryPath(newArr || categoryPathDefault);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.category]);
  console.log(router);

  const { data: postsData, isFetching: isFetchingPostsData } = useGetAllPostsByCatQuery({
    catId: router.query?.category,
    pageNo: 1,
    pageSize: 5,
  });

  console.log(postsData);

  return (
    <S.Wrapper>
      <S.LeftInfo>
        <S.ListCard>
          <Pagination data={isFetchingPostsData ? post : postsData?.postDTOList} mode={mode} profilePage={false} />
        </S.ListCard>
      </S.LeftInfo>
      <S.RightInfo>
        <S.ListWidget>
          {widgetArray.map((item, index) => (
            <S.ItemWidget key={index} active={activeWidget === item.key} onClick={() => setActiveWidget(item.key)}>
              {item.title}
            </S.ItemWidget>
          ))}
        </S.ListWidget>
        <S.TabContent>
          <S.ImageCard>
            <Image
              quality={100}
              src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
              alt="image"
              fill
              sizes=""
              priority
            />
          </S.ImageCard>
          <S.DescriptionNews number={1}>
            <S.NewsTitle darkMode={mode}>
              <Link href="/home">
                These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales These 5 Simple TECHNOLOGY Tricks Will Pump Up
                Your Sales These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales
              </Link>
            </S.NewsTitle>
            <S.TagList>
              <S.TagItem>
                By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
              </S.TagItem>
            </S.TagList>
          </S.DescriptionNews>
        </S.TabContent>
        <S.TabContent>
          <S.ImageCard>
            <Image
              quality={100}
              src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
              alt="image"
              fill
              sizes=""
              priority
            />
          </S.ImageCard>
          <S.DescriptionNews number={1}>
            <S.NewsTitle darkMode={mode}>
              <Link href="/home">
                These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales These 5 Simple TECHNOLOGY Tricks Will Pump Up
                Your Sales These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales
              </Link>
            </S.NewsTitle>
            <S.TagList>
              <S.TagItem>
                By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
              </S.TagItem>
            </S.TagList>
          </S.DescriptionNews>
        </S.TabContent>
        <S.TabContent>
          <S.ImageCard>
            <Image
              quality={100}
              src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
              alt="image"
              fill
              sizes=""
              priority
            />
          </S.ImageCard>
          <S.DescriptionNews number={1}>
            <S.NewsTitle darkMode={mode}>
              <Link href="/home">
                These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales These 5 Simple TECHNOLOGY Tricks Will Pump Up
                Your Sales These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales
              </Link>
            </S.NewsTitle>
            <S.TagList>
              <S.TagItem>
                By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
              </S.TagItem>
            </S.TagList>
          </S.DescriptionNews>
        </S.TabContent>
        <S.TabContent>
          <S.ImageCard>
            <Image
              quality={100}
              src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
              alt="image"
              fill
              sizes=""
              priority
            />
          </S.ImageCard>
          <S.DescriptionNews number={1}>
            <S.NewsTitle darkMode={mode}>
              <Link href="/home">
                These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales These 5 Simple TECHNOLOGY Tricks Will Pump Up
                Your Sales These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales
              </Link>
            </S.NewsTitle>
            <S.TagList>
              <S.TagItem>
                By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
              </S.TagItem>
            </S.TagList>
          </S.DescriptionNews>
        </S.TabContent>
      </S.RightInfo>
    </S.Wrapper>
  );
}

export default ListPostCategory;
