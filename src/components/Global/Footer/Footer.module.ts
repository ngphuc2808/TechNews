import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.section`
  ${tw`relative bottom-0 w-full bg-black flex items-center justify-center flex-col py-[55px]`}
`;

export const Content = styled.div`
  ${tw`w-[1260px] px-[15px] flex items-center`}

  @media (max-width: 739px) {
    ${tw`w-[384px] flex-wrap justify-between`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[690px] flex-wrap justify-between`}
  }
`;

export const BlockInfo = styled.div`
  ${tw`min-h-[140px] w-[20%] px-2 `}

  @media (max-width: 739px) {
    ${tw`w-full px-0`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[50%] mt-5 px-0`}
  }
`;

export const Name = styled.h3`
  ${tw`mb-5 text-[var(--primary)] text-base font-semibold`}
  @media (max-width: 739px) {
    ${tw`mb-1`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`mb-1`}
  }
`;

export const ListInfo = styled.ul`
  ${tw`list-none text-[var(--text-color)] text-sm`}
`;

export const ItemInfo = styled.li`
  ${tw`py-1.5`}
`;

export const Connect = styled.div`
  ${tw`flex items-center justify-center`}
`;

export const Mid = styled.div`
  ${tw`w-[1260px] h-[120px] px-[15px] py-8 flex items-center justify-between`}

  @media (max-width: 739px) {
    ${tw`w-[384px] flex-col items-start`}
    > ${Connect} {
      ${tw`mt-3`}
    }
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[690px]`}
  }
`;

export const Logo = styled.div`
  ${tw`w-[86px] h-full cursor-pointer `}
  > img {
    ${tw`w-full h-full cursor-pointer `}
  }
`;

export const Title = styled.h3`
  ${tw`text-base font-semibold text-white`}
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${tw`w-6 h-6 text-[#cecece] ml-3 transition delay-0 ease-linear duration-200 cursor-pointer`}
  &:hover {
    ${tw`text-[var(--primary)] rotate-[35deg]`}
  }
`;

export const Bottom = styled.div`
  ${tw`w-[1260px] px-[15px] border-t border-[#121213]`}

  @media (max-width: 739px) {
    ${tw`w-[384px] mt-5`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[690px]`}
  }
`;

export const Description = styled.span`
  ${tw`block pt-[30px] text-sm select-none`}
`;
