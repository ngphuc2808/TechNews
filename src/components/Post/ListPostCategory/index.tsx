import * as S from './ListPostCategory.module';
import Image from 'next/image';
import Link from 'next/link';
import { widgetArray } from '@/src/utils/dataConfig';
import { useState } from 'react';
import { post } from '@/src/utils/dataConfig';
import { useSelector } from 'react-redux';
import BlockContent from './BlockContent';
import Pagination from './Pagination';

function ListPostCategory() {
  const [activeWidget, setActiveWidget] = useState<string>('Recent');

  const { mode } = useSelector((state: any) => state.darkMode);

  return (
    <S.Wrapper>
      <S.LeftInfo>
        <S.ListCard>
          <Pagination />
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