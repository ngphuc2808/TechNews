import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.header`
  ${tw`fixed top-0 right-0 left-0 z-50`}
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Container = styled.div`
  ${tw`flex flex-col justify-center items-center mt-[145px]`}
  > * {
    &:last-child {
      ${tw`mb-[45px]`}
    }
  }
`;

export const BreadCrumb = styled.div`
  ${tw`w-full py-5 flex items-center justify-center`}
`;

export const ListLink = styled.div`
  ${tw`w-[1260px] px-[15px]`}
  > :last-child {
    ${tw`text-[var(--primary)]`}
  }
`;

export const Item = styled.span`
  ${tw`text-[var(--text-color-black-four)]`}
`;

export const Slash = styled.span`
  ${tw`text-[var(--text-color-black-four)] mx-[10px]`}
`;

export const Title = styled.div<{ darkMode: boolean }>`
  ${tw`w-full py-[60px] flex items-center justify-center bg-[var(--body-light)]`}
  ${({ darkMode }) => darkMode && tw`bg-[var(--text-color-black-five)]`}
  > :first-child > h1 {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }
`;

export const TitleContent = styled.div`
  ${tw`w-[1260px] px-[15px]`}
`;

export const Name = styled.h1`
  ${tw`text-4xl font-semibold text-[var(--text-color-black)]`}
`;
