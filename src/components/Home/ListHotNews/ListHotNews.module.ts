import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.section`
  ${tw`text-[var(--text-color-black)]`}
`;

export const Top = styled.div<{ darkMode: boolean }>`
  ${tw`flex items-center justify-between mb-5`}
  ${({ darkMode }) => darkMode && tw`text-white`}
`;

export const Title = styled.h2`
  ${tw`text-[32px] font-semibold`}
`;

export const ViewAll = styled.p`
  ${tw`text-sm font-semibold uppercase relative cursor-pointer uppercase`}
  &:before {
    ${tw`content-[''] absolute bottom-0 left-0 w-full h-0.5 scale-x-0 origin-bottom-left bg-current transition delay-0 ease-out duration-200`}
  }

  &:hover {
    ${tw`opacity-80`}
    &:before {
      ${tw`scale-x-100`}
    }
  }
`;

export const ListCard = styled.div`
  ${tw`flex items-center justify-between`}

  @media (max-width: 739px) {
    ${tw`flex-wrap`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`flex-wrap`}
  }
`;

export const Card = styled.div`
  ${tw`relative h-[450px] w-[23%] overflow-hidden`}
  > img {
    ${tw`transition delay-0 ease-linear duration-200`}
  }
  &:hover > img {
    ${tw`scale-110`}
  }
  &:hover > :last-child > :first-child {
    ${tw`translate-y-[-10px]`}
  }
  &:hover > :last-child > :first-child > h3 > a {
    background-size: 100% 2px;
    color: inherit;
  }

  @media (max-width: 739px) {
    ${tw`w-full h-[250px] mb-5`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[48%] mb-5`}
  }
`;

export const DescriptionNews = styled.div<{ number: number }>`
  ${tw`bottom-0 left-0 w-full transition delay-0 ease-linear duration-300`}
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
  ${tw`flex items-center justify-start text-white`}
`;

export const CategoryName = styled.p`
  ${tw`py-1.5 px-[11px] text-[11px] font-semibold uppercase mr-2.5 mb-2.5`}
`;

export const NewsTitle = styled.h3`
  ${tw`font-semibold mb-2.5 relative text-white`}
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

export const Overlay = styled.div`
  ${tw`absolute bottom-0 left-0 flex w-full h-full items-end py-5 px-[30px]`}
  background: linear-gradient(180deg, rgba(18, 18, 19, 0) 0%, #121213 100%);
`;
