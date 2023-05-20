import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`fixed inset-0 z-[100] flex justify-center items-center`}
`;

export const Modal = styled.div`
  ${tw`fixed inset-0 bg-[var(--modal)] z-[100] cursor-pointer`}
`;

const fadeIn = keyframes`
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
`;

export const Content = styled.div`
  ${tw`w-[800px] min-h-[400px] bg-white flex z-[101]`}
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transform: scale(1);
  animation: ${fadeIn} 0.5s forwards;

  @media (max-width: 739px) {
    ${tw``}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[720px]`}
  }
`;

export const Banner = styled.div`
  ${tw`w-[50%] bg-[var(--navbar-dark)] flex justify-center items-center`}
`;

export const Detail = styled.div`
  ${tw`flex flex-col items-center w-[50%] relative`}
`;

export const Title = styled.h2`
  ${tw`font-semibold text-[30px] uppercase text-[var(--text-color-black)] mt-8`}
`;

export const CustomIcon = styled(FontAwesomeIcon)`
  ${tw`absolute w-4 h-4 p-2 rounded-full bg-[var(--text-color)] text-black top-[15px] right-[15px] cursor-pointer`}
  &:hover {
    ${tw`bg-[var(--text-color-black)] text-[var(--primary)]`}
  }
`;
