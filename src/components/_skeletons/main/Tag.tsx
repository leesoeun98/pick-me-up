import styled from "styled-components";
import Colors from "@colors";

export default function Skeleton() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  width: 3rem;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: ${Colors.LIGHT_GREY};
  margin: 0 0.1rem 0 0.1rem;
`;
