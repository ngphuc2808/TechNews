import styled from 'styled-components';
import tw from 'twin.macro';

const MyDiv = styled.div`
  ${tw`bg-red-50`}
`;
const Home = () => {
  return <MyDiv>Hello mn</MyDiv>;
};

export default Home;
