import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.section`
  ${tw`w-full min-h-screen flex flex-col justify-center items-center bg-white`}
`;

export const Title = styled.h1`
  ${tw`text-9xl font-semibold leading-[100px] text-[var(--primary)]`}
`;

export const Text = styled.h2`
  ${tw`text-8xl font-semibold leading-[100px] text-[var(--text-color-black-two)] mt-[60px]`}
`;
