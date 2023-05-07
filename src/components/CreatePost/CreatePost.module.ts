import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.header`
  ${tw`fixed top-0 right-0 left-0 z-50`}
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Container = styled.div`
  ${tw`flex flex-col justify-center items-center mt-[107px]`}
`;

export const DivTop = styled.div`
  ${tw`flex items-center justify-between`}
`;

export const DivTitle = styled.div`
  ${tw`w-[48%] mb-[25px]`}
  > :last-child > :last-child {
    ${tw`h-[397px] max-h-[397px] overflow-auto`}
  }
`;

export const HeaderTitle = styled.div`
  ${tw`flex items-center justify-between mb-3`}
`;

export const DivContent = styled.div`
  ${tw``};
`;

export const Content = styled.div<{ darkMode: boolean }>`
  ${tw`w-[1260px] px-[15px] mt-[45px] text-black`}
  > ${DivContent} > :last-child > :last-child {
    ${tw`h-[600px] overflow-auto mb-[20px]`}
  }
  > ${DivContent}, ${DivTitle} > :last-child {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }
`;

export const Title = styled.h1<{ darkMode: boolean }>`
  ${tw`text-2xl mb-3 font-semibold`}
  ${({ darkMode }) => darkMode && tw`text-white`}
`;

export const TitlePost = styled.h1<{ darkMode: boolean }>`
  ${tw`text-2xl font-semibold`}
  ${({ darkMode }) => darkMode && tw`text-white`}
`;

export const DivButton = styled.div`
  ${tw`w-full flex items-center justify-end mb-[90px]`}
`;

export const Button = styled.button`
  ${tw`bg-[var(--navbar-dark)] w-[150px] py-2 px-5 text-[var(--primary)] hover:opacity-90`}
`;
