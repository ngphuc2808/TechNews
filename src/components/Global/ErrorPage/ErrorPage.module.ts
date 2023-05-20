import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.section`
  ${tw`w-full min-h-screen flex flex-col justify-center items-center bg-white`}
`;

export const Title = styled.h1`
  ${tw`text-9xl font-semibold leading-[100px] text-[var(--primary)]`}
  @media (max-width: 739px) {
    ${tw`text-6xl`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`text-8xl`}
  }
`;

export const Text = styled.h2`
  ${tw`text-8xl font-semibold leading-[100px] text-[var(--text-color-black-two)] mt-[60px]`}
  @media (max-width: 739px) {
    ${tw`text-4xl px-8 text-center mt-[30px]`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`text-6xl px-8 text-center mt-[45px]`}
  }
`;
