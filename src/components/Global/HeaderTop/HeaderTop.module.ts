import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderTop = styled.header`
  ${tw`bg-[#1a1a1a] py-3`}
`;

export const Container = styled.div`
  ${tw`w-[1260px] h-[34px] flex justify-between mx-auto px-[15px] flex items-center`}
`;

export const MenuHeader = styled.ul`
  ${tw`inline-flex text-sm list-none text-[#cecece]`}
  > * {
    &:not(:last-child) {
      ${tw`mr-5`}
    }
  }
`;

export const Entry = styled.div`
  ${tw`flex items-center text-sm text-[#cecece]`}
`;

export const MenuHeaderItem = styled.li`
  ${tw`p-[5px] transition delay-0 ease-linear duration-300 cursor-pointer caret-transparent`}
  &:hover {
    ${tw`text-[#ff2c54]`}
  }
`;

export const Logo = styled.div`
  ${tw`w-[86px] h-full cursor-pointer `}
`;

export const Separate = styled.div`
  ${tw`mx-2.5`}
  &::after {
    content: '';
    ${tw`h-full border-r-[1px] border-solid border-[#cecece]`}
  }
`;

export const ButtonEntry = styled.button`
  ${tw`transition delay-0 ease-linear duration-300 cursor-pointer caret-transparent`}
  &:hover {
    ${tw`text-[#ff2c54]`}
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${tw`w-3.5 h-3.5 text-[#cecece] mr-2.5`}
`;
