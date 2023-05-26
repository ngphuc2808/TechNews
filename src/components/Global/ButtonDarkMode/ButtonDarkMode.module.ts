import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.section`
  ${tw`fixed right-[-30px] top-1/2 translate-y-[-50%] rotate-90 z-10`}
`;

export const ListMode = styled.ul`
  ${tw`list-none flex items-center justify-center`}
  > li {
    &:first-child {
      ${tw`rounded-s-[100px] pl-[15px]`}
    }
    &:last-child {
      ${tw`rounded-e-[100px] pr-[15px]`}
    }
  }
`;

export const ItemMode = styled.li<{ active: boolean }>`
  ${tw`flex items-center py-[5px] px-[13px] border-2 border-solid border-[var(--primary)] cursor-pointer text-[var(--primary)] text-sm font-semibold caret-transparent`}
  ${({ active }) => active && tw`bg-[var(--primary)] text-white`}
`;
