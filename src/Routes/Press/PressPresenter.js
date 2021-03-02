import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(45, 63, 81);
`;

const PressPresenter = () => {
  return (
    <Container>
      <div>This is press</div>
    </Container>
  );
};

export default PressPresenter;
