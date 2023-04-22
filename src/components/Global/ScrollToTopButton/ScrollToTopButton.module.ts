import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.section`
  ${tw`w-[40px] h-[40px] rounded-full fixed right-[28px] top-[94%] z-50 bg-[var(--primary)] animate-bounce`}
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
  ${tw`flex items-center justify-center w-full h-full`}
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${tw`w-4 h-4`}
`;
