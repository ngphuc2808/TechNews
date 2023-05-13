import * as S from './ContentCategory.module';
import { Fragment, useEffect, useState } from 'react';
import ListPostCategory from '../ListPostCategory';
import { iMode } from '@/src/utils/interface';
import { useRouter } from 'next/router';
import { category } from '@/src/utils/dataConfig';
import { useGetAllPostsByCatQuery } from '@/pages/api/services/productApis';

function ContentCategory({ mode }: iMode) {
  return (
    <Fragment>
      <S.Content darkMode={mode}>
        <ListPostCategory mode={mode} />
      </S.Content>
    </Fragment>
  );
}

export default ContentCategory;
