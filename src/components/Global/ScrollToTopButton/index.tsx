import { useState, useEffect } from 'react';
import * as S from './ScrollToTopButton.module';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {showTopBtn && (
        <S.Wrapper>
          <S.Button>
            <S.StyledFontAwesomeIcon icon={faAngleUp} onClick={goToTop} />
          </S.Button>
        </S.Wrapper>
      )}
    </>
  );
}

export default ScrollToTop;
