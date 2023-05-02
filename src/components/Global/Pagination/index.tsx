import { Fragment, useState } from 'react';
import BlockContent from '../BlockContent';
import * as S from './Pagination.module';
import { iPost } from '@/src/utils/interface';

interface iItem {
  currentItems: iPost[];
  mode: boolean;
}

interface iData {
  data: iPost[];
  mode: boolean;
  profilePage: boolean;
}

function Items({ currentItems, mode }: iItem) {
  return (
    <Fragment>
      {currentItems && currentItems.map((item, index) => <BlockContent key={index} data={item} mode={mode} />)}
    </Fragment>
  );
}

function Pagination({ data, mode, profilePage }: iData) {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = profilePage ? 2 : 6;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems: iPost[] = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <Fragment>
      <Items currentItems={currentItems} mode={mode} />
      <S.StyledReactPaginate
        darkMode={mode}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </Fragment>
  );
}

export default Pagination;
