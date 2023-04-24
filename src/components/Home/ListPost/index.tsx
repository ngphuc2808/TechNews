import * as S from './ListPost.module';
import Image from 'next/image';
import Link from 'next/link';
import { widgetArray } from '@/src/utils/dataConfig';
import { useState } from 'react';

function ListPost() {
  const [activeWidget, setActiveWidget] = useState('Recent');
  return (
    <S.Wrapper>
      <S.LeftInfo>
        <S.Title>Tin Mới</S.Title>
        <S.ListCard>
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
                <S.CategoryName>Smart Watch</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
              </S.NewsTitle>
              <S.TagList>
                <S.TagItem>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.TagItem>
                <S.TagItem>November 6, 2019</S.TagItem>
                <S.TagItem>3,190 Views</S.TagItem>
              </S.TagList>
              <S.DesContent>
                For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in
                words. Which is
              </S.DesContent>
            </S.DescriptionNews>
          </S.BlockContent>
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
                <S.CategoryName>Smart Watch</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
              </S.NewsTitle>
              <S.TagList>
                <S.TagItem>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.TagItem>
                <S.TagItem>November 6, 2019</S.TagItem>
                <S.TagItem>3,190 Views</S.TagItem>
              </S.TagList>
              <S.DesContent>
                For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in
                words. Which is
              </S.DesContent>
            </S.DescriptionNews>
          </S.BlockContent>
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
                <S.CategoryName>Smart Watch</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
              </S.NewsTitle>
              <S.TagList>
                <S.TagItem>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.TagItem>
                <S.TagItem>November 6, 2019</S.TagItem>
                <S.TagItem>3,190 Views</S.TagItem>
              </S.TagList>
              <S.DesContent>
                For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in
                words. Which is
              </S.DesContent>
            </S.DescriptionNews>
          </S.BlockContent>
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
                <S.CategoryName>Smart Watch</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
              </S.NewsTitle>
              <S.TagList>
                <S.TagItem>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.TagItem>
                <S.TagItem>November 6, 2019</S.TagItem>
                <S.TagItem>3,190 Views</S.TagItem>
              </S.TagList>
              <S.DesContent>
                For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in
                words. Which is
              </S.DesContent>
            </S.DescriptionNews>
          </S.BlockContent>
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
                <S.CategoryName>Smart Watch</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
              </S.NewsTitle>
              <S.TagList>
                <S.TagItem>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.TagItem>
                <S.TagItem>November 6, 2019</S.TagItem>
                <S.TagItem>3,190 Views</S.TagItem>
              </S.TagList>
              <S.DesContent>
                For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in
                words. Which is
              </S.DesContent>
            </S.DescriptionNews>
          </S.BlockContent>
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
                <S.CategoryName>Smart Watch</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
              </S.NewsTitle>
              <S.TagList>
                <S.TagItem>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.TagItem>
                <S.TagItem>November 6, 2019</S.TagItem>
                <S.TagItem>3,190 Views</S.TagItem>
              </S.TagList>
              <S.DesContent>
                For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in
                words. Which is
              </S.DesContent>
            </S.DescriptionNews>
          </S.BlockContent>
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
                <S.CategoryName>Smart Watch</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
              </S.NewsTitle>
              <S.TagList>
                <S.TagItem>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.TagItem>
                <S.TagItem>November 6, 2019</S.TagItem>
                <S.TagItem>3,190 Views</S.TagItem>
              </S.TagList>
              <S.DesContent>
                For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in
                words. Which is
              </S.DesContent>
            </S.DescriptionNews>
          </S.BlockContent>
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
                <S.CategoryName>Smart Watch</S.CategoryName>
              </S.CategoryTag>
              <S.NewsTitle>
                <Link href="/home">These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</Link>
              </S.NewsTitle>
              <S.TagList>
                <S.TagItem>
                  By&nbsp;<S.AuthorName>Phucnh</S.AuthorName>
                </S.TagItem>
                <S.TagItem>November 6, 2019</S.TagItem>
                <S.TagItem>3,190 Views</S.TagItem>
              </S.TagList>
              <S.DesContent>
                For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in
                words. Which is
              </S.DesContent>
            </S.DescriptionNews>
          </S.BlockContent>
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
            <S.NewsTitle>
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
            <S.NewsTitle>
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
            <S.NewsTitle>
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
            <S.NewsTitle>
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

export default ListPost;
