import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Form } from 'formik';
import styled, { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.section`
  ${tw``}
`;

export const Header = styled.header`
  ${tw`fixed top-0 right-0 left-0 z-50`}
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Container = styled.div`
  ${tw`flex flex-col justify-center items-center mt-[107px]`}
`;

export const Content = styled.div`
  ${tw`w-[1260px] px-[15px] mt-[45px]`}

  @media (max-width: 739px) {
    ${tw`w-[360px] px-0`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-[690px]`}
  }
`;

export const Title = styled.h2`
  ${tw`text-[var(--text-color-black)] uppercase font-semibold text-2xl`}
`;

export const InfoBoard = styled.div<{ darkMode: boolean }>`
  ${tw`flex w-full mt-[45px] mb-[90px] border-2 border-solid border-[var(--navbar-dark)]`}
  ${({ darkMode }) => darkMode && tw`border-[var(--text-color)]`}

  @media (max-width: 739px) {
    ${tw`flex-col`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`flex-col`}
  }
`;

export const Left = styled.div<{ darkMode: boolean }>`
  ${tw`w-[25%] border-r-2 border-solid border-[var(--navbar-dark)]`}
  ${({ darkMode }) => darkMode && tw`border-[var(--text-color)]`}

  @media (max-width: 739px) {
    ${tw`w-full border-b-2 border-r-0`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-full border-b-2 border-r-0`}
  }
`;

export const Right = styled.div`
  ${tw`w-[75%]`}

  @media (max-width: 739px) {
    ${tw`w-full`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`w-full`}
  }
`;
export const Avatar = styled.div`
  ${tw`w-[220px] h-[220px] relative bg-white my-[20px] mx-auto`}
`;

export const Name = styled.h3`
  ${tw`text-[var(--text-color-black)] text-[22px] flex justify-center items-center`}
`;

export const CustomIcon = styled(FontAwesomeIcon)`
  ${tw`absolute top-[6px] right-[30px] text-[20px] cursor-pointer text-[var(--text-color-black)]`}
`;

export const GroupEditName = styled.div`
  ${tw`w-[60%] m-auto`}
`;

export const EditName = styled(Field)`
  ${tw`w-full bg-transparent text-[var(--text-color-black)] block m-auto border-b-[1px] border-solid border-[var(--navbar-dark)] caret-[var(--primary)] outline-none py-1 px-2`}
`;

export const CustomIconX = styled(FontAwesomeIcon)`
  ${tw`absolute top-[6px] right-[20px] text-[20px] cursor-pointer text-[var(--text-color-black)]`}
`;

export const Button = styled.button`
  ${tw``}
`;

export const CustomIconCheck = styled(FontAwesomeIcon)`
  ${tw`absolute top-[6px] right-[40px] text-[20px] cursor-pointer text-[var(--text-color-black)]`}
`;

export const GroupName = styled.div<{ darkMode: boolean }>`
  ${tw`relative`}
  > ${Name} {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }
  > ${EditName} {
    ${({ darkMode }) => darkMode && tw`text-white border-white`}
  }
  > ${CustomIcon} {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }
  > ${CustomIconX} {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }
  > ${Button} > ${CustomIconCheck} {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }

  ${CustomIcon}:hover {
    ${tw`text-[var(--primary)]`}
  }
  ${Button}:hover > ${CustomIconCheck} {
    ${tw`text-[#5cff5c]`}
  }
  ${CustomIconX}:hover {
    ${tw`text-[#ff4c4c]`}
  }
`;

export const Info = styled.div`
  ${tw`text-[var(--text-color-black)]`}
`;

export const InfoContent = styled.h3`
  ${tw`uppercase font-semibold text-[18px]`}
`;

export const InfoText = styled.p`
  ${tw`mt-1`}
`;

export const Input = styled(Field)<{ error: number }>`
  ${tw`w-full mb-5 bg-transparent text-[var(--text-color-black)] block m-auto border-b-[1px] border-solid border-[var(--navbar-dark)] caret-[var(--primary)] outline-none py-1 px-2`}
  ${({ error }) => (error === 1 ? tw`border border-red-500` : tw`border-b border-solid border-[var(--navbar-dark)]`)};
`;

export const Label = styled.label`
  ${tw`flex items-center justify-center`}
  > input {
    ${tw`mr-2 w-[16px] h-[16px]`}
  }
`;

export const GroupGender = styled.div`
  ${tw`flex justify-around items-center mt-[15px] mb-[20px]`}
`;

export const DatePickerElement = styled.div``;

export const DatePickerWrapperStyles = createGlobalStyle<{ darkMode: boolean }>`
    .date_picker input {
        ${tw`w-full mt-2 mb-5 outline-none py-1 px-2 border-b-[1px] border-solid border-[var(--navbar-dark)] caret-[var(--primary)] bg-transparent`}
        ${({ darkMode }) => darkMode && tw`text-[var(--text-color)]`}
    }
`;

export const GroupInfo = styled.div<{ darkMode: boolean; checkSet: boolean }>`
  ${tw`mx-auto w-[220px] mt-[15px]`}
  > * {
    &:not(:first-child) {
      ${tw`mt-[15px]`}
    }
    &:last-child {
      ${tw`mb-[30px]`}
    }
  }
  > ${Info} > ${InfoContent} {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }
  > ${Info} > ${InfoText} {
    ${({ darkMode }) => darkMode && tw`text-[var(--text-color)]`}
  }
  > ${Info} > ${InfoText} {
    ${({ darkMode }) => darkMode && tw`text-[var(--text-color)]`}
  }
  > ${Info} > ${Input} {
    ${({ darkMode }) => darkMode && tw`text-white border-white`}
  }
  > ${Info} > ${GroupGender} > ${Label} {
    ${({ darkMode }) => darkMode && tw`text-white`}
  }

  @media (max-width: 739px) {
    ${tw`text-center mt-[30px]`}
    ${({ checkSet }) => checkSet && tw`text-left w-full px-[30px]`}
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    ${tw`text-center mt-[30px]`}
    ${({ checkSet }) => checkSet && tw`text-left w-full px-[30px]`}
  }
`;

export const NewForm = styled(Form)`
  ${tw``}
`;

export const ErrorMsg = styled.div`
  ${tw`text-red-500 mt-1 w-full`}
`;

export const TitleRight = styled.h2<{ darkMode: boolean }>`
  ${tw`text-[var(--text-color-black)] uppercase font-semibold text-xl py-5 px-10`}
  ${({ darkMode }) => darkMode && tw`text-white`}
`;

export const ListPost = styled.div`
  ${tw`px-10 pb-10`}
`;

export const CameraZone = styled.label`
  ${tw`absolute p-[10px] bg-[var(--text-color-black-two)] rounded-full flex justify-center items-center bottom-[15px] right-[15px] cursor-pointer`}
  input {
    ${tw`hidden`}
  }
`;

export const CustomIconCamera = styled(FontAwesomeIcon)`
  ${tw`text-[16px] text-white`}
`;
