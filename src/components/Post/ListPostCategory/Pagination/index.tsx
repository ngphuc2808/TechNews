import { Fragment, useState } from 'react';
import BlockContent from '../BlockContent';
import { post } from '@/src/utils/dataConfig';
import * as S from './Pagination.module';
import { useSelector } from 'react-redux';

function Items({ currentItems }: any) {
  return (
    <Fragment>
      {currentItems && currentItems.map((item: any, index: number) => <BlockContent key={index} data={item} />)}
    </Fragment>
  );
}

function Pagination() {
  const { mode } = useSelector((state: any) => state.darkMode);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = post.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(post.length / itemsPerPage);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % post.length;
    setItemOffset(newOffset);
  };

  return (
    <Fragment>
      <Items currentItems={currentItems} />
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
