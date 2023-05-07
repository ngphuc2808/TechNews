import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Textarea } from '@nextui-org/react';
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
      ${tw`mb-[60px]`}
    }
  }
`;

export const Banner = styled.div`
  ${tw`relative w-full h-[550px] bg-black flex justify-center items-center z-0`}
`;

export const BannerImage = styled.div`
  ${tw`absolute w-full h-full overflow-hidden flex justify-center items-center`}
  img {
    ${tw`w-full h-full`}
  }
`;

export const Description = styled.div`
  ${tw`relative flex flex-col items-center z-50`}
`;

export const CategoryTag = styled.div`
  ${tw`flex items-center justify-start text-white mb-7`}
`;

export const CategoryName = styled.p`
  ${tw`py-1.5 px-[11px] text-[13px] font-semibold uppercase bg-[#865681] min-w-[100px] text-center`}
`;

export const Title = styled.h1`
  ${tw`capitalize text-[40px] font-semibold text-center`}
`;

export const TagList = styled.ul`
  ${tw`flex items-center list-none mt-5`}
`;

export const TagItem = styled.li`
  ${tw`text-[16px] text-white flex items-center mr-5`}
`;

export const TagItemLike = styled.li`
  ${tw`text-[#6B7074] flex items-center mr-5`}
  > svg, p {
    ${tw`text-lg`}
  }
`;

export const AuthorName = styled.p`
  ${tw`transition delay-0 ease-linear duration-300`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;

export const Number = styled.p`
  ${tw`text-sm`}
`;

export const Overlay = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full`}
  background: linear-gradient(180deg, rgba(18, 18, 19, 0) 0%, #121213 100%);
`;

export const Content = styled.div<{ darkMode: boolean }>`
  ${tw`w-[1260px] px-[15px] mt-[60px] mb-[30px] text-[var(--text-color-black)]`}
  ${({ darkMode }) => darkMode && tw`text-white`}
`;

export const PostShares = styled.div`
  ${tw`w-full mt-[60px] flex items-center`}
`;

export const TitleShare = styled.h3<{ darkMode: boolean }>`
  ${tw`text-[var(--text-color-black)] text-xl font-semibold mr-8`}
  ${({ darkMode }) => darkMode && tw`text-white`}
`;

export const IconShare = styled.button`
  ${tw`mx-[8px]`}
`;

export const CustomIconFacebook = styled(FontAwesomeIcon)`
  ${tw`py-[10px] px-[35px] text-xl text-white bg-[#3B5998]`}
`;

export const CustomIconTwitter = styled(FontAwesomeIcon)`
  ${tw`py-[10px] px-[35px] text-xl text-white bg-[#00B6F1]`}
`;

export const Line = styled.hr<{ darkMode: boolean }>`
  ${tw`my-[60px] w-full border-t-[1px] border-solid border-[var(--text-color-black)] opacity-20`}
  ${({ darkMode }) => darkMode && tw`border-white`}
`;

export const AuthorInfo = styled.div`
  ${tw`w-full flex items-center`}
`;

export const AuthorAvatar = styled.div`
  ${tw`w-[135px] h-[135px] rounded-full overflow-hidden mr-8 relative`}
`;

export const LastAuthorName = styled.p`
  ${tw`text-lg font-semibold`}
`;

export const AuthorNameAndTotalLike = styled.div`
  ${tw``}
`;

export const CustomIconLike = styled(FontAwesomeIcon)<{ check: number }>`
  ${tw`text-lg cursor-pointer mr-1`}
  ${({ check }) => check === 1 && tw`text-[#63e6be]`}
  &:hover {
    ${tw`text-[#63e6be]`}
  }
`;

export const CustomIconDislike = styled(FontAwesomeIcon)<{ check: number }>`
  ${tw`text-lg cursor-pointer mr-1`}
  ${({ check }) => check === 0 && tw`text-[#c8210e]`}

  &:hover {
    ${tw`text-[#c8210e]`}
  }
`;

export const TitleComment = styled.h1`
  ${tw`text-2xl font-semibold mb-[35px] block`}
`;

export const CommentArea = styled.div`
  ${tw``}
  > * {
    &:last-child > * {
      ${tw`mb-6`}
    }
    &:last-child > :first-child {
      ${tw`mt-6`}
    }
  }
`;

export const Comment = styled.div`
  ${tw`flex items-center`}
`;

export const CommentScroll = styled.div`
  ${tw`overflow-auto max-h-[420px]`}
`;

export const LineComment = styled.hr<{ darkMode: boolean }>`
  ${tw`w-full border-t-[1px] border-solid border-[var(--text-color-black)] opacity-20`}
  ${({ darkMode }) => darkMode && tw`border-white`}
`;

export const UserAvatar = styled.h2`
  ${tw`relative w-[75px] h-[75px] rounded-full overflow-hidden mr-5`}
`;

export const NameOfUser = styled.h2`
  ${tw`font-semibold text-base`}
`;

export const TimeCmt = styled.h3<{ darkMode: boolean }>`
  ${tw`mt-2 text-sm`}
  ${({ darkMode }) => darkMode && tw`text-[var(--text-color)]`}
`;

export const CommentContent = styled.p<{ darkMode: boolean }>`
  ${tw`mt-1 text-[var(--text-color-black)]`}
  ${({ darkMode }) => darkMode && tw`text-[var(--text-color)]`}
`;

export const DesComment = styled.div`
  ${tw``}
`;

export const TextAreaComment = styled(Textarea)``;

export const HandleComment = styled.div<{ darkMode: boolean }>`
  ${tw`flex flex-col justify-end items-end mb-5`}

  ${TextAreaComment} {
    > :first-child {
      ${({ darkMode }) => darkMode && tw`bg-[#1a1a1a]`}
    }
    > :first-child > :last-child {
      ${({ darkMode }) => darkMode && tw`text-[var(--text-color)]`}
    }
  }
`;

export const ButtonComment = styled.button`
  ${tw`w-[10%] px-3 py-2 bg-[var(--navbar-dark)] text-[var(--primary)] rounded-[6px] hover:opacity-90`}
`;
