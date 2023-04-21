import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  ${tw`relative bottom-0 w-full bg-black flex items-center justify-center flex-col py-[55px]`}
`;

export const Content = styled.div`
  ${tw`w-[1260px] px-[15px] flex items-center`}
`;

export const BlockInfo = styled.div`
  ${tw`min-h-[140px] w-[20%] px-2 `}
`;

export const Name = styled.h3`
  ${tw`mb-5 text-[var(--primary)] text-base font-semibold`}
`;

export const ListInfo = styled.ul`
  ${tw`list-none text-[var(--text-color)] text-sm`}
`;

export const ItemInfo = styled.li`
  ${tw`py-1.5`}
`;

export const Mid = styled.div`
  ${tw`w-[1260px] h-[120px] px-[15px] py-8 flex items-center justify-between`}
`;

export const Logo = styled.div`
  ${tw`w-[86px] h-full cursor-pointer `}
`;

export const Connect = styled.div`
  ${tw`flex items-center justify-center`}
`;

export const Title = styled.h3`
  ${tw`text-base font-semibold text-white`}
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${tw`w-5 h-5 text-[#cecece] ml-3 transition delay-0 ease-linear duration-300 cursor-pointer`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;

export const Bottom = styled.div`
  ${tw`w-[1260px] px-[15px] border-t border-[#121213]`}
`;

export const Description = styled.span`
  ${tw`block pt-[30px] text-white text-sm select-none`}
`;
