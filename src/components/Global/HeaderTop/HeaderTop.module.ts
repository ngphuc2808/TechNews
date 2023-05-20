import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.header`
  ${tw`flex justify-center items-center bg-[#1a1a1a] py-3`}
`;

export const Container = styled.div`
  ${tw`w-[1260px] h-[34px] flex justify-between items-center px-[15px]`}

  @media (max-width: 739px) {
    ${tw`w-[384px]`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[690px]`}
  }
`;

export const MenuHeader = styled.ul`
  ${tw`inline-flex items-center justify-center text-sm list-none text-[#cecece]`}
  @media (max-width: 739px) {
    ${tw`order-2`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`order-2`}
  }
`;

export const Entry = styled.div`
  ${tw`flex items-center text-sm text-[#cecece]`}
  @media (max-width: 739px) {
    ${tw`hidden`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`hidden`}
  }
`;

export const MenuHeaderItem = styled.li`
  ${tw`flex items-center justify-center`}
`;

export const ItemTitle = styled.span`
  ${tw`flex items-center justify-center transition delay-0 ease-linear duration-300 cursor-pointer caret-transparent`}
  > svg {
    ${tw`transition delay-0 ease-linear duration-300 cursor-pointer caret-transparent`}
  }
  &:hover {
    > svg {
      ${tw`text-[var(--primary)]`}
    }
    ${tw`text-[var(--primary)]`}
  }
`;

export const Logo = styled.div`
  ${tw`w-[86px] h-full cursor-pointer `}
  > img {
    ${tw`w-full h-full cursor-pointer `}
  }
`;

export const Separate = styled.div`
  ${tw`mx-2.5`}
  &::after {
    ${tw`content-[''] h-full border-r-[1px] border-solid border-[#cecece]`}
  }
`;

export const ButtonEntry = styled.button`
  ${tw`transition delay-0 ease-linear duration-300 cursor-pointer caret-transparent`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;

export const StyledFontAwesomeIconLeft = styled(FontAwesomeIcon)`
  ${tw`w-3.5 h-3.5 text-[#cecece] mr-2.5`}
`;

export const StyledFontAwesomeIconRight = styled(FontAwesomeIcon)`
  ${tw`w-3.5 h-3.5 text-[#cecece] ml-2.5 transition delay-0 ease-linear duration-300 cursor-pointer`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;
