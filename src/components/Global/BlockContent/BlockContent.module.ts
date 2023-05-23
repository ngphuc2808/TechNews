import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BlockContent = styled.div`
  ${tw`flex h-[285px] mb-[30px]`}
  > :first-child > img {
    ${tw`transition delay-0 ease-linear duration-200`}
  }
  &:hover > :first-child > img {
    ${tw`scale-110`}
  }
  &:hover > :last-child > :nth-child(2) > a {
    background-size: 100% 2px;
    color: inherit;
  }

  @media (max-width: 739px) {
    ${tw`flex-col h-auto`}
  }
`;

export const PictureContent = styled.div`
  ${tw`relative h-full w-[285px] mr-[30px] cursor-pointer overflow-hidden shrink-0`}

  @media (max-width: 739px) {
    ${tw`w-full h-[300px] mr-0 mb-[30px]`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`mr-[20px]`}
  }
`;

export const DescriptionNews = styled.div<{ number: number }>`
  ${tw`transition delay-0 ease-linear duration-300`}
  > * {
    &:first-child > p {
      ${({ number }) => (number === 0 ? tw`bg-[#c0cb63]` : number === 1 ? tw`bg-[#865681]` : tw`bg-[#1e5d88]`)}
    }
  }
  > * {
    &:nth-child(2) {
      ${tw`text-2xl`}
      @media (max-width: 739px) {
        ${tw`text-lg`}
      }
    }
  }
`;

export const CategoryTag = styled.div`
  ${tw`flex items-center justify-start text-white mb-1`}
`;

export const CategoryName = styled.p`
  ${tw`py-1.5 px-[11px] text-[11px] font-semibold uppercase mr-2.5 mb-2.5`}
`;

export const NewsTitle = styled.h3<{ darkMode: boolean; homePage: boolean }>`
  ${tw`w-full font-semibold mb-2.5 relative text-[var(--text-color-black)]`}
  ${({ darkMode }) => darkMode && tw`text-white`}
  ${({ homePage }) => homePage && tw`text-white`}
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  > a {
    transition: background-size 200ms ease-in-out;
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: 0% 2px;
    ${({ darkMode }) =>
      darkMode
        ? 'background-image: linear-gradient(var(--white), var(--white));'
        : 'background-image: linear-gradient(var(--text-color-black), var(--text-color-black));'};
    ${({ homePage }) =>
      homePage
        ? 'background-image: linear-gradient(var(--white), var(--white));'
        : 'background-image: linear-gradient(var(--text-color-black), var(--text-color-black));'};

    @media (max-width: 739px) {
      ${tw`text-xl`}
    }
    @media (min-width: 740px) and (max-width: 1023px) {
      ${tw`text-xl`}
    }
  }
`;

export const TagList = styled.ul`
  ${tw`text-[14px] text-[var(--text-color)] mb-[10px] flex items-center justify-between list-none`}

  @media (max-width: 739px) {
    ${tw`flex-wrap`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`flex-wrap`}
  }
`;

export const TagItem = styled.div`
  ${tw`mr-3 flex`}
`;

export const GroupTagItem = styled.li`
  ${tw`text-[14px] text-[var(--text-color-black-three)] flex items-center`}

  @media (max-width: 739px) {
    ${tw`text-[12px] mb-[5px]`}
  }
`;

export const AuthorName = styled.p`
  ${tw`transition delay-0 ease-linear duration-300`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;

export const DesContent = styled.p<{ darkMode: boolean; homePage: boolean }>`
  ${tw`mt-[10px] text-lg text-[var(--text-color-black-two)] `}
  ${({ darkMode }) => darkMode && tw`text-[var(--text-color-grey)]`}
  ${({ homePage }) => homePage && tw`text-[var(--text-color-grey)]`}
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  @media (max-width: 739px) {
    ${tw`text-[14px] mt-[5px]`}
  }
`;

export const CustomIconLike = styled(FontAwesomeIcon)<{ check: number }>`
  ${tw`text-lg cursor-pointer mr-1`}
  ${({ check }) => check === 1 && tw`text-[#63e6be]`}
  &:hover {
    ${tw`text-[#63e6be]`}
  }
`;

export const CustomIcon = styled(FontAwesomeIcon)`
  ${tw`text-lg cursor-pointer mr-1`}
`;

export const CustomIconDislike = styled(FontAwesomeIcon)<{ check: number }>`
  ${tw`text-lg cursor-pointer mr-1`}
  ${({ check }) => check === 0 && tw`text-[#c8210e]`}

  &:hover {
    ${tw`text-[#c8210e]`}
  }
`;

export const Number = styled.p`
  ${tw`text-sm`}
`;
