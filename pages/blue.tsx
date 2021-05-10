import styled from "styled-components";
import MainSearchInput from "../src/components/MainSearchInput";
import ObservingBoard from "../src/components/ObservingBoard";

const Blue = () => {
  return (
    <Wrapper>
      <Container>
        MobX
        <MainSearchInput />
        <ObservingBoard />
      </Container>
    </Wrapper>
  );
};
export default Blue;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(172 147 234);
  width: 400px;
  height: 600px;
  border-radius: 200px;
  padding: 40px 0 0 0;
  color: #fff;
  font-size: 40px;
`;
