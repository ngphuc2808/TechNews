import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.nav<{ darkMode: boolean }>`
  ${tw`flex justify-center items-center bg-white h-[86px] text-[var(--text-color-black)]`}
  ${({ darkMode }) => darkMode && tw`bg-[var(--navbar-dark)] text-white`}
`;

export const Container = styled.div`
  ${tw`w-[1260px] h-full flex justify-between px-[15px] flex items-center`}

  @media (max-width: 739px) {
    ${tw`w-[384px]`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[690px]`}
  }
`;

export const MenuNav = styled.ul`
  ${tw`inline-flex items-center justify-center text-base list-none`}
  > * {
    &:not(:last-child) {
      ${tw`mr-5`}
    }
  }

  @media (max-width: 739px) {
    ${tw`hidden`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`hidden`}
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

export const MenuMobile = styled.div`
  ${tw``}
`;

export const SeparateMobile = styled.div<{ darkMode: boolean }>`
  ${tw`mx-2.5`}
  &::after {
    ${tw`content-[''] h-full border-r-[1px] border-solid border-[var(--text-color-black)]`}
    ${({ darkMode }) => darkMode && tw`border-white`}
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

export const SubMenuMobile = styled.ul<{ darkMode: boolean }>`
  ${tw`w-[200px] bg-white hidden absolute top-[34px] right-[-200px] text-center`}
  ${({ darkMode }) => darkMode && tw`bg-[var(--navbar-dark)] text-[var(--text-color)]`}
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const SubItemMobile = styled.li<{ darkMode: boolean }>`
  ${tw`text-lg text-[var(--text-color-black)] transition delay-0 ease-linear duration-300`}
  ${({ darkMode }) => darkMode && tw`text-white`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
  > a {
    ${tw`p-4 block w-full`}
  }
`;

export const CustomIconCloseMenu = styled(FontAwesomeIcon)`
  ${tw`absolute text-[30px] text-black top-[25px] right-[25px] cursor-pointer`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;

export const CustomIconBars = styled(FontAwesomeIcon)`
  ${tw`text-3xl hover:text-[var(--primary)] hidden`}

  @media (max-width: 739px) {
    ${tw`block`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`block`}
  }
`;

export const Entry = styled.div`
  ${tw`flex text-xl text-[var(--text-color-black)] w-full justify-center items-center mt-10 py-10 px-5 border-b-[1px] border-solid border-[#cecece]`}
`;

export const ButtonEntry = styled.button`
  ${tw`transition delay-0 ease-linear duration-300 cursor-pointer caret-transparent`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;

export const StyledFontAwesomeIconLeft = styled(FontAwesomeIcon)`
  ${tw`w-5 h-5 text-[var(--text-color-black)] mr-3`}
`;

export const LabelMobile = styled.label`
  ${tw``}
`;

export const MenuNavMobile = styled.div<{ darkMode: boolean }>`
  ${tw`fixed inset-0 z-[100] flex flex-col items-start bg-white w-[50%] shadow-2xl text-[var(--text-color-black)] translate-x-[-100%]`}
  transition: transform linear 0.3s;
  ${({ darkMode }) => darkMode && tw`bg-[var(--navbar-dark)] text-white`}

  > ${Entry} {
    ${({ darkMode }) => darkMode && tw`text-white`}
    > ${StyledFontAwesomeIconLeft} {
      ${({ darkMode }) => darkMode && tw`text-white`}
    }
  }

  > ${LabelMobile} > ${CustomIconCloseMenu} {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }

  > :last-child {
    ${tw`w-full`}
    > :first-child {
      ${tw`mt-5`}
    }
  }

  @media (max-width: 739px) {
    ${tw`w-full`}
  }
`;

export const Modal = styled.div`
  ${tw`fixed inset-0 bg-[var(--modal)] z-[100] cursor-pointer hidden`}
`;

export const InputMobile = styled.input`
  &:checked ~ ${MenuNavMobile} {
    ${tw`translate-x-0`}
  }
  &:checked ~ ${LabelMobile} > ${Modal} {
    ${tw`block`}
  }
`;

export const MenuBarMobile = styled.ul`
  > * {
    ${tw`w-full p-5 text-xl`}
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

  @media (max-width: 739px) {
    ${tw`justify-end`}
  }
`;

export const SearchInput = styled.input<{ darkMode: boolean }>`
  ${tw`w-full h-full bg-transparent border-b-[1px] border-solid border-[var(--text-color-black)] outline-none caret-[var(--text-color-black)] py-1 pl-1 pr-4 transition delay-0 ease-linear duration-300`}
  ${({ darkMode }) => darkMode && tw`caret-white border-white`}
  &:focus {
    ${tw`border-[#f0a500]`}
  }

  @media (max-width: 739px) {
    ${tw`w-[50%]`}
  }
`;
