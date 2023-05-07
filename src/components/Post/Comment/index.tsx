import { useState } from 'react';
import * as S from '../Post.module';
import Image from 'next/image';
import { iComment } from '@/src/utils/interface';

interface iData {
  data: iComment;
}
function Comment({ data }: iData) {
  return (
    <S.Comment>
      <S.UserAvatar>
        <Image
          quality={100}
          src="https://new.axilthemes.com/themes/papr/wp-content/uploads/2019/11/smart-1000x753.jpg"
          alt="image"
          fill
          sizes=""
          priority
        />
      </S.UserAvatar>
      <S.DesComment>
        <S.NameOfUser>{data.name}</S.NameOfUser>
        <S.CommentContent>{data.comment}</S.CommentContent>
        <S.TimeCmt>{data.time}</S.TimeCmt>
      </S.DesComment>
    </S.Comment>
  );
}

export default Comment;
