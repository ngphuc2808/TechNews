import BlockContent from '@/src/components/Global/BlockContent';
import * as S from './GroupBlockContent.module';
import { post } from '@/src/utils/dataConfig';
import { iMode } from '@/src/utils/interface';
import { useGetAllPostsQuery } from '@/pages/api/services/productApis';

function GroupBlockContent({ mode }: iMode) {
  const { data: postData, isFetching: isFetchingPostData } = useGetAllPostsQuery();

  return (
    <S.ListCard>
      {isFetchingPostData
        ? post.map((item, index) => <BlockContent key={index} data={item} mode={mode} />)
        : postData?.slice(0, 7).map((item, index) => <BlockContent key={index} data={item} mode={mode} />)}
    </S.ListCard>
  );
}

export default GroupBlockContent;
