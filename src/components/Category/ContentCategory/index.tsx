import * as S from './ContentCategory.module';
import { Fragment } from 'react';
import ListPostCategory from '../ListPostCategory';
import { iMode } from '@/src/utils/interface';

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
