import styled, { css } from "styled-components";

export default styled.div`
${(props) => css`
  background-color: ${props.background};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding:0 0 2rem 0;
  `}
`;