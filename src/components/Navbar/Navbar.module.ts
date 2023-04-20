import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.nav`
  ${tw`bg-black h-[49px]`}
`;

export const Container = styled.div`
  ${tw`w-[1260px] h-full flex justify-between mx-auto px-[15px] flex items-center`}
`;

export const MenuNav = styled.ul`
  ${tw`inline-flex items-center justify-center text-base list-none text-white`}
  > * {
    &:not(:last-child) {
      ${tw`mr-5`}
    }
  }
`;

export const MenuNavItem = styled.li<{ active?: boolean }>`
  ${tw`flex items-center justify-center relative font-bold transition delay-0 ease-linear duration-300 cursor-pointer caret-transparent`}
  &:before {
    ${({ active }) =>
      active
        ? tw`content-[''] absolute bottom-0 left-0 w-full h-0.5 origin-bottom-left bg-current transition delay-0 ease-linear duration-300 caret-transparent`
        : tw`content-[''] absolute bottom-0 left-0 w-full h-0.5 scale-x-0 origin-bottom-left bg-current transition delay-0 ease-linear duration-300 caret-transparent`}
  }
  &:hover {
    ${tw`text-[#ff2c54]`}
    &:before {
      ${({ active }) => !active && tw`content-[''] scale-x-100`}
    }
  }
`;

export const SearchArea = styled.div`
  ${tw`w-[250px] flex items-center justify-center caret-transparent`}
  > svg {
    ${tw`w-5 h-5 text-white cursor-pointer ml-2`}
    &:hover {
      ${tw`opacity-80`}
    }
  }
`;

export const SearchInput = styled.input`
  ${tw`w-full h-full bg-black border-b-[1px] border-solid border-white outline-none caret-white text-white pl-1 pr-4`}
`;
