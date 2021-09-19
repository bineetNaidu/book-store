import Navbar from '../components/Navbar';
import Container from '../components/Container';
import styled from 'styled-components';
import { Wrapper } from '../components/Wrapper';

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  padding: 20px;
`;

const Index = () => {
  return (
    <div>
      <Navbar />
      <Container marginTop="55px">
        <h1>Welcome to Our EBook Store</h1>
        <Wrapper>
          <Wrapper flex={2}>
            <h3>Author of the week</h3>
            {/* List of Author of the week */}
          </Wrapper>

          <Wrapper flex={6.5}>
            <h3>Books of the week</h3>

            {/*List of Books  */}
          </Wrapper>

          <Wrapper flex={1.5}>
            <h3>Ads</h3>

            {/*List of Books  */}
          </Wrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Index;
