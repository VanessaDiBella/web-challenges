import styled from "styled-components";

export default styled.section`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: green;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  &:hover {
    background-color: blue;
  }
`;
