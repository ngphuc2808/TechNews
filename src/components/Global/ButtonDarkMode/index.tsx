import { useState } from 'react';
import * as S from './ButtonDarkMode.module';
import { darkModeArray } from '@/src/utils/dataConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '@/src/features/redux/slices/darkModeSlice';

function ButtonDarkMode() {
  const dispatch = useDispatch();

  const darkMode = useSelector((state: any) => state.darkMode);

  const handleEvent = (index: number) => {
    if (index === 0) {
      dispatch(
        setDarkMode({
          mode: false,
          title: 'light',
        }),
      );
      return;
    }

    if (index === 1) {
      dispatch(
        setDarkMode({
          mode: true,
          title: 'dark',
        }),
      );
      return;
    }
  };

  return (
    <S.Wrapper>
      <S.ListMode>
        {darkModeArray.map((item, index) => (
          <S.ItemMode key={index} active={item.key === darkMode.title} onClick={() => handleEvent(index)}>
            {item.title}
          </S.ItemMode>
        ))}
      </S.ListMode>
    </S.Wrapper>
  );
}

export default ButtonDarkMode;
