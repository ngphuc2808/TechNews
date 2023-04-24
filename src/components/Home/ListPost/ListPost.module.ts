import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.section`
  ${tw`w-[1260px] px-[15px] py-[45px] text-white bg-black flex items-start justify-center`}
`;

export const LeftInfo = styled.div`
  ${tw`w-2/3 pr-[15px] overflow-auto`}
  &:hov
`;

export const RightInfo = styled.div`
  ${tw`w-1/3 pl-[45px]`}
`;

export const Title = styled.h3`
  ${tw`text-2xl font-semibold mb-5`}
`;

export const ListCard = styled.div`
  ${tw`max-h-[1500px] overflow-auto`}
`;

export const BlockContent = styled.div`
  ${tw`flex h-[285px] mb-[30px] cursor-pointer`}
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
`;

export const PictureContent = styled.div`
  ${tw`relative h-full w-[285px] mr-[30px] cursor-pointer overflow-hidden shrink-0`}
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
    }
  }
`;

export const CategoryTag = styled.div`
  ${tw`flex items-center justify-start text-white mb-1`}
`;

export const CategoryName = styled.p`
  ${tw`py-1.5 px-[11px] text-[11px] font-semibold uppercase mr-2.5 mb-2.5`}
`;

export const NewsTitle = styled.h3`
  ${tw`w-full font-semibold mb-2.5 relative text-white`}
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  > a {
    transition: background-size 200ms ease-in-out;
    background-image: linear-gradient(white, white);
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: 0% 2px;
  }
`;

export const TagList = styled.ul`
  ${tw`text-[14px] text-[var(--text-color)] flex list-none`}
`;

export const TagItem = styled.li`
  ${tw`text-[14px] text-[var(--text-color)] flex mr-4 mb-[10px]`}
`;

export const AuthorName = styled.p`
  ${tw`transition delay-0 ease-linear duration-300`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;

export const DesContent = styled.p`
  ${tw`mt-[10px] text-base text-[var(--text-color)] `}
`;

export const ListWidget = styled.ul`
  ${tw`text-[14px] text-[var(--text-color)] flex list-none mb-5`}
`;

export const ItemWidget = styled.li<{ active: boolean }>`
  ${tw`w-[calc(100%/3)] flex items-center justify-center py-[13px] px-[10px] border-[1px] border-solid border-[var(--primary)] cursor-pointer text-[var(--primary)] text-sm font-semibold caret-transparent transition delay-0 ease-linear duration-200`}
  ${({ active }) => active && tw`bg-[--primary] text-white`}
  &:hover {
    ${tw`bg-[--primary] text-white`}
  }
`;

export const TabContent = styled.div`
  ${tw`mb-5 w-full min-h-[130px] cursor-pointer flex`}
  > :first-child > img {
    ${tw`transition delay-0 ease-linear duration-200`}
  }
  &:hover > :first-child > img {
    ${tw`scale-110`}
  }
  &:hover > :last-child > :first-child > a {
    background-size: 100% 2px;
    color: inherit;
  }
`;

export const ImageCard = styled.div`
  ${tw`w-[100px] h-[100px] relative mr-5 shrink-0`}
`;
