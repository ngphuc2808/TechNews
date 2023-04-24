import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.header`
  ${tw`fixed top-0 right-0 left-0 z-50`}
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Container = styled.div`
  ${tw`flex flex-col justify-center items-center mt-[107px]`}
  > * {
    &:last-child {
      ${tw`mb-[45px]`}
    }
  }
`;

export const Content = styled.div`
  ${tw`w-[1260px] px-[15px] mt-[45px]`}
`;

export const ContentBlack = styled.div`
  ${tw`w-full mt-[45px] bg-black flex justify-center items-center`}
`;

export const LatestNews = styled.div`
  ${tw`w-full min-h-[670px] flex `}
`;

export const LatestNewsLeft = styled.div`
  ${tw`relative w-2/3 mr-[15px] cursor-pointer overflow-hidden`}
  > img {
    ${tw`transition delay-0 ease-linear duration-200`}
  }
  &:hover > img {
    ${tw`scale-110`}
  }
  &:hover > :last-child > h3 > a {
    background-size: 100% 2px;
    color: inherit;
  }
`;

export const LatestNewsRight = styled.div`
  ${tw`w-1/3 ml-[15px] flex flex-col justify-between`}
`;

export const Topic = styled.div`
  ${tw`relative w-full h-[47%] cursor-pointer overflow-hidden`}
  > img {
    ${tw`transition delay-0 ease-linear duration-200`}
  }
  &:hover > img {
    ${tw`scale-110`}
  }
  &:hover > :last-child > h3 > a {
    background-size: 100% 2px;
    color: inherit;
  }
`;

export const Overlay = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full`}
  background: linear-gradient(180deg, rgba(18, 18, 19, 0) 0%, #121213 100%);
`;

export const DescriptionNews = styled.div<{ number: number }>`
  ${tw`absolute bottom-0 left-0 w-full p-[30px]`}
  ${({ number }) => number === 0 && tw`p-[50px]`}
  > * {
    &:first-child > p {
      ${({ number }) => (number === 0 ? tw`bg-[#c0cb63]` : number === 1 ? tw`bg-[#865681]` : tw`bg-[#1e5d88]`)}
    }
  }
  > * {
    &:nth-child(2) {
      ${({ number }) => (number === 0 ? tw`text-[28px]` : tw`text-[18px]`)}
    }
  }
`;

export const CategoryTag = styled.div`
  ${tw`flex items-center justify-start`}
`;

export const CategoryName = styled.p`
  ${tw`py-1.5 px-[11px] text-[11px] font-semibold uppercase mr-2.5 mb-2.5`}
`;

export const NewsTitle = styled.h3`
  ${tw`font-semibold mb-2.5 relative`}
  > a {
    transition: background-size 300ms ease-in-out;
    background-image: linear-gradient(white, white);
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: 0% 2px;
  }
`;

export const AuthorTag = styled.div`
  ${tw`text-[14px] text-[var(--text-color)] flex`}
`;

export const AuthorName = styled.p`
  ${tw`transition delay-0 ease-linear duration-300`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;
