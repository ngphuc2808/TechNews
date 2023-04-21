import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`w-full min-h-screen flex justify-center items-center bg-white`}
`;

const animation = keyframes`
    to {
        background-position: 200% center;
    }
`;

export const Title = styled.h3`
  ${tw`text-7xl font-semibold leading-[100px]`}
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${animation} 2s linear infinite;
`;
