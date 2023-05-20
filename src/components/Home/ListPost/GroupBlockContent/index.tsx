import BlockContent from '@/src/components/Global/BlockContent';
import * as S from './GroupBlockContent.module';
import { post } from '@/src/utils/dataConfig';
import { iMode } from '@/src/utils/interface';
import { useGetAllPostsQuery, useGetAllActivePostsQuery } from '@/pages/api/services/productApis';

function GroupBlockContent({ mode }: iMode) {
  const { data: postData, isFetching: isFetchingPostData } = useGetAllPostsQuery();
  const { data: activePostData, isFetching: isFetchingActivePostData } = useGetAllActivePostsQuery();

  return (
    <S.ListCard>
      {isFetchingActivePostData
        ? post.map((item, index) => <BlockContent key={index} data={item} mode={mode} />)
        : activePostData?.map((item, index) => <BlockContent key={index} data={item} mode={mode} />)}
    </S.ListCard>
  );
}

export default GroupBlockContent;
