import styled from 'styled-components';
import tw from 'twin.macro';
import { Form, Field } from 'formik';

export const FormRegister = styled(Form)`
  ${tw`w-full mt-5 flex flex-col items-center justify-center`}
`;

export const Input = styled(Field)<{ error: number }>`
  ${tw`w-[70%] h-12 mt-[15px] py-2 px-4 outline-none bg-[#ecebeb] caret-black text-[var(--text-color-black)]`}
  ${({ error }) => (error === 1 ? tw`border border-red-500` : tw`border-b border-solid border-[#0154b1]`)};
`;

export const Button = styled.button`
  ${tw`w-[70%] h-12 mt-[32px] mb-[64px] bg-[var(--navbar-dark)] text-[var(--primary)] uppercase text-lg`}
  &:hover {
    ${tw`opacity-90`}
  }
`;

export const LoginButton = styled.p`
  ${tw`absolute text-[var(--text-color-black)] bottom-[15px] right-[25px] cursor-pointer`}
  &:hover {
    ${tw`text-[var(--primary)]`}
  }
`;

export const ErrorMsg = styled.div`
  ${tw`text-red-500 mt-2 w-[70%]`}
`;
