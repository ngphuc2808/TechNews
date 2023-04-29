import Link from 'next/link';
import Image from 'next/image';
import * as S from './ContentCategory.module';
import { Fragment } from 'react';
import ListPostCategory from '../ListPostCategory';
import { useSelector } from 'react-redux';

function ContentCategory() {
  const { mode } = useSelector((state: any) => state.darkMode);

  return (
    <Fragment>
      <S.Content darkMode={mode}>
        <ListPostCategory />
      </S.Content>
    </Fragment>
  );
}

export default ContentCategory;
