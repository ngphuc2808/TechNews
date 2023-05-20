import styled from 'styled-components';
import tw from 'twin.macro';

export const Content = styled.div`
  ${tw`w-[1260px] px-[15px] mt-[45px]`}

  @media (max-width: 739px) {
    ${tw`w-[360px] mx-0 px-0`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[690px] mx-6`}
  }
`;

export const ContentBlack = styled.div`
  ${tw`w-full mt-[45px] bg-black flex justify-center items-center`}
`;

export const LatestNews = styled.div`
  ${tw`w-full h-[670px] flex `}

  @media (max-width: 739px) {
    ${tw`flex-wrap h-auto`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`flex-wrap h-auto`}
  }
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

  @media (max-width: 739px) {
    ${tw`w-full mr-0 h-[250px]`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-full mr-0 h-[670px]`}
  }
`;

export const LatestNewsRight = styled.div`
  ${tw`w-1/3 ml-[15px] flex flex-col justify-between`}
  @media (max-width: 739px) {
    ${tw`w-full ml-0`}
  }

  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-full ml-0`}
  }
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

  @media (max-width: 739px) {
    ${tw`h-[250px] mt-5`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`h-[670px] mt-5`}
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
      @media (max-width: 739px) {
        ${tw`text-lg`}
      }
    }
  }

  @media (max-width: 739px) {
    ${({ number }) => number === 0 && tw`p-[30px]`}
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

  @media (max-width: 739px) {
    ${tw`text-[12px]`}
  }
`;

export const AuthorName = styled.p`
  ${tw`transition delay-0 ease-linear duration-300`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;
