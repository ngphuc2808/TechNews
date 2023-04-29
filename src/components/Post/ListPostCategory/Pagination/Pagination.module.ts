import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledReactPaginate = styled(ReactPaginate)<{ darkMode: boolean }>`
  ${tw`flex justify-center items-center`}
  > li {
    ${tw`w-10 h-10 flex justify-center items-center rounded-full cursor-pointer mx-2 bg-[var(--body-light)] font-semibold text-base text-[var(--text-color-black)]`}
    ${({ darkMode }) => darkMode && tw`bg-[var(--navbar-dark)] text-white`}
  }
  > li > a {
    ${tw`w-full h-full flex justify-center items-center rounded-full`}
  }
  > li {
    &:hover > a {
      ${tw`bg-black text-[var(--primary)]`}
    }
  }
`;
