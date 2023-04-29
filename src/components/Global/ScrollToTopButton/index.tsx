import { useState, useEffect, Fragment } from 'react';
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
    <Fragment>
      {showTopBtn && (
        <S.Wrapper>
          <S.Button onClick={goToTop}>
            <S.StyledFontAwesomeIcon icon={faAngleUp} />
          </S.Button>
        </S.Wrapper>
      )}
    </Fragment>
  );
}

export default ScrollToTop;
