import { Fragment, useState } from 'react';
import BlockContent from '../BlockContent';
import { post } from '@/src/utils/dataConfig';
import * as S from './Pagination.module';
import { iMode, iPost } from '@/src/utils/interface';

interface iItem {
  currentItems: iPost[];
  mode: boolean;
}

function Items({ currentItems, mode }: iItem) {
  return (
    <Fragment>
      {currentItems && currentItems.map((item, index) => <BlockContent key={index} data={item} mode={mode} />)}
    </Fragment>
  );
}

function Pagination({ mode }: iMode) {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems: iPost[] = post.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(post.length / itemsPerPage);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % post.length;
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
