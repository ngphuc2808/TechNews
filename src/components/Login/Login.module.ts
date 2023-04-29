import styled from 'styled-components';
import tw from 'twin.macro';
import { Form, Field } from 'formik';

export const FormLogin = styled(Form)`
  ${tw`w-full mt-[36px] flex flex-col items-center justify-center`}
  > :first-child {
    ${tw`mt-0`}
  }
`;

export const Input = styled(Field)`
  ${tw`w-[70%] h-12 mt-[15px] py-2 px-4 outline-none bg-[#ecebeb] caret-black text-[var(--text-color-black)]`}
`;

export const Button = styled.button`
  ${tw`w-[70%] h-12 mt-[60px] bg-[var(--navbar-dark)] text-[var(--primary)] uppercase text-lg`}
  &:hover {
    ${tw`opacity-90`}
  }
`;
