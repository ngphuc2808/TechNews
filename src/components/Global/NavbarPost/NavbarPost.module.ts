import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.nav<{ darkMode: boolean }>`
  ${tw`flex justify-center items-center bg-white h-[86px] text-[var(--text-color-black)]`}
  ${({ darkMode }) => darkMode && tw`bg-[var(--navbar-dark)] text-white`}
`;

export const Container = styled.div`
  ${tw`w-[1260px] h-full flex justify-between px-[15px] flex items-center`}
`;

export const MenuNav = styled.ul`
  ${tw`inline-flex items-center justify-center text-base list-none`}
  > * {
    &:not(:last-child) {
      ${tw`mr-5`}
    }
  }
`;

export const MenuNavItem = styled.li<{ active: boolean; submenu: boolean }>`
  ${tw`flex items-center justify-center relative font-bold transition delay-0 ease-linear duration-300 cursor-pointer caret-transparent`}

  ${({ submenu }) => submenu && tw`relative`}
  
  ${({ active }) => active && tw`text-[var(--primary)]`}

  &:before {
    ${tw`content-[''] absolute bottom-0 left-0 w-full h-0.5 scale-x-0 origin-bottom-left bg-current transition delay-0 ease-linear duration-300`}
    ${({ active }) => active && tw`scale-x-100`}
  }

  &:hover {
    > ul {
      ${({ submenu }) => submenu && tw`block`}
    }
    ${tw`text-[var(--primary)]`}
    &:before {
      ${tw`scale-x-100`}
    }
  }
`;

export const SubMenu = styled.ul<{ darkMode: boolean }>`
  ${tw`w-[200px] bg-white hidden absolute top-[38px] left-0`}
  ${({ darkMode }) => darkMode && tw`bg-[var(--navbar-dark)]`}
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  > :last-child {
    ${tw`pb-4`}
  }
  > li {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }
  &:after {
    ${tw`content-[''] absolute bg-black w-full h-[20px] top-[-20px] bg-transparent`}
  }
`;

export const SubItem = styled.li`
  ${tw`text-sm text-[var(--text-color-black)] transition delay-0 ease-linear duration-300`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
  > a {
    ${tw`pl-4 pt-4 block w-full`}
  }
`;

export const SearchArea = styled.div`
  ${tw`w-[350px] flex items-center justify-center caret-transparent`}
  > svg {
    ${tw`w-5 h-5 cursor-pointer ml-2`}
    &:hover {
      ${tw`text-[#f0a500]`}
    }
  }
`;

export const SearchInput = styled.input<{ darkMode: boolean }>`
  ${tw`w-full h-full bg-transparent border-b-[1px] border-solid border-[var(--text-color-black)] outline-none caret-[var(--text-color-black)] py-1 pl-1 pr-4 transition delay-0 ease-linear duration-300`}
  ${({ darkMode }) => darkMode && tw`caret-white border-white`}
  &:focus {
    ${tw`border-[#f0a500]`}
  }
`;
