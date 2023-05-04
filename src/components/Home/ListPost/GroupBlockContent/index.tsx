import BlockContent from '@/src/components/Global/BlockContent';
import * as S from './GroupBlockContent.module';
import { post } from '@/src/utils/dataConfig';
import { iMode } from '@/src/utils/interface';
function GroupBlockContent({ mode }: iMode) {
  return (
    <S.ListCard>
      {post.map((item, index) => (
        <BlockContent key={index} data={item} mode={mode} />
      ))}
    </S.ListCard>
  );
}

export default GroupBlockContent;
