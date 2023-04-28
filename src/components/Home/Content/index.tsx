import Link from 'next/link';
import Image from 'next/image';
import * as S from './Content.module';
import { Fragment } from 'react';
import ListHotNews from '../ListHotNews';
import ListPost from '../ListPost';

function Content() {
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
                <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
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
                  <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
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
                  <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
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
        <ListPost />
      </S.ContentBlack>
      <S.Content>
        <ListHotNews title="Nổi Bật" />
      </S.Content>
    </Fragment>
  );
}

export default Content;
