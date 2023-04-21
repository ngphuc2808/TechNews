import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.nav<{ darkMode: boolean }>`
  ${tw`flex justify-center items-center bg-black h-[49px]`}
  ${({ darkMode }) => darkMode && tw`bg-[var(--navbar-dark)]`}
`;

export const Container = styled.div`
  ${tw`w-[1260px] h-full flex justify-between px-[15px] flex items-center`}
`;

export const MenuNav = styled.ul`
  ${tw`inline-flex items-center justify-center text-base list-none text-white`}
  > * {
    &:not(:last-child) {
      ${tw`mr-5`}
    }
  }
`;

export const MenuNavItem = styled.li<{ active: boolean }>`
  ${tw`flex items-center justify-center relative font-bold transition delay-0 ease-linear duration-300 cursor-pointer caret-transparent`}
  ${({ active }) => active && tw`text-[var(--primary)]`}

  &:before {
    ${tw`content-[''] absolute bottom-0 left-0 w-full h-0.5 scale-x-0 origin-bottom-left bg-current transition delay-0 ease-linear duration-300`}
    ${({ active }) => active && tw`scale-x-100`}
  }

  &:hover {
    ${tw`text-[var(--primary)]`}
    &:before {
      ${tw`scale-x-100`}
    }
  }
`;

export const SearchArea = styled.div`
  ${tw`w-[250px] flex items-center justify-center caret-transparent`}
  > svg {
    ${tw`w-5 h-5 text-white cursor-pointer ml-2`}
    &:hover {
      ${tw`text-[#f0a500]`}
    }
  }
`;

export const SearchInput = styled.input`
  ${tw`w-full h-full bg-transparent border-b-[1px] border-solid border-white outline-none caret-white text-white py-1 pl-1 pr-4 transition delay-0 ease-linear duration-300 caret-transparent`}
  &:focus {
    ${tw`border-[#f0a500]`}
  }
`;
