import { useSelector } from 'react-redux';
import * as S from './ListView.module';
import Link from 'next/link';
import Image from 'next/legacy/image';

interface iTitle {
  title: string;
}
function ListView({ title }: iTitle) {
  const { mode } = useSelector((state: any) => state.darkMode);

  return (
    <S.Wrapper>
      <S.Top darkMode={mode}>
        <S.Title>{title}</S.Title>
        <S.ViewAll>View All</S.ViewAll>
      </S.Top>
      <S.ListCard>
        <S.Card>
          <Image
            src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <S.Overlay>
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
          </S.Overlay>
        </S.Card>
        <S.Card>
          <Image
            src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <S.Overlay>
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
          </S.Overlay>
        </S.Card>
        <S.Card>
          <Image
            src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <S.Overlay>
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
          </S.Overlay>
        </S.Card>
        <S.Card>
          <Image
            src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <S.Overlay>
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
          </S.Overlay>
        </S.Card>
      </S.ListCard>
    </S.Wrapper>
  );
}

export default ListView;
