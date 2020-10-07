import styled, { css } from "styled-components";
import Colors from "../Colors";

type TagButtonProps = {
  backgroundColor: Colors;
  borderColor: Colors;
};

export default styled.button`
  width: fit-content;
  height: 1rem;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0 0.6rem 0 0.6rem;
  margin: 0 0.1rem 0 0.1rem;
  flex-direction: row;
  ${(props: TagButtonProps) => css`
    background-color: ${props.backgroundColor};
    border: solid 0.01rem ${props.borderColor};
  `}
`;
