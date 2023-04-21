import { useState } from 'react';
import * as S from './ButtonDarkMode.module';
import { darkModeArray } from '@/src/utils/dataConfig';
import { useDispatch } from 'react-redux';
import { setDarkMode } from '@/src/features/redux/slices/darkModeSlice';

interface iItem {
  title: string;
  key: string;
}

function ButtonDarkMode() {
  const dispatch = useDispatch();

  const [modeTitle, setModeTitle] = useState<string>('light');

  const handleEvent = (index: number, item: iItem) => {
    setModeTitle(item.key);

    if (index === 0) {
      dispatch(setDarkMode(false));
      return;
    }

    if (index === 1) {
      dispatch(setDarkMode(true));
    }
  };

  return (
    <S.Wrapper>
      <S.ListMode>
        {darkModeArray.map((item, index) => (
          <S.ItemMode key={index} active={item.key === modeTitle} onClick={() => handleEvent(index, item)}>
            {item.title}
          </S.ItemMode>
        ))}
      </S.ListMode>
    </S.Wrapper>
  );
}

export default ButtonDarkMode;
