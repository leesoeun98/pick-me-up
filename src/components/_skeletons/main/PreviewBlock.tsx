import Wrapper from "@src/components/atoms/Wrapper/PostBlock";
import styled, { css } from "styled-components";
import Colors from "@colors";

export default function Skeleton() {
  return (
    <Wrapper>
      <Top>
        <Title></Title>
        <Row>
          <Profile></Profile>
          <Name></Name>
        </Row>
      </Top>
      <Bottom>
        <Block width="6.6rem"></Block>
        <Block width="6rem"></Block>
      </Bottom>
    </Wrapper>
  );
}

const Top = styled.div`
  width: 100%;
  height: 3.6rem;
  border-bottom: 0.04rem solid ${Colors.LIGHT_GREY};
  padding: 0.6rem 1rem 0.6rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  height: 0.9rem;
  border-radius: 0.12rem;
  background-color: ${Colors.LIGHT_GREY};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Profile = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background-color: ${Colors.LIGHT_GREY};
`;

const Name = styled.div`
  width: 2rem;
  height: 0.5rem;
  border-radius: 0.12rem;
  background-color: ${Colors.LIGHT_GREY};
  margin-left: 0.24rem;
`;

const Bottom = styled.div`
  width: 100%;
  padding: 0.8rem 1rem 0 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  ${(props: { width: string }) =>
    css`
      width: ${props.width};
    `};
  height: 0.5rem;
  border-radius: 0.12rem;
  background-color: ${Colors.LIGHT_GREY};
  margin-bottom: 0.5rem;
`;
