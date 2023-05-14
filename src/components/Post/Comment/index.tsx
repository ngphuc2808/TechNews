import { useState } from 'react';
import * as S from '../Post.module';
import Image from 'next/image';
import { iComment } from '@/src/utils/interface';

interface iData {
  data: iComment;
  darkMode: boolean;
}
function Comment({ data, darkMode }: iData) {
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
        <S.NameOfUser>{data?.username}</S.NameOfUser>
        <S.CommentContent darkMode={darkMode}>{data?.content}</S.CommentContent>
        <S.TimeCmt darkMode={darkMode}>{data?.time}</S.TimeCmt>
      </S.DesComment>
    </S.Comment>
  );
}

export default Comment;
