import styled from 'styled-components';
import tw from 'twin.macro';

export const Content = styled.div<{ darkMode: boolean }>`
  ${tw`w-full mt-[45px] bg-white flex justify-center items-center`}
  ${({ darkMode }) => darkMode && tw`bg-[var(--text-color-black)]`}
`;
